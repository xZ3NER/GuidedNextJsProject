## Routes in NextJS

The routes in NextJS looks something like:

```bash
pages/index.tsx -> '/' route
# or
pages/new-meetup/index.tsx -> '/new-meetup' route
# or
pages/new-meetup/[id].tsx -> '/new-meetup/:id' route
# or
pages/[id]/index.tsx -> '/:id' route
```

## Navigate between routes

You can navigate using:

```bash
Link element from 'next/link' 
<Link href="/">
#or
const route = useRouter();
route.push("/");
```

Also, you can obtain the actual route params, using:

```bash
const route = useRouter();
const param = route.query.id (where id it's the route id name) 
```

## Pre-rendering

In Next, we have 2 forms of pre-rendering:

```bash
1.- Static Site Generation and Incremental Static Regeneration (SSR/ISR) (with or without data)

Uses getStaticProps()

2.- Server Side Rendering (SSR)

Uses getServerSideProps()

```