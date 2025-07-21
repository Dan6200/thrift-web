export const Price = ({
  netPrice,
  listPrice,
}: {
  netPrice: number
  listPrice: number
}) => (
  <div className="text-lg sm:text-xl md:text-2xl font-bold w-full flex justify-between">
    <p>
      price:{'\u00A0'.repeat(4)}
      {netPrice.toLocaleString('en-NG', {
        currency: 'NGN',
        style: 'currency',
      })}
    </p>
    {netPrice.toFixed(2) !== listPrice.toFixed(2) && (
      <p className="mb-4 line-through text-muted-foreground/80">
        {listPrice.toLocaleString('en-NG', {
          currency: 'NGN',
          style: 'currency',
        })}
      </p>
    )}
  </div>
)
