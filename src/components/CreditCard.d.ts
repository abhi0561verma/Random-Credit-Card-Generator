declare module '@/components/CreditCard' {
    import { FC } from 'react';
    import { CardDetails } from '@/pages/Index'; // Adjust the import based on your actual structure

    interface CreditCardProps {
        details: CardDetails | null;
        isGenerating: boolean;
    }

    const CreditCard: FC<CreditCardProps>;
    export default CreditCard;
} 