import { useTestFieldLazyQuery, useTestFieldQuery } from "@/__generated__/types";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import RequireAuth from '@/components/auth/RequireAuth';

const TestApi = () => {
  const { data, error } = useTestFieldQuery();
  const [query, { data: foo, loading }] = useTestFieldLazyQuery();

  return (
    <RequireAuth>
      <ScrollView
        contentContainerClassName="flex-1 bg-slate-50 p-6 justify-center items-center"
      >
        <View className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-md">
          <Text className="text-2xl font-bold text-blue-500 mb-4 text-center">Test API</Text>
          <Text className="text-base font-semibold mb-2">Query Result:</Text>
          <View className="bg-slate-100 rounded-lg p-2 mb-3">
            <Text selectable className="font-mono text-sm text-slate-700">{JSON.stringify(data, null, 2) || 'No data'}</Text>
          </View>
          <Text className="text-base font-semibold mb-2">Lazy Query Result:</Text>
          <View className="bg-slate-100 rounded-lg p-2 mb-3">
            <Text selectable className="font-mono text-sm text-slate-700">{JSON.stringify(foo, null, 2) || 'No data'}</Text>
          </View>
          {error && (
            <Text className="text-red-500 mb-2">Error: {error.message}</Text>
          )}
          <TouchableOpacity
            onPress={() => query()}
            className="bg-blue-500 py-3 rounded-lg items-center mt-2"
            disabled={loading}
          >
            <Text className="text-white font-bold text-base">{loading ? 'Loading...' : 'Run Lazy Query'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </RequireAuth>
  );
};

export default TestApi; 