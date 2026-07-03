
export const useCategoryStore = defineStore('category-store', () => {

    const categoryInput = ref({
        id: null,
        name: "",
    });

    const edit = ref(false);

    const headers = useHeaders();

    const fetchCategories = async () => {
        const {
            data,
            refresh:getCategories
        } = await useFetch("/api/admin/category/get-categories", {
            headers: {
                ...headers,
            },
        });

        return {
            data, getCategories
        }
    };

    return {
        categoryInput,
        edit,
        fetchCategories
    }
});