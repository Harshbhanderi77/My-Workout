import React, {useState, useEffect} from 'react';
import {
  View,
  Platform,
  PermissionsAndroid,
  StyleSheet,
  Image,
  Pressable,
  Text,
  FlatList,
  TextInput,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';
import {Images} from '../assets/typimg/image';
import {color} from '../style/color';
import {goBack} from '../screennavigation/navigation';
import {request} from 'react-native-permissions';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const Contectscreen: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      let contactsPermissionResult;
      let phoneCallPermissionResult;

      if (Platform.OS === 'android') {
        contactsPermissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        );
        phoneCallPermissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        );
      } else {
        contactsPermissionResult = await request(
          'android.permission.READ_CONTACTS',
        );
        phoneCallPermissionResult = await request(
          'android.permission.CALL_PHONE',
        );
      }
      if (
        contactsPermissionResult === 'granted' &&
        phoneCallPermissionResult === 'granted'
      ) {
        loadContacts();
      } else {
        console.log('Contect Permission denied');
      }
    } catch (error) {
      console.error('Contect Permission error:', error);
    }
  };

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        const sortedContacts = contacts.sort((a, b) =>
          a.displayName.localeCompare(b.displayName),
        );
        setContacts(sortedContacts);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const filteredContacts = contacts.filter(contact => {
    const fullName = `${contact.givenName} ${contact.middleName || ''} ${
      contact.familyName || ''
    }`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const dialNumber = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshContacts();
    setIsRefreshing(false);
  };
  const refreshContacts = () => {
    setLoading(true);
    loadContacts();
  };

  const contactlist = (count: number) => {
    const numberlist = [];
    for (let i = 0; i < count; i++) {
      numberlist.push(
        <View key={i} style={{width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              height: 100,
            }}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 30}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{marginLeft: 20}}>
              <ShimmerPlaceHolder style={{width: 180, height: 14}} />
              <ShimmerPlaceHolder
                style={{width: 160, height: 14, marginTop: 6}}
              />
            </View>
          </View>
        </View>,
      );
    }
    return numberlist;
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: color.gray1,
          padding: 10,
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => goBack()}
          style={{backgroundColor: color.blue, borderRadius: 20, padding: 4}}>
          <Image
            source={Images.leftarrow}
            style={{
              width: 26,
              height: 26,
            }}
          />
        </Pressable>
        <Text
          style={{
            color: color.black,
            fontSize: 18,
            fontWeight: '600',
            marginLeft: 30,
          }}>
          Contacts
        </Text>
      </View>
      <TextInput
        style={{
          backgroundColor: color.gray1,
          color: color.black,
          paddingHorizontal: 20,
          marginHorizontal: 6,
          marginTop: 6,
          borderRadius: 40,
        }}
        placeholder="Search contacts"
        placeholderTextColor="#8c8c8c"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {searchQuery.length > 0 && filteredContacts.length === 0 && (
          <Text style={{color: color.black, fontWeight: '500', marginTop: 20}}>
            No Contacts Found
          </Text>
        )}
      </View>

      {loading ? (
        contactlist(8)
      ) : (
        <FlatList
          data={filteredContacts}
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => dialNumber(item?.phoneNumbers[0]?.number)}>
              <View
                style={{
                  padding: 5,
                  borderBottomWidth: 0.5,
                  borderBottomColor: color.gray1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    backgroundColor: color.blue,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: color.black, fontSize: 16}}>
                    {item?.givenName[0]}
                  </Text>
                </View>
                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <Text style={{color: color.black}}>
                    {item?.givenName}{' '}
                    {item?.middleName && item.middleName + ' '}
                    {item?.familyName}
                  </Text>
                  <Text style={{color: color.black}}>
                    {item?.phoneNumbers[0]?.number}
                  </Text>
                  {/*<Text style={{color: color.black}}>*/}
                  {/*  {item?.emailAddresses[0]?.email}*/}
                  {/*</Text>*/}
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
