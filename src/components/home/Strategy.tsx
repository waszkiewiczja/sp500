const containerStyle = `max-w-2xl mx-auto p-4 border rounded-md shadow-md mt-8`;
const stockDatabase = [
  'UAL',
  'WBD',
  'HAL',
  'NVDA',
  'MRO',
  'FSLR',
  'BG',
  'SLB',
  'CZR',
  'BIO',
  'LVS',
  'DAL',
  'APA',
  'LKQ',
  'HUM',
  'EG',
  'FOX',
  'ALB',
  'ACGL',
  'APTV',
  'GM',
  'CTRA',
  'XOM',
  'ADM',
  'TRGP',
  'BKR',
  'NEM',
  'AES',
  'INCY',
  'MRNA',
  'CTVA',
  'EQT',
  'BIIB',
  'LVY',
];

export const Strategy: React.FC = () => {
  const isNewDataCorrect = ({
    child1,
    child2,
  }: {
    child1: string[];
    child2: string[];
  }): string => {
    const uniqueSet = new Set(stockDatabase);

    const uniqueChild1Elements = child1.filter(
      (element) => !uniqueSet.has(element),
    );
    const uniqueChild2Elements = child2.filter(
      (element) => !uniqueSet.has(element),
    );

    // if empty then true
    return ![...uniqueChild1Elements, ...uniqueChild2Elements].length
      ? 'true '
      : `false ${[...uniqueChild1Elements, ...uniqueChild2Elements]}`;
  };

  const toSellAll = ({
    oldArray,
    newArray,
  }: {
    oldArray: string[];
    newArray: string[];
  }): string[] => {
    const uniqueSet = new Set(newArray);

    const uniqueFromArray = oldArray.filter(
      (element) => !uniqueSet.has(element),
    );

    return uniqueFromArray;
  };

  const toBuyAll = ({
    oldArray,
    newArray,
  }: {
    oldArray: string[];
    newArray: string[];
  }): string[] => {
    const uniqueSet = new Set(oldArray);

    const uniqueFromArray = newArray.filter(
      (element) => !uniqueSet.has(element),
    );

    return uniqueFromArray;
  };

  const oldArray = [
    'UAL',
    'WBD',
    'HAL',
    'NVDA',
    'MRO',
    'FSLR',
    'BG',
    'SLB',
    'CZR',
    'BIO',
    'LVS',
    'DAL',
    'APA',
    'LKQ',
    'HUM',
    'EG',
    'FOX',
    'ALB',
    'ACGL',
    'APTV',
    'GM',
    'CTRA',
    'XOM',
    'ADM',
    'TRGP',
  ];

  const newArray = [
    'FSLR',
    'UAL',
    'WBD',
    'BG',
    'BKR',
    'NEM',
    'SLB',
    'ALB',
    'CZR',
    'DAL',
    'MRO',
    'APA',
    'APTV',
    'HAL',
    'AES',
    'LKQ',
    'BIO',
    'LVS',
    'INCY',
    'MRNA',
    'CTVA',
    'EQT',
    'BIIB',
    'LVY',
    'TRGP',
  ];
  console.log(
    'isNewDataCorrect',
    isNewDataCorrect({ child1: oldArray, child2: newArray }),
  );

  console.log(
    'toSellAll',
    toSellAll({ oldArray: oldArray, newArray: newArray }),
  );
  console.log('toBuyAll', toBuyAll({ oldArray: oldArray, newArray: newArray }));
  return (
    <div className={containerStyle} data-testid="strategy">
      <p>
        isNewDataCorrect:{' '}
        {isNewDataCorrect({ child1: oldArray, child2: newArray })}{' '}
      </p>
      <br></br>
      <p>
        toSellAll:{' '}
        {toSellAll({ oldArray: oldArray, newArray: newArray }).map(
          (el) => el + ', ',
        )}
      </p>

      <br></br>
      <p>
        toBuyAll:{' '}
        {toBuyAll({ oldArray: oldArray, newArray: newArray }).map(
          (el) => el + ', ',
        )}
      </p>
    </div>
  );
};
