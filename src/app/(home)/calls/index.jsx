import React from 'react';
import { SafeAreaView } from 'react-native';
import {
    CallContent,
    StreamCall,
    useStreamVideoClient} from '@stream-io/video-react-native-sdk';
const callId = 'default_2e8f59df-43ac-4958-85fa-d0bbd89695d1';

const CallScreen = () => {
    const client =useStreamVideoClient();
    const call = client.call('default',callId);
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