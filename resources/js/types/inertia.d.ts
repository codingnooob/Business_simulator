import { PageProps as InertiaPageProps } from '@inertiajs/core';

// Globally page props provided by `./app/Http/Middleware/HandleInertiaRequests.php`
interface AppPageProps {
  // This is where we can add our global page props
  user: {
    id: string;
    name: string;
    email: string;
  };
}

declare module '@inertiajs/core' {
  interface PageProps extends AppPageProps, InertiaPageProps {}
}