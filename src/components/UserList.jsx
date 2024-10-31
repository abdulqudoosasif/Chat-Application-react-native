import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useChatContext } from 'stream-chat-expo';

import { router } from 'expo-router';
import { useAuth } from '../app/provider/authProvider';

const UserListItem = ({ user }) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();

  const onPress = async () => {
    //start a chat with him
    const channel = client.channel('messaging', {
      members: [me.id, user.id],
    });
    await channel.watch();
    router.replace(`/(home)/channels/${channel.cid}`);
  };

  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 15, backgroundColor: 'white' }}
    >
      <Text style={{ fontWeight: '600' }}>{user.full_name}</Text>
    </Pressable>
  );
};

export default UserListItem;