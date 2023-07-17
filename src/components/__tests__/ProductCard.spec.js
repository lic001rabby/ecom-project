import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import ProductCard from '../organism/product/ProductCard.vue'

describe('ProductCard', () => {
  it('renders product name', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: {
          "id": "63f48ddb95ba1d0993a87c80",
          "name": "labore aute",
          "details": {
            "id": "63f48ddbbf43d31378ee1b71",
            "description": "Ex do ex excepteur qui adipisicing consectetur labore aute nisi ullamco esse consectetur dolor. Non quis esse et duis aute magna.",
            "price": 36.25,
            "company": "Hyplex",
            "createdAt": "2012-02-19T00:30:54.738Z",
            "updatedAt": "2012-02-20T00:30:54.738Z",
            "dob": "1990-02-03"
          }
        }
      }
    })
    expect(wrapper.text()).toContain('labore aute')
  })
})
