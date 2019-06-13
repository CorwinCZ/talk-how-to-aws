import React, { Component } from 'react';
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link,
  Appear,
  Image,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import serverBudget from './assets/server-budget.png';
import lambdaDiagram from './assets/lambda-diagram.png';
import lambdaBudget from './assets/lambda-budget.png';
import lambdaMonitoring from './assets/lambda-monitoring.png';

// memes
import letsDoIt from './assets/letsDoIt.jpg';
import suchLambda from './assets/suchLambda.jpg';
import easyJob from './assets/easyJob.jpg';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

/*
SECTION 1

Intro
I have a project and I need to deploy it. 
Where to?

Option A - Buy HW, plug to wall and be happy
Option B - Buy VPS / EC2 instance and be happy too
Option C - Buy pre-made services and be happy three

Project XY

IoT based project
Starts as a hobby of developer
Continues by acquiring one or two customers
Grows world wide

Hobby phase
Buys RabsperyPi, one or two discs, plugs everything together and works on it
ADV - cheap and fast to acquire, one time cost, opprotunity to learn new stuff
DIS - management time is high, lot of non-product related issues (technical overhead). No fail-over - cannot be used in production. 

Note - mention on premise data centers - for information protection, or when HW is your product. Or when HW is part of project - part of car / train / machine


Why not recomended:
* Technical overhead
* high up-front cost of full server
* Costly upgrades / downgrades
* Hard to impelemnt scalability / fail-overs


Few customers acquired
Got a few customers, they are paying and they require relailable up-time. Moves SW to Docker and deploys to VPS / AWS EC2 / some other cloud. Set's up load balancers. 
ADV - doesn't care about HW and it's problems - pays for processing power. Can upscale / downscale size of instaces when needed. Application can be deployed on multiple physical locations
DIS - scalability can be harder to implement - differs on provider. You pay for iddle time.

Notes
* VPS / EC2 can be made much more relailable - using automated scaling, automated infrastructure deployment. Can be used all across the world. 

When recomended - NOTE - left out from presentation BURI

* For highly specific needs which are not covered by services
* For migrating existing projects / code bases to multiple locations - migration from on-premise HW

When not recomended - NOTE - left out from presentation BURI
* Your needs can be covered by existing services
* When regulations require from you to own HW on which data / app are

Grows World-wide
Got a plenty of customers, short response times, relailability, paralelization of tasks and data close to customer are required. Big data processing - BigData - data ammount which can't be processed on single computer. Peak workload.
Rewrites from custom servers to cloud Services. Buys Lambdas, managed DB, StepFunctions, Analytics services. Buys dedicated IoT services. 

ADV - pay for what you use. Paralelization without problems on scale. Don't care about HW at all. Can process unlimited ammount of users / requests. Services can be compatible with standard tools (AWS Aurora, AWS ElasticSearch Service). Relailability guranteed by provider. Distributed system / code.
DIS - Distributed system / code. Limited capabilities of services. Vendor lock-in. Services often behind nevest releases.


SECTION 2

Problem 1 - I have a running project in VPS. One part of it takes 80% of computation time and it runs only from time to time. Big text processing. - Move to Lambda

Problem 2 - I have a DB / queue system which takes a lot of maintence to operate. Doesn't provide business value on it's own. - buy DB / queue system (Aurora, RDS, ElasticSearch Service, SQS, AWS Dynamo DB)

Problem 3 - I need to deliver static / generated content to lot of users across across lot of places - CDN

Problem 4 - I need to store / process a lot of data - tera / peta bytes - S3 + Lambda

Problem 5 - I need a small API that just stores incomming data - API gateway + S3


How to AWS?

S3 + IAM

Continue with Lambdas, API gateway, SQS

AWS Free tier - two types. Free year and free parts of services.

Note - other providers have alternative services - move somewhere up.
*/

