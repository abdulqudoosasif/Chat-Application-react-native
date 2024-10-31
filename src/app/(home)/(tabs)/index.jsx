import { ChannelList } from 'stream-chat-expo';
import { Link, Redirect, router, Stack } from 'expo-router';
import React from 'react';
import { useAuth } from '../../provider/authProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MainTab = () => {
  const {user} =useAuth()

  return (
    
  <>
  {/* <Redirect href={'/(home)/calls'}/> */}
  <Stack.Screen options={{headerRight:()=>(
    <Link href={'/(home)/users'} asChild>
 <FontAwesome name="group" size={22} color="gray" style={{marginHorizontal:15}} />
 </Link>
  )}}/>
    <ChannelList
    filters={{members:{$in:[user.id]}}}
    onSelect={(channel) => router.push(`/channels/${channel.cid}`)} />
  </>
  );
};

export default MainTab;
