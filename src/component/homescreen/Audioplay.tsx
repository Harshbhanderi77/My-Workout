import React from 'react';
import {
  Button,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AVModeIOSOption,
} from 'react-native-audio-recorder-player';
import * as path from 'path';
import {color} from '../../style/color';

export const Audioplay: React.FC = () => {
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const audioSet: AudioSet = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    AVModeIOS: AVModeIOSOption.measurement,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,
  };
  const meteringEnabled = false;
  //
  // try {
  //   const uri = await audioRecorderPlayer.startRecorder(
  //     path,
  //     audioSet,
  //     meteringEnabled,
  //   );
  //   audioRecorderPlayer.addPlayBackListener((e: any) => {
  //     recordSecs: e.currentPosition;
  //     recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
  //   });
  //   console.log('Recodeing:', uri);
  // } catch (error) {
  //   console.log(error);
  // }

  const Onstartrecoding = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addPlayBackListener(e => {
        recordSecs: e.currentPosition;
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const onStoprecoding = async () => {
    try {
      const result = await audioRecorderPlayer.stopPlayer();
      audioRecorderPlayer.removeRecordBackListener();
      recordSecs: 0;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onStartplay = async () => {
    try {
      console.log('onStartplay');
      const msg = await audioRecorderPlayer.stopPlayer();
      console.log(msg);
      audioRecorderPlayer.addPlayBackListener(e => {
        currentPositionSec: e.currentPosition;
        currentDurationSec: e.duration;
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition));
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration));
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const onPushplay = async () => {
    try {
      await audioRecorderPlayer.pausePlayer();
    } catch (error) {
      console.log(error);
    }
  };

  const onStopPlay = async () => {
    console.log('onPushplay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removeRecordBackListener();
  };

  return (
    <View>
      <Text style={{color: color.black}}>audio</Text>
      {/*<Button title="start" onPress={() => onStoprecoding()} />*/}
    </View>
  );
};

const style = StyleSheet.create({});
