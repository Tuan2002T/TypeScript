import * as React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function HomeScreen() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '12%', backgroundColor: '#535CE9', paddingHorizontal: 20, alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Hello, Rosie</Text>
                    <Text style={{ fontSize: 15, color: 'white' }}>What do you want to learn today? </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="cart-outline" size={30} color="white" />
                    <Ionicons style={{ marginLeft: 20 }} name="notifications-outline" size={30} color="white" />
                </View>
            </View>
            <View style={{ backgroundColor: '#F1C933', marginHorizontal: 20, marginVertical: 15, padding: 20, borderRadius: 5 }}>
                <View >
                    <Text style={{ fontSize: 20 }} >PROJECT MANAGEMENT</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 10 }} >20% OFF</Text>
                    <TouchableOpacity style={{ backgroundColor: '#535CE9', padding: 10, borderRadius: 5, width: '30%', marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>JOIN NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Categories</Text>
                    <Text style={{ fontSize: 15, color: '#535CE9' }}>View more</Text>
                </View>

                <FlatList
                    data={[
                        { key: 'Business', image: require('../Image/Button 17.png') },
                        { key: 'Code', image: require('../Image/Button 18.png') },
                        { key: 'Movie', image: require('../Image/Button 19.png') },
                        { key: 'Marketing', image: require('../Image/Button 20.png') },
                        { key: 'Writting', image: require('../Image/Button 21.png') },
                        { key: 'Language', image: require('../Image/Button 22.png') },
                    ]}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', width: '42%', alignItems: 'center', alignContent: 'center', marginHorizontal: 15, marginVertical: 5, padding: 10, borderWidth: 0.1, borderColor: '#cfcfcfcf', borderRadius: 10 }}>
                            <Image source={item.image} style={{ width: 50, height: 50 }} />
                            <Text style={{ fontSize: 20, color: 'gray', paddingLeft: 5 }} >{item.key}</Text>
                        </View>
                    }
                />



            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Popular Courses</Text>
                    <Text style={{ fontSize: 15, color: '#535CE9' }}>View more</Text>
                </View>

                <FlatList

                    data={[
                        { key: 'Business', image: require('../Image/Image 18.png'), tiltle: 'PHP in One Click', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Code', image: require('../Image/Image 19.png'), tiltle: 'React Native', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Movie', image: require('../Image/Image 20.png'), tiltle: 'Movie Making', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Marketing', image: require('../Image/Image 21.png'), tiltle: 'Marketing', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Writting', image: require('../Image/Image 22.png'), tiltle: 'Writting', author: 'Ramono Wultschner', price: '$20' },
                    ]}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: 15, marginVertical: 5, padding: 10, borderRadius: 10, borderWidth: 0.1, borderColor: '#cfcfcfcf' }}>
                            <Image source={item.image} style={{ width: 200, height: 100, borderRadius: 10 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <Text style={{ fontSize: 20, color: 'black' }} >{item.tiltle}</Text>
                                <Ionicons name="bookmark-outline" size={30} color="black" />
                            </View>
                            <Text style={{ fontSize: 15, color: 'gray' }} >{item.author}</Text>
                            <Text style={{ fontSize: 15, color: 'black' }} >{item.price}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <Ionicons name="star-outline" size={20} color="yellow" />
                                <Text style={{ fontSize: 15, color: 'black' }} >4.5</Text>
                                <Text style={{ fontSize: 15, color: 'black' }} >(200)</Text>
                                <Text style={{ fontSize: 15, color: 'black' }} >1.5k</Text>
                            </View>
                        </View>
                    }
                />
            </View>

            <View style={{ marginTop: 20 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Recommended for you</Text>
                    <Text style={{ fontSize: 15, color: '#535CE9' }}>View more</Text>
                </View>

                <FlatList

                    data={[
                        { key: 'Business', image: require('../Image/Image 18.png'), tiltle: 'PHP in One Click', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Code', image: require('../Image/Image 19.png'), tiltle: 'React Native', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Movie', image: require('../Image/Image 20.png'), tiltle: 'Movie Making', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Marketing', image: require('../Image/Image 21.png'), tiltle: 'Marketing', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Writting', image: require('../Image/Image 22.png'), tiltle: 'Writting', author: 'Ramono Wultschner', price: '$20' },
                    ]}
                    horizontal={true}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: 15, marginVertical: 5, padding: 10, borderRadius: 10, borderWidth: 0.1, borderColor: '#cfcfcfcf' }}>
                            <Image source={item.image} style={{ width: 200, height: 100, borderRadius: 10 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <Text style={{ fontSize: 20, color: 'black' }} >{item.tiltle}</Text>
                                <Ionicons name="bookmark-outline" size={30} color="black" />
                            </View>
                            <Text style={{ fontSize: 15, color: 'gray' }} >{item.author}</Text>
                            <Text style={{ fontSize: 15, color: 'black' }} >{item.price}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                <Ionicons name="star-outline" size={20} color="yellow" />
                                <Text style={{ fontSize: 15, color: 'black' }} >4.5</Text>
                                <Text style={{ fontSize: 15, color: 'black' }} >(200)</Text>
                                <Text style={{ fontSize: 15, color: 'black' }} >1.5k</Text>
                            </View>
                        </View>
                    }
                />
            </View>

            <View style={{ marginTop: 20 }} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Course that inspires</Text>
                    <Text style={{ fontSize: 15, color: '#535CE9' }}>View more</Text>
                </View>

                <FlatList

                    data={[
                        { key: 'Business', image: require('../Image/Image 18.png'), tiltle: 'PHP in One Click', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Code', image: require('../Image/Image 19.png'), tiltle: 'React Native', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Movie', image: require('../Image/Image 20.png'), tiltle: 'Movie Making', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Marketing', image: require('../Image/Image 21.png'), tiltle: 'Marketing', author: 'Ramono Wultschner', price: '$20' },
                        { key: 'Writting', image: require('../Image/Image 22.png'), tiltle: 'Writting', author: 'Ramono Wultschner', price: '$20' },
                    ]}


                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: 15, marginVertical: 5, padding: 10, borderRadius: 10, borderWidth: 0.1, borderColor: '#cfcfcfcf', flexDirection: 'row' }}>
                            <Image source={item.image} style={{ width: 150, height: 100, borderRadius: 10 }} />
                            <View >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                    <Text style={{ fontSize: 20, color: 'black' }} >{item.tiltle}</Text>
                                    <Ionicons name="bookmark-outline" size={30} color="black" />
                                </View>
                                <Text style={{ fontSize: 15, color: 'gray' }} >{item.author}</Text>
                                <Text style={{ fontSize: 15, color: 'black' }} >{item.price}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                    <Ionicons name="star-outline" size={20} color="yellow" />
                                    <Text style={{ fontSize: 15, color: 'black' }} >4.5</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }} >(200)</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }} >1.5k</Text>
                                </View>
                            </View>
                        </View>
                    }

                />

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Top Authors</Text>
                        <Text style={{ fontSize: 15, color: '#535CE9' }}>View more</Text>
                        </View>
                        <FlatList
                            data={[
                                { key: 'Business', image: require('../Image/Image 18.png'), tiltle: 'PHP in One Click', author: 'Ramono Wultschner', price: '$20' },
                                { key: 'Code', image: require('../Image/Image 19.png'), tiltle: 'React Native', author: 'Ramono Wultschner', price: '$20' },
                                { key: 'Movie', image: require('../Image/Image 20.png'), tiltle: 'Movie Making', author: 'Ramono Wultschner', price: '$20' },
                                { key: 'Marketing', image: require('../Image/Image 21.png'), tiltle: 'Marketing', author: 'Ramono Wultschner', price: '$20' },
                                { key: 'Writting', image: require('../Image/Image 22.png'), tiltle: 'Writting', author: 'Ramono Wultschner', price: '$20' },
                            ]}
                            horizontal={true}
                            renderItem={({ item }) =>
                                <View style={{ marginHorizontal: 15, marginVertical: 5, padding: 10, borderRadius: 10, borderWidth: 0.1, borderColor: '#cfcfcfcf' }}>
                                    <Image source={item.image} style={{ width: 200, height: 100, borderRadius: 10 }} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                        <Text style={{ fontSize: 20, color: 'black' }} >{item.tiltle}</Text>
                                        <Ionicons name="bookmark-outline" size={30} color="black" />
                                    </View>
                                    <Text style={{ fontSize: 15, color: 'gray' }} >{item.author}</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }} >{item.price}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                                        <Ionicons name="star-outline" size={20} color="yellow" />
                                        <Text style={{ fontSize: 15, color: 'black' }} >4.5</Text>
                                        <Text style={{ fontSize: 15, color: 'black' }} >(200)</Text>
                                        <Text style={{ fontSize: 15, color: 'black' }} >1.5k</Text>
                                    </View>
                                </View>
                            }
                        />

                </View>

            </View>

        </ScrollView>
    );
}