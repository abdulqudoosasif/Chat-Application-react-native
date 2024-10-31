import React from 'react'
import ChatProvider from '../provider/chat-provider';
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../provider/authProvider';
import VideoProvider from '../provider/VideoProvider';


const _layout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href='/(auth)/login' />;
  }

  return (
    <ChatProvider>
      <VideoProvider>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='channels/[cid]'/>
          <Stack.Screen name='users' options={{ headerBackTitle: "Back", title: 'Users' }} />
          <Stack.Screen name='calls/index' options={{ headerShown: false }} />
        </Stack>
      </VideoProvider>
    </ChatProvider>
  );
}

export default _layout;
