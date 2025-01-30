declare module '@/pages/Index' {
    import { FC } from 'react';

    export type CardDetails = {
        number: string;
        expiry: string;
        cvv: string;
        brand: string;
        country: string;
    };

    const Index: FC;
    export default Index;
} 