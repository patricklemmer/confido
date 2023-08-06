# Project Guidelines
## Folder structure and routing

This Next.js project uses Next's App Router for file based routing and a /src folder structure. All application code lives within /src, the app's root only holds config files.

To ensure consistency and avoid routing related issues, the "Split project files by feature or route" strategy is used inside the app route folder. This strategy stores globally shared application code in the root app directory and splits more specific application code into the route segments that use them.

```
.
├── public                    # Must be in root
├── src                       # Separates application code from configs
│   ├── app                   # Nested folder hierachy inside app defines route structure
│   ├── ├── components        # Non routing related components
│   ├── ├── lib               # Non routing related libs
│   ├── ├── dashboard         # Route /dashboard
│   ├── ├── ├── components    # Dashboard components
│   ├── ├── ├── lib           # Dashboard libs
│   ├── ├── ├── page.ts       # Makes /dashboard routable
│   ├── page.ts               # Main page.ts
└── Config files              # All config files in root
```

Read [project organization strategies](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-strategies) for more info.

## Naming conventions

- All dirs are in lowercase
- It's recommended to use default exports for all pages
- Variable and function names should be descriptive as much as possible
- Within components, there should be the following hierachy:
  - All hooks import come first
  - Local states with `useState` function
  - Locally generated values and functions
  - All `useEffects` should come last before the render function. See example below
  - Each section is separated from the other with an empty line to improve on readability of components

```js
const HomePage: React.FC = () => {
  /* Hook imports */
  const { users } = useUser();

  /* Local states */
  const [isActive, setIsActive] = useSate(false);

  /* Locally generated variables */
  const filteredUsers = users.filter((user) => user.isActive);

  /* Effects */
  useEffect(() => {
    console.log("effect when component loads");
  });

  return <div>Page details</div>;
};

export default PageNamePage;
```
