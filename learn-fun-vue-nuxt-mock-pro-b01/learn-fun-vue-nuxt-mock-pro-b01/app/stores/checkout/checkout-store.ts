import { defineStore } from 'pinia';

export const useCheckoutStore = defineStore('checkout-store', () => {

    const customerOrderData = ref<any>({});
    const paymentData = ref<any>({});

    async function fetchPaymentData() {
        const {
            data,
            refresh
        } = await useFetch('/api/admin/payment/all-payments');
        
        paymentData.value = data.value;
    }

    async function fetchCustomerOrder(userId: number) {
        const {
            data,
            refresh
        } = await useFetch('/api/payment/get-payments', {
            query: {
                userId: userId,
            }
        });

        customerOrderData.value = data.value;
    }

    return {
        customerOrderData,
        fetchCustomerOrder,
        paymentData,
        fetchPaymentData
    }
}) ;