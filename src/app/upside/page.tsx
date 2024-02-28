import { Metadata } from 'next';
import { Upside } from '@/components/d3/Upside';

export const metadata: Metadata = {
  title: 'Upside Charts',
  description: 'Check Upside',
};

export default function UpsideWrapper(): JSX.Element {
  return <Upside />;
}