export default class Presentation extends Component {
  renderAppearListItem = inputString => (
    <Appear>
      <ListItem>{inputString}</ListItem>
    </Appear>
  );

  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How to AWS
          </Heading>
          <br />
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Petr Čaněk
          </Text>
          <br />
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Jakub Buriánek
          </Text>
          <br />
          <Link href="http://talk-how-to-aws.surge.sh" taget="_blank">
            http://talk-how-to-aws.surge.sh
          </Link>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            AWS Disclaimer
          </Heading>
          <List>
            {this.renderAppearListItem(`We are going to talk a lot about AWS`)}
            {this.renderAppearListItem(`Cause, you know...`)}
            {this.renderAppearListItem(
              `It's the only big cloud provider we know.`,
            )}
            {this.renderAppearListItem(
              'AWS is not paying us for this promotion :(',
            )}
            {this.renderAppearListItem('Honza is :) ')}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            I have a project!
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            It's working!
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            On my local...
          </Heading>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">
            Where should I deploy it?
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Buy my own HW
          </Heading>
          <List>
            {this.renderAppearListItem(
              `Buy server + rack, PC, Raspberry Pi...`,
            )}
            {this.renderAppearListItem(`Plug to electricity & internet`)}
            {this.renderAppearListItem(
              `Back-up HW / electricity & internet connection`,
            )}
            {this.renderAppearListItem(
              'Configure HW - OS, virtualization, monitoring',
            )}
            {this.renderAppearListItem(
              'Configure SW - HTTP servers, DB, firewall',
            )}
            {this.renderAppearListItem(`Run your software on it`)}
            {this.renderAppearListItem(`Bee happy 🐝`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Buy virtual server
          </Heading>
          <List>
            {this.renderAppearListItem(`VPS - virtual private server`)}
            {this.renderAppearListItem(
              `Blue Ocean, OVH, Forpsi, AWS EC2, Google Cloud VPS, Azure VPS`,
            )}
            {this.renderAppearListItem(
              'Configure SW - HTTP servers, DB, firewall',
            )}
            {this.renderAppearListItem(`Run your software on it`)}
            {this.renderAppearListItem(`Bee happy too 🐝 🐝`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Buy pre-made services
          </Heading>
          <List>
            {this.renderAppearListItem(
              `S3, AWS Lambda, AWS RDS, AWS Aurora, AWS DynamoDB`,
            )}
            {this.renderAppearListItem(
              'Configure SW - HTTP servers, DB, firewall',
            )}
            {this.renderAppearListItem(`Run your software on it`)}
            {this.renderAppearListItem(`Bee happy tree 🐝 🐝 🐝 🌳`)}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            The Project
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            Happy Bees 🐝 🐝 🐝
          </Heading>

          <Text size={1} textColor="secondary" bold>
            On trees 🌳 🌳 🌳
          </Text>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Project description
          </Heading>
          <List>
            {this.renderAppearListItem(`IoT project helping bees on trees`)}
            {this.renderAppearListItem(`Starts as hobby of one developer`)}
            {this.renderAppearListItem(
              `Grows over time - acquisition of few customers from local town`,
            )}
            {this.renderAppearListItem(
              `Becomes 🦄 start-up - grows world-wide`,
            )}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            Hobby phase
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Buy your own HW
          </Heading>
          <List>
            {this.renderAppearListItem(`Buy IoT HW and deploy it`)}
            {this.renderAppearListItem(`Buy Raspberry Pi, few discs`)}
            {this.renderAppearListItem(
              `Run server and client app on the Raspbery`,
            )}
            {this.renderAppearListItem(`Uses it for prototyping`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Own HW advantages 👍
          </Heading>
          <List>
            {this.renderAppearListItem(`Cheap and fast to acquire`)}
            {this.renderAppearListItem(`One time, up-front cost`)}
            {this.renderAppearListItem(`Opportunity to learn new stuff`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Own HW disadvantages 👎
          </Heading>
          <List>
            {this.renderAppearListItem(`Management time is high`)}
            {this.renderAppearListItem(
              `Lot of non-product related issues - technical overhead`,
            )}
            {this.renderAppearListItem(`No fail-over / back-ups`)}
            {this.renderAppearListItem(
              `Not production ready - only for prototyping`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            When to buy HW
          </Heading>
          <List>
            {this.renderAppearListItem(`Required by law / regulation`)}
            {this.renderAppearListItem(`When HW is your product`)}
            {this.renderAppearListItem(`No shit Sherlock ☝️`)}
            {this.renderAppearListItem(
              `Software is running detached from network`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            So we are not recomendidng buying own servers... Why?
          </Heading>
          <List>
            {this.renderAppearListItem(`Technical overhead`)}
            {this.renderAppearListItem(
              `Requires expertise which is unrelated to your business`,
            )}
            {this.renderAppearListItem(`High up-front cost`)}
            {this.renderAppearListItem(`Costly upgrades / downgrades`)}
            {this.renderAppearListItem(
              `Hard to implement scalability / fail-overs`,
            )}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            First few customers!
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Let's tune up a bit
          </Heading>
          <List>
            {this.renderAppearListItem(`Reliability is now really important`)}
            {this.renderAppearListItem(`Moved the SW to Docker`)}
            {this.renderAppearListItem(`Buys few VPS / EC2 instances`)}
            {this.renderAppearListItem(`Deploys and runs SW there`)}
            {this.renderAppearListItem(
              `Uses few load-balancers to spread the load`,
            )}
            {this.renderAppearListItem(
              `Note - VPS = [VPS, EC2, VDS, any virtualization type]`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            VPS advantages 👍
          </Heading>
          <List>
            {this.renderAppearListItem(
              `You don't care about HW and it's problems`,
            )}
            {this.renderAppearListItem(`You pay someone to deal with them`)}
            {this.renderAppearListItem(
              `You are paing for computation power / storage space`,
            )}
            {this.renderAppearListItem(
              `VPS can be up/down scaled - can be easy / hard`,
            )}
            {this.renderAppearListItem(
              `App can be in multiple geological locations`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            VPS disadvantages 👎
          </Heading>
          <List>
            {this.renderAppearListItem(
              `Scalability can be hard / tricky to do`,
            )}
            {this.renderAppearListItem(`You pay for reserved power`)}
            {this.renderAppearListItem(`So you pay iddle time too`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Few notes on VPS
          </Heading>
          <List>
            {this.renderAppearListItem(`You can do really a lot with VPS`)}
            {this.renderAppearListItem(
              `Huge part of web-apps are running on some sort of virtualization`,
            )}
            {this.renderAppearListItem(
              `Automatic scaling can be done with them`,
            )}
            {this.renderAppearListItem(`Automatic deployment too`)}
            {this.renderAppearListItem(`It differs a lot based on provider`)}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            Let's grow world-wide!
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            New requirements are up
          </Heading>
          <List>
            {this.renderAppearListItem(`Customers all around the world`)}
            {this.renderAppearListItem(`Short response times are needed`)}
            {this.renderAppearListItem(
              `Some customers are really HUGE - Big Data processing`,
            )}
            {this.renderAppearListItem(
              `const bigData = 'Amount of data which can not be processed on one computer'`,
            )}
            {this.renderAppearListItem(`Peak workloads are a concern too`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Use cloud services
          </Heading>
          <List>
            {this.renderAppearListItem(
              `Split the work-heavy task to Lambdas, quques and friends`,
            )}
            {this.renderAppearListItem(`Buy managed DB's to ease scaling`)}
            {this.renderAppearListItem(`Add analytics services to everything`)}
            {this.renderAppearListItem(
              `Buy specialized IoT services - AWS IoT SiteWise, AWS IoT Events`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Services advantages 👍
          </Heading>
          <List>
            {this.renderAppearListItem(`Pay for what you use`)}
            {this.renderAppearListItem(`Parallelization and scaling is easy`)}
            {this.renderAppearListItem(
              `Don't care about HW. Or OS running on that HW :)`,
            )}
            {this.renderAppearListItem(
              `Can scale to unlimited data-processing`,
            )}
            {this.renderAppearListItem(
              `Services are offten compatible with standard tools:`,
            )}
            {this.renderAppearListItem(`AWS Aurora with MariaDB & PostgreSQL`)}
            {this.renderAppearListItem(
              `AWS Elasticsearch service with ElasticSearch (big surprise)`,
            )}
            {this.renderAppearListItem(`Guaranteed relailability of service`)}
            {this.renderAppearListItem(`Distributed system / code`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Services disadvantages 👎
          </Heading>
          <List>
            {this.renderAppearListItem(`Distributed system / code`)}
            {this.renderAppearListItem(`Service capabilities are limited`)}
            {this.renderAppearListItem(`Vendor lock-in`)}
            {this.renderAppearListItem(
              `Services are offten behind newest releases`,
            )}
          </List>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            So, I want to start with AWS...
          </Heading>
        </Slide>

        <Slide bgColor="tertiary" textColor="primary">
          <Heading size={4} textColor="primary">
            How to AWS?
          </Heading>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problem 1
          </Heading>
          <List>
            {this.renderAppearListItem(`My project is running on VPS`)}
            {this.renderAppearListItem(
              `One module takes 80% of resources and time`,
            )}
            {this.renderAppearListItem(
              `Also this module is used only on few requests`,
            )}
            {this.renderAppearListItem(
              `It processes huge texts submited by users`,
            )}
            {this.renderAppearListItem(`Extract module to Lambda`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problem 2
          </Heading>
          <List>
            {this.renderAppearListItem(`I have a DB and queue system`)}
            {this.renderAppearListItem(
              `It works fine, but requires lot of maintenance`,
            )}
            {this.renderAppearListItem(
              `Business is always pushing why we spend so much time on it,`,
            )}
            {this.renderAppearListItem(
              `when it doesn't provide any value to users 🙄`,
            )}
            {this.renderAppearListItem(`Buy managed DB / queue system`)}
            {this.renderAppearListItem(
              `Aurora, RDS, ElasticSearch Service, SQS, AWS Dynamo DB`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problem 3
          </Heading>
          <List>
            {this.renderAppearListItem(`I have a plenty of static content`)}
            {this.renderAppearListItem(`And users all around the globe`)}
            {this.renderAppearListItem(`CDN to the rescue!`)}
            {this.renderAppearListItem(
              `Jup, CDN can be also considered as a cloud service :)`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problem 4
          </Heading>
          <List>
            {this.renderAppearListItem(`You know, I have lots, lots of data?`)}
            {this.renderAppearListItem(`Like... tera / peta bytes of data?`)}
            {this.renderAppearListItem(`I need to process every single file!`)}
            {this.renderAppearListItem(`Store them to S3`)}
            {this.renderAppearListItem(`Trigger Lambda for each file`)}
          </List>
        </Slide>

        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Problem 5
          </Heading>
          <List>
            {this.renderAppearListItem(
              `I just need to store results from one form`,
            )}
            {this.renderAppearListItem(`That's it`)}
            {this.renderAppearListItem(`It will run only for a short time`)}
            {this.renderAppearListItem(`With plenty of users comming in waves`)}
            {this.renderAppearListItem(`API Gateway sending data to S3`)}
            {this.renderAppearListItem(
              `S3 is object storage, data doesn't have to be file :)`,
            )}
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Discussion & Q&A
          </Heading>
          <br />
          <Link href="http://talk-how-to-aws.surge.sh" taget="_blank">
            http://talk-how-to-aws.surge.sh
          </Link>
          <br />
          <br />
          <Link
            href="https://github.com/CorwinCZ/talk-how-to-aws"
            taget="_blank"
          >
            https://github.com/CorwinCZ/talk-how-to-aws
          </Link>
        </Slide>
      </Deck>
    );
  }
}
