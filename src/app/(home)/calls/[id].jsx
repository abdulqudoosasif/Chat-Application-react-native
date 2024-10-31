import React from 'react';
import { SafeAreaView } from 'react-native';
import {
    CallContent,
    StreamCall,
    useStreamVideoClient} from '@stream-io/video-react-native-sdk';
import { useLocalSearchParams } from 'expo-router';

const CallScreen = () => {
   const {id} =useLocalSearchParams()

    const client =useStreamVideoClient();
    const call = client.call('default',id);
    call.join({create:true})

  return (
   <SafeAreaView className='flex-1 bg-gray'>
       <StreamCall call={call} >
       <CallContent />
      </StreamCall>
   </SafeAreaView>
  );
};

export default CallScreen;