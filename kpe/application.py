from flask import Flask, render_template
import twitter

CONSUMER_KEY = '89GdhDj5l9S1QCzYmRFkjJYxX'
CONSUMER_SECRET = 'pDJjs5xaMVfjROQVqwCNoi6oEktzrqdFpdzNkPx7TNISgc6HxC'
ACCESS_TOKEN = '2691600640-ECbw5faJf3mOgKHwTq0YQsbAmsT12ZiXgbTmwTy'
ACCESS_TOKEN_SECRET = 'GKGu0n0Eq54wl1pIsFzmD9eJwmpHD7cHVpsSHCaoYTP8b'

api = twitter.Api(consumer_key=CONSUMER_KEY,
                  consumer_secret=CONSUMER_SECRET,
                  access_token_key=ACCESS_TOKEN,
                  access_token_secret=ACCESS_TOKEN_SECRET)

application = Flask(__name__)

@application.route('/')
def home():
    search = api.GetSearch(term="%23kentpunenough", lang='en', result_type='recent', count=100, max_id='')
    tweets = []
    for t in search:
        tweets.append((t.text.encode('utf-8'), t.user.screen_name + ' on ' + t.created_at))

    return render_template('template.html', tweets=tweets)

if __name__ == '__main__':
    application.run(debug=True)