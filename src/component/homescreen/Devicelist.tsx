// import React from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {color} from '../../style/color';
//
// export const Devicelist: React.FC = ({peripheral, connect, disconnect}) => {
//   const {name, rssi, connected} = peripheral;
//
//   return (
//     <View>
//       <Text>Device</Text>
//       {name && (
//         <View>
//           <View>
//             <Text style={{color: color.black}}>{name}</Text>
//             <Text style={{color: color.black}}>RSSI: {rssi}</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() =>
//               connected ? disconnect(peripheral) : connect(peripheral)
//             }>
//             <Text
//               style={{color: color.black, fontWeight: 'bold', fontSize: 16}}>
//               {connected ? 'Disconnect' : 'Connect'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };
//
// const style = StyleSheet.create({});
