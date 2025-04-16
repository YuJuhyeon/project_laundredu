import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import { MainLayout } from '@/components/layout/MainLayout';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <View style={styles.faqItem}>
    <TouchableOpacity 
      style={styles.questionContainer}
      onPress={onToggle}
    >
      <Text style={styles.questionText}>Q. {question}</Text>
      <Image 
        source={require('../assets/images/Expand_down.png')}
        style={[
          styles.expandIcon,
          isOpen && styles.expandIconRotated
        ]}
      />
    </TouchableOpacity>
    {isOpen && (
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>A. {answer}</Text>
      </View>
    )}
  </View>
);

export default function FAQ() {
  const [fontsLoaded] = useFonts({
    'NotoSansKR-Regular': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Regular.ttf'),
    'NotoSansKR-Medium': require('../assets/fonts/Noto_Sans_KR/static/NotoSansKR-Medium.ttf'),
  });

  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const handleGoBack = () => {
    router.back();
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  // Sample FAQ data
  const faqs = [
    {
      question: '인증 번호 문자가 도착하지 않아요.',
      answer: '답변',
    },
    {
      question: '결제 내역을 확인하고 싶어요.',
      answer: '답변',
    },
    // Add more FAQs as needed
  ];

  return (
    <MainLayout currentTab="mypage">
      <View style={styles.container}>
        {/* Header */}
        <SafeAreaView edges={['top']} style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <Image 
                source={require('../assets/images/angle-left.png')} 
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>자주 묻는 질문</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>

        {/* FAQ List */}
        <ScrollView style={styles.content}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQs.includes(index)}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </ScrollView>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerContent: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
    height: 44,
    justifyContent: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'NotoSansKR-Medium',
    color: '#1A1A1A',
    lineHeight: 24,
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  questionText: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    color: '#1A1A1A',
    lineHeight: 22,
  },
  expandIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  expandIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  answerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#F8F8F8',
  },
  answerText: {
    fontSize: 15,
    fontFamily: 'NotoSansKR-Regular',
    color: '#666666',
    lineHeight: 22,
  },
});
