import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function AuthCheck(props) {
  const { user } = useContext(UserContext);

  return user && user.firstName ? props.children : props.fallback || 
  <Link href="/" passHref><button className="bg-[#3A6344] hover:bg-blue-700 text-white py-3">You must be signed in</button></Link>;
}
