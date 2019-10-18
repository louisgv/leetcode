const { twoSum } = require('./twosum')

const TestTwoSum =()=> {
	const nums = [2, 7, 11, 15]
	
	const out1 = twoSum(nums, 9)

	console.log(out1)

}

TestTwoSum()


/*

func TestTwoSum(t *testing.T) {
	nums := []int{2, 7, 11, 15}
	
	if (

	funcs := []func([]int, int) []int{twoSum, twoSum1}

	for _, testFunc := range funcs {
		if res := testFunc(nums, 9); !reflect.DeepEqual(res, []int{0, 1}) {
			t.Error("Failed, two sum")
		}

		if res := testFunc(nums, 6); !reflect.DeepEqual(res, []int{}) {
			t.Error("Failed, two sum")
		}
	}
}
*/
