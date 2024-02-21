import './counter.scss';

interface CountProps {
  count: number;
}
function Counter({ count }: CountProps) {
  return (
    <div className="counter">
      Il y a {count} repositories correspondant à votre recherche
    </div>
  );
}

export default Counter;
