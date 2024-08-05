import { getTopCategoryAPI } from "@/api/category"
import { ref, onMounted, onUpdated } from "vue"
import { useRoute } from 'vue-router';

// 获取一级导航数据
export function useCategory () {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id) => {
    const res = await getTopCategoryAPI(route.params.id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
  onUpdated(() => getCategory())
  return {
    categoryData
  }
}