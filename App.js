import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = ({ studentData }) => {
  const defaultData = {
    name: 'REABETSOE SEPHEKOLA',
    studentNumber: '901016515',
    semester: 'SEMESTER 2',
    grades: [
      { course:'Calculus: A+' },
      { course:'Mobile Device Programming: A' },
      { course:'Database systems: A-' },
    ],
  };

  const data =  defaultData;

  return (
    <ScrollView style={styles.container}>
     
       <View style={styles.profilePic}>
        <Image
          source={ require('./sphe.png') }
          style={styles.image}
        />
      </View>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.studentNumber}>{data.studentNumber}</Text>
      <View style={styles.semesterSection}>
        <Text style={styles.semesterLabel}>Current Semester:</Text>
        <Text style={styles.semester}>{data.semester}</Text>
      </View>

      <Text style={styles.gradesLabel}>Grades:</Text>
      {data.grades.map((grade, index) => (
        <View key={index} style={styles.gradeRow}>
          <Text style={styles.course}>{grade.course}</Text>
          <Text style={styles.grade}>{grade.grade}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  
  profilePic: {
    alignItems: '',
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  
  semesterSection: {
    marginBottom: 10,
  },

  semesterLabel: {
    fontSize: 18,
  },
 
  gradesLabel: {
    fontSize: 18,
    marginBottom: 10,
  },

  gradeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  
});

export default ProfileScreen;
