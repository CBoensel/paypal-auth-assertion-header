# paypal-auth-assertion-header

This is a rough demo illustrating how the PayPal-Auth-Assertion header is composed and decomposed.

It follows the implementation docs on https://developer.paypal.com/docs/multiparty/issue-refund/.

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
npm install
```

...then start the app:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```
