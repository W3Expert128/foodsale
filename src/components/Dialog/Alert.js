import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'


const Alert = ({ open, title, content, handleOK }) => {
    return (
        <Modal transparent={true} visible={open}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={{ width: '70%', height: 180, marginTop: 150, backgroundColor: 'white', borderRadius: 10 }}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>{title}</Text>
                        <View style={{ height: 24 }}></View>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>{content}</Text>
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: "center", alignItems: 'center', borderTopColor: "#ccc", borderTopWidth: 1 }}>
                        <TouchableOpacity
                            style={{ flex: 1, fontSize: 20, alignItems: 'center', justifyContent: 'center', padding: 10 }}
                            onPress={handleOK}
                        >
                            <Text style={{ textAlign: 'center', color: 'red' }}>确认</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default Alert;