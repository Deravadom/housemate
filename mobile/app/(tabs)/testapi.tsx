import { useTestFieldLazyQuery, useTestFieldQuery } from "@/__generated__/types";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

const TestApi = () => {
  const { data, error } = useTestFieldQuery();
  const [query, { data: foo, loading }] = useTestFieldLazyQuery();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc', padding: 24 }}>
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 24, width: '100%', maxWidth: 400, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3b82f6', marginBottom: 16, textAlign: 'center' }}>Test API</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>Query Result:</Text>
        <View style={{ backgroundColor: '#f1f5f9', borderRadius: 8, padding: 8, marginBottom: 12 }}>
          <Text selectable style={{ fontFamily: 'monospace', fontSize: 14, color: '#334155' }}>{JSON.stringify(data, null, 2) || 'No data'}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>Lazy Query Result:</Text>
        <View style={{ backgroundColor: '#f1f5f9', borderRadius: 8, padding: 8, marginBottom: 12 }}>
          <Text selectable style={{ fontFamily: 'monospace', fontSize: 14, color: '#334155' }}>{JSON.stringify(foo, null, 2) || 'No data'}</Text>
        </View>
        {error && (
          <Text style={{ color: 'red', marginBottom: 8 }}>Error: {error.message}</Text>
        )}
        <TouchableOpacity
          onPress={() => query()}
          style={{ backgroundColor: '#3b82f6', paddingVertical: 12, borderRadius: 8, alignItems: 'center', marginTop: 8 }}
          disabled={loading}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{loading ? 'Loading...' : 'Run Lazy Query'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default TestApi; 