# Installing cassandra in macbook

Install Homebrew

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

install cql and cassandra

`sudo pip3 install cql`

`brew install cassandra`

Command to run if homebrew fails to move the plist file into LaunchAgents

`cp /usr/local/Cellar/cassandra/<version number>/homebrew.mxcl.cassandra.plist ~/Library/LaunchAgents/`

Use this command to start Cassandra:

`launchctl load ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist`

Use this command to stop Cassandra:

`launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.cassandra.plist`



# Connecting to Cassandra

`https://docs.datastax.com/en/developer/nodejs-driver/4.6/getting-started/`
`https://www.instaclustr.com/support/documentation/cassandra/using-cassandra/connect-to-cassandra-with-node-js/` -> comment inside this!

Creating cassandra mapper

`https://www.datastax.com/blog/2018/12/introducing-datastax-nodejs-mapper-apache-cassandra`


# Youtube playlist on API in NodeJs
`https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q`

Github repo:
`https://github.com/academind/node-restful-api-tutorial/tree/13-controllers`