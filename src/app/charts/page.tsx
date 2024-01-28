import { Metadata } from 'next';
import { Charts } from '@/components/charts/Charts';

export const metadata: Metadata = {
  title: 'Stock Investment Calculator',
  description: 'Calculate your ROI',
};

export default function ChartsWrapper(): JSX.Element {
  return <Charts />;
}
