import { Text, View } from 'react-native';
import RequireAuth from '@/components/auth/RequireAuth';
import { useTimelineItemsQuery } from '@/__generated__/types';

const TimelinePage = () => {
  const { data, loading, error } = useTimelineItemsQuery();
  console.log(data?.timelineItems);
  return (
    <RequireAuth>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Timeline</Text>
        {data?.timelineItems?.map((item) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
      </View>
    </RequireAuth>
  );
};

export default TimelinePage; 