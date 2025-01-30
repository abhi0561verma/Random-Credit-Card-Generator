declare module '@/components/CardResult' {
    import { FC } from 'react';
    import { CardDetails } from '@/pages/Index'; // Adjust the import based on your actual structure

    interface CardResultProps {
        details: CardDetails;
    }

    const CardResult: FC<CardResultProps>;
    export default CardResult;
} 