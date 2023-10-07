
import Link from 'next/link';

function Overview() {
  return (
    <div>
     <p>hello from Overview page</p>
    
      <Link href="../pages/Index">
        Return to Main page
      </Link>
    </div>
  );
}

export default Overview;