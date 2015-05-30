import webapp2
import cgi
import re
import os
#from google.appengine.api import users
import jinja2

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)

def rot13(s):
    chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
    trans = chars[26:]+chars[:26]
    rot_char = lambda c: trans[chars.find(c)] if chars.find(c) > -1 else c
    return ''.join(rot_char(c) for c in s)

def escape_html(s):
    return cgi.escape(s, quote=True)

# password must contain at least one of the following "^.{3,20}$"
PW_RE = re.compile(r'^.{3,20}$')
def val_pw(p):
    return PW_RE.match(p)

# username must contain "^[a-zA-Z0-9_-]{3,20}$"
def val_username(username):
    USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,20}$")
    return USER_RE.match(username)

# email must contain "^[\S]+@[\S]+\.[\S]+$"
def val_email(email):
    EMAIL_RE = re.compile(r"^[\S]+@[\S]+\.[\S]+$")
    return EMAIL_RE.match(email)

rot13form = """
<form method='post'>
    <h2>Enter text to rot13</h2>
    <br>
    <br>
    <textarea name='text' rows='15' cols='100'>%s</textarea>
    <br>
    <br>
    <input type='Submit' action='post'>
</form>
"""
login = """
<form method='post'>
    <h2>Please register by creating your username and password.</h2>
    <br>
    <br>
    <input type='text' name='firstname' placeholder='First Name' value='%(firstname)s'>
    <br>
    <input type='text' name='lastname' placeholder='Last Name' value='%(lastname)s'>
    <br>
    <input type='text' name='username' placeholder="Username" value='%(username)s'>
    <br>
    <input type='password' name='password1' placeholder="Password" value='%(password1)s'>
    <br>
    <input type='password' name='password2' placeholder="Reenter Password" value='%(password2)s'>
    <br>
    <input type='email' name='email' placeholder="email address" value='%(email)s'>
    <br>
    <br>
    <div style='color: red'>%(error)s</div>
    <br>
    <input type='Submit' action='post'>
</form>
"""

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)
class Handler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))

class MainPage(Handler):
    def render_main(self):
        self.render("index.html")
    def get(self):
        self.render_main()
    def post(self):
        self.render_main()


class RegPage(webapp2.RequestHandler):

    def write_form(self, u="", fn = "", ln="", pw1="", pw2="", email="", error=""):
        self.response.out.write(login %{
                        "firstname" : fn,
                        "lastname" : ln,
                        "username" : u,
                        "password1" : pw1,
                        "password2" : pw2,
                        "email" : email,
                        "error" : error})

    def get(self):
        self.write_form()

    def post(self):
        user_fn = self.request.get('firstname')
        user_ln = self.request.get('lastname')
        user_un = self.request.get('username')
        user_pw1 = self.request.get('password1')
        user_pw2 = self.request.get('password2')
        user_email = self.request.get('email')

        valid_un = val_username(user_un)
        valid_pw1 = val_pw(user_pw1)
#        valid_pw2 = val_pw(user_pw2)
        valid_email = val_email(user_email)

# Error Conditions
        if not (valid_pw1): error = "%s is an Invalid password" % user_pw1
        if (user_pw1 != user_pw2): error = "Passwords do not match"
        if not (valid_email): error = "Invalid email address"



        if not((user_pw1 == user_pw2) and valid_pw1 and valid_email and valid_un):
            self.write_form(user_fn, user_ln, user_un, "", "", user_email, error)
        else: self.redirect('/rot13')

class Rot13Handler(webapp2.RequestHandler):
    def write_form(self, txt=""):
       self.response.out.write(rot13form % txt)

    def get(self):
        self.write_form()

    def post(self):
        txt = escape_html(self.request.get("text"))
        txt = rot13(txt)
        self.write_form(txt)


app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/regpage',RegPage),
    ('/rot13', Rot13Handler),
    ('/blog', BlogHandler)
], debug=True)

