import { useAuth } from '@/components/auth/AuthProvider';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { MutationLoginArgs } from '@/__generated__/types';
import FormInput from '@/components/form/FormInput';
import { router } from 'expo-router';

const LoginPage = () => {
  const { login } = useAuth()
  const formMethods = useForm<MutationLoginArgs>()
  const { handleSubmit } = formMethods

  const onSubmit: SubmitHandler<MutationLoginArgs> = (data) => {
    console.log(data)
    login(data, "/dashboard")
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Login</Text>
      <FormProvider {...formMethods}>
        <View className="w-80 bg-white p-6 rounded-lg shadow-md">
          <View className="mb-4">
            <Text className="text-base text-gray-700 mb-1">Email</Text>
            <View className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
              <FormInput
                fieldName="email"
                label="Email"
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
              // rules={{ required: true }}
              />
            </View>
          </View>
          <View className="mb-4">
            <Text className="text-base text-gray-700 mb-1">Password</Text>
            <View className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
              <FormInput
                fieldName="password"
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
              // rules={{ required: true }}
              />
            </View>
          </View>
          <TouchableOpacity
            className="bg-blue-500 rounded-md py-2 mb-2"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-center text-base font-semibold">Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mb-2"
            onPress={() => {/* TODO: Implement forgot password navigation */ }}
          >
            <Text className="text-blue-500 text-center text-sm">Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {/* TODO: Implement sign up navigation */ }}
          >
            <Text className="text-blue-500 text-center text-sm">Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </FormProvider>
    </View>
  );
};

export default LoginPage; 