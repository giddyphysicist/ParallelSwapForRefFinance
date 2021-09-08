


<template>
  <main>
    <div class="z-0 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div class="relative mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

        <main class="my-40 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">NEAR Parallel Swap</span><br>
              <span class="block text-orange-300 xl:inline"></span>
            </h1>
            <p class="mt-1 text-base text-gray-500 sm:max-w-lg mx-auto">
              Ref Finance
            </p>
            
            
    <div class="mt-7 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 justify-center">
          <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                               
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Choose input token:
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <span @change="setInputToken" class="ml-3 block truncate" id="coinInputId">{{ selected.tokenName }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="token in state.tokenStructList" :key="token.id" :value="token" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ token.tokenName }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>









  <Listbox as="div" v-model="coinOutputSelected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Choose output token:
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <span @change="setOutputToken" class="ml-3 block truncate" id="coinOutputId">{{ coinOutputSelected.tokenName }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption id="outputTokenListId" as="template" v-for="token in state.tokenStructList" :key="token.id" :value="token" v-slot="{ active, coinOutputSelected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <!-- <img :src="person.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                <span :class="[coinOutputSelected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ token.tokenName }}
                </span>
              </div>

              <span v-if="coinOutputSelected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>




  <div class="shadow-xl p-10 bg-white max-w-xl rounded">
      <!-- <h1 class="text-4xl font-black mb-4">Login</h1> -->
      <p>Amount of token to swap in</p>
      <div class="mb-4 relative">
          <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="TotalCoinTradeIn" type="text" autofocus>
          <!-- <label for="PoolsContract" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">input coin</label> -->
      </div>
  
      <button v-on:click="setOutputAmount" class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded">Calculate Best Swaps</button>
      <p>Expected Token Out Amount:</p>
      <p id="outputAmountHtmlId">{{state.outputAmount}}</p>
  </div>


<!-- <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="shadow-xl p-10 bg-white max-w-xl rounded">
                  <p>Expected Token Out Amount: {}</p>
                          
                </div>
                </div>
              </div>
</div> -->

              </div>
            
            </div>
          </div>

         
        </div>

          </div>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="mt-7 flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pool
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Allocation Input per Pool
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Percentage of Input
              </th>
                          
            </tr>
          </thead>
          <tbody id="tableBody" class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Pool ID 1
                    </div>
                    <div class="text-sm text-gray-500">
                      token 1 -- token 2
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">50%</div>
                <!-- <div class="text-sm text-gray-500">Optimization</div> -->
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  50%
                </span>
              </td>
              
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>




        </main>
      </div>
    </div>

   





  </main>


</template>



<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
//import { Decimal } from 'decimal.js'

var tokens = [
  {
    id: 1,
    tokenName: '<<token1>>'},
  {
    id: 2,
    tokenName: '<<token2>>'}
];



var state = {inputToken:"",
             outputToken:"",
             inputAmount:"",
             outputAmount:"0",
             allPools:[],
             filteredPools:[],
             whitelistedTokens:[],
             tokenStructList:tokens,
             contract:null,
             poolStructList : []}


// 

const { connect, keyStores, WalletConnection } = nearApi;  // Changed the example from NearAPI to NearApi ...

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

var currentContract = null;

var allPoolsGlobal = null;

function getAllTokens(pools) {
    let allTokens = new Array();
    for (var i=0; i < pools.length; i++) {
	    if (!allTokens.includes(pools[i].token_account_ids[0])) {
		    allTokens.push(pools[i].token_account_ids[0]);
		}
	    if (!allTokens.includes(pools[i].token_account_ids[1])) {
		    allTokens.push(pools[i].token_account_ids[1]);
		}
	}
	return allTokens;
}

// open a connection to the NEAR platform
(async function () {
  window.near = await nearApi.connect(config);

// connect to NEAR
const near = await connect(config);

// create wallet connection
const wallet = new WalletConnection(near);


// returns account object for transaction signing
// const walletAccountObj = wallet.account("idk.testnet");
// console.log(walletAccountObj);


// const which_contract = "ref-finance-101.testnet";
const which_contract = "ref-finance.testnet";

const account = await near.account("example-account.testnet");



async function getAllWhitelistedTokens(contract) {
// implement automatically whenever pools contract is updated
let white_listed_tokens = await contract.whitelisted_tokens;
let token_struct_list = [];
for (var i=0; i<white_listed_tokens.length;i++) {
    token_struct_list.push({id:i,tokenName: white_listed_tokens[i]})
}
state.white_listed_tokens = white_listed_tokens;
state.tokenStructList = token_struct_list;
return {white_listed_tokens:white_listed_tokens,token_struct_list:token_struct_list};  
}


async function loadNewContract(contractName) {
// implement as on-click event when new contrat name is loaded in contract box and button is pressed
const which_contract = contractName;
const contract = new nearApi.Contract(
    account, // the account object that is connecting
    which_contract,  // name of contract you're connecting to
    {
      viewMethods: ["get_pools", "get_number_of_pools", "get_whitelisted_tokens", "get_return"], // view methods do not change state but usually return a value
      changeMethods: [], // change methods modify state
      sender: account, // account object to initialize and sign transactions.
    }
  );


  // console.log(await contract);
  // let white_listed_tokens = await contract.get_whitelisted_tokens();
  // console.log(white_listed_tokens)
  let number_of_pools = await contract.get_number_of_pools()
  let all_pools = await contract.get_pools({ from_index: 0, limit: number_of_pools });
  let white_listed_tokens = getAllTokens(all_pools);
  state.contract = contract;
  state.whitelistedTokens = white_listed_tokens;
  state.allPools = all_pools;
  allPoolsGlobal = all_pools;
  state.contract = contract;
  let token_struct_list = [];
  for (var i=0; i<white_listed_tokens.length;i++) {
    token_struct_list.push({id:i,tokenName: white_listed_tokens[i]})
}
state.white_listed_tokens = white_listed_tokens;
state.tokenStructList = token_struct_list;
  updatePoolStructList();
  displayPoolsAsTable();
  return {contract: contract, white_listed_tokens: white_listed_tokens,all_pools: all_pools};
}


var contract = await loadNewContract(which_contract);
currentContract = contract;
// console.log(contract)

// await getAllWhitelistedTokens(contract);


function updatePoolStructList() {
    let pools = state.allPools;
    let poolStructs = [];
    for (var i=0;i<pools.length;i++) {
        let pool = pools[i]
        let poolStruct = {
            id : i, //need to update this!
            token_account_ids: pool.token_account_ids,
            amounts: pool.amounts,
            total_fee: pool.total_fee,
            shares_total_supply: pool.shares_total_supply,
            allocation: "0",
            allocationPercentage: "0%"
        };
        poolStructs.push(poolStruct);
    }
    state.poolStructList = poolStructs;
}



function displayPoolsAsTable() {
// TODO -- make the table render the pools
    let table = document.getElementById("tableBody")
    table.innerHTML = ""
    for (var i=0;i<state.poolStructList.length;i++) {
        let poolStruct = state.poolStructList[i];
        let rowHtml = getTableHtmlFromPool(poolStruct);
        table.innerHTML += rowHtml;
    }
  
}


function getTableHtmlFromPool(pool) {
let rowTemplate = `
<tr>
<td class="px-6 py-4 whitespace-nowrap">
  <div class="flex items-center">
    
    <div class="ml-4">
      <div class="text-sm font-medium text-gray-900">
        Pool ID ${pool.id}
      </div>
      <div class="text-sm text-gray-500">
        ${pool.token_account_ids[0]} <--> ${pool.token_account_ids[1]}
      </div>
    </div>
  </div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
  <div class="text-sm text-gray-900">${pool.allocation}</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
    ${pool.allocationPercentage}
  </span>
</td>

</tr>
`
return rowTemplate;
}


// function setInputToken(event) {
// // implement as on-click event when dropdown choice is made in input token menu
// el = document.getElementById("coinInputId")
// state.inputToken = el.innerText;
// console.log("SETTING INPUT TOKEN TO ", state.inputToken)
// }



function setInputToken(event) {
// implement as on-click event when dropdown choice is made in input token menu
el = document.getElementById("coinInputId")
state.inputToken = el.innerText;
// console.log("SETTING INPUT TOKEN TO ", state.inputToken);
}


function setOutputToken() {
// implement as on-click event when dropdown choice is made in output token menu
el = document.getElementById("coinOutputId")
state.outputToken = el.innerText;
}

function setInputAmount() {
// implement as on-click event when amount of input token is written in input amount box and button is pressed.
el = document.getElementById("TotalCoinTradeIn")
state.inputAmount = el.value;
}


function setOutputAmount() {
// implement as on-click event after getBestOutput() is run. 
// error checking: 
// state must have inputToken
// state must have outputToken
// inputToken cannot equal outputToken
setInputToken();
setOutputToken();
setInputAmount();
getPoolsForTokenPair(); //filter pools
//render pools in table (have loading spinner for allocations until optimizer has run)

//render output amount (should work by updating value in state...)
solution = getBestOutput();
state.outputAmount = solution.outputAmount;

el = getElementById("outputAmountHtmlId")
el.innerHTML = solution.outputAmount;
}

// function getBestOutput() {
// // This runs the main optimization algorithm using the input

// let pools = state.filteredPools;
// return {outputAmount: "8675309"};
// //Render Pools in table
// 
// }



})(window);

// 



export default {
  name: 'Home',
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon, 
    SelectorIcon
    
  },

  data() {

    return {
      state: {inputToken:"",
             outputToken:"",
             inputAmount:"",
             outputAmount:"0",
             allPools:allPoolsGlobal,
             filteredPools:[],
             whitelistedTokens:[],
             tokenStructList:tokens,
             contract:currentContract,
             poolStructList : [],
             filteredPoolStructList: []}
    
    }
  },

  methods:{
     setInputToken() {
      // implement as on-click event when dropdown choice is made in input token menu
      let el = document.getElementById("coinInputId")
      // console.log("STATE IS CURRENTLY",state)
      state.inputToken = el.innerText;
      // console.log("SETTING INPUT TOKEN TO ", state.inputToken) 
      },

async setOutputAmount() {
// implement as on-click event after getBestOutput() is run. 
// error checking: 
// state must have inputToken
// state must have outputToken
// inputToken cannot equal outputToken
this.setInputToken();
this.setOutputToken();
this.setInputAmount();
this.getPoolsForTokenPair(); //filter pools
//render pools in table (have loading spinner for allocations until optimizer has run)

//render output amount (should work by updating value in state...)
let solution = await this.getBestOutput();
state.outputAmount = solution.outputAmount;
let el = document.getElementById("outputAmountHtmlId")
el.innerHTML = solution.outputAmount;
},

 setOutputToken() {
// implement as on-click event when dropdown choice is made in output token menu
let el = document.getElementById("coinOutputId")
state.outputToken = el.innerText;
// console.log("SETTING OUTPUT TOKEN TO ", el.innerText);

},

 setInputAmount() {
// implement as on-click event when amount of input token is written in input amount box and button is pressed.
let el = document.getElementById("TotalCoinTradeIn")
state.inputAmount = el.value;
// console.log("SETTING INPUT AMOUNT TO ", el.value); 
},




 getPoolsForTokenPair() {
  let allPools = state.allPools;
  let filteredPools = [];
  for (var i=0;i<allPools.length;i++) {
    let pool = allPools[i];
    if (pool.token_account_ids.includes(state.inputToken) && pool.token_account_ids.includes(state.outputToken)) {
      filteredPools.push(pool);
      }
    }
  if (state.inputToken === state.outputToken) {
    state.filteredPools = [];
  } else {
    state.filteredPools = filteredPools;
    this.updateFilteredPoolStructList();
    }
  this.displayFilteredPoolsAsTable();

  },


	calculate_dx_float(mu, pool) {
        let p = pool;
        p['gamma_bps'] = 10000 - p.total_fee;
        if (p.token_account_ids[0] === state.inputToken) {
            p['x'] = p.amounts[0];
            p['y'] = p.amounts[1]; 
        } else {
            p['x'] = p.amounts[1];
            p['y'] = p.amounts[0];
        }
		let radical = Number(p.x) * Number(p.y) / Number(p.gamma_bps);
		return mu * 100 * Math.sqrt(radical) - Number(p.x) * 10000 / Number(p.gamma_bps);
    },


    
	calculate_dy_float(dx_float,pool) {
        let p = pool;
        p['gamma_bps'] = 10000 - p.total_fee;
        if (p.token_account_ids[0] === state.inputToken) {
            p['x'] = p.amounts[0];
            p['y'] = p.amounts[1]; 
        } else {
            p['x'] = p.amounts[1];
            p['y'] = p.amounts[0];
        }
		let dx = Number(dx_float);
		return (Number(p.y) * dx * Number(p.gamma_bps)) / (10000 * Number(p.x) + Number(p.gamma_bps) * dx);
	},


    solveForMuFloat(pools, totalDeltaX) {
        if (pools.length > 0){
            let numerator = Number(totalDeltaX);
            let denominator = 0;
            for (var i=0; i < pools.length; i++) {
                let p = pools[i];
                p['gamma_bps'] = 10000 - p.total_fee;
                if (p.token_account_ids[0] === state.inputToken) {
                    p['x'] = p.amounts[0];
                    p['y'] = p.amounts[1]; 
                } else {
                    p['x'] = p.amounts[1];
                    p['y'] = p.amounts[0];
                }

                numerator += Number(p.x) * 10000 / Number(p.gamma_bps);
                // denominator += isqrt(p.x_i * p.y_i * p.gamma_bps / 10000n) * 10000n / p.gamma_bps;
                denominator += Math.sqrt(Number(p.x) * Number(p.y) * Number(p.gamma_bps)) * 100 / Number(p.gamma_bps);
            }
            const mu = numerator / denominator;
            //console.log(1, mu);
        return mu;	
        }
        else {
            const mu = NaN;
            //console.log(2, mu);
        return mu;	
        }
    },

    getAllocationsAndOutputs(totalInput, filteredPoolStructList) {
        // let totalInput = BigInt(totalInput);
        let algPools = filteredPoolStructList; // 
        let allocations = this.calculateOptimalOutput(algPools, totalInput);
        let dyReturns = [];
        for (var i=0; i<algPools.length;i++) {
            let ap = algPools[i];
            let dyReturn = Math.round(this.calculate_dy_float(allocations[i],ap));
            dyReturns.push(dyReturn);
        }
        return {allocations:allocations, outputs: dyReturns};
    },

    
 calculateOptimalOutput(pools,inputAmount) {
	// This runs the main optimization algorithm using the input

	// console.log('input amount is... ',inputAmount)


	//let mu = solveForMu(pools, inputAmount);
	let mu = this.solveForMuFloat(pools, inputAmount);
	// console.log('mu is ... ', mu)
	let dxArray = new Array();
	let negativeDxValsFlag = false;
	for (var i=0; i<pools.length; i++) {
	    let pool = pools[i];
		//let dx = pool.calculate_dx(mu);
		let dx = this.calculate_dx_float(mu,pool);
		if (dx<0) {
			// console.log('found a negative dx value!')
			negativeDxValsFlag = true;
		}
		dxArray.push(Math.round(dx));
	}
	// console.log("dx array", dxArray);
	if (negativeDxValsFlag) {
		  dxArray = this.reducePools(pools, dxArray);
	}
	//Render Pools in table
	let dxArraySum = 0;
	for (var i=0; i<dxArray.length; i++) {
		dxArraySum += dxArray[i];
	}
	let normalizedDxArray = [];
	for (var i=0; i<dxArray.length; i++) {
		normalizedDxArray.push(Math.round(dxArray[i]*inputAmount/dxArraySum));
	}
	// console.log('final dxArray is... ',normalizedDxArray)
	return normalizedDxArray
},


 reducePools(pools, dxArray) {
	let goodIndices = [];
	for (var i=0;i<dxArray.length;i++) {
		let dx = dxArray[i];
		if (dx>=0) {
			goodIndices.push(i)
		}
	}
  if (goodIndices.length < 1) {
    console.log("ERROR OCCURRED -- ALL DX VALUES WERE NEGATIVE")
    return dxArray;
  }
	// console.log('good indices are .. ', goodIndices)
	let newPools = [];
	for (var j=0; j<dxArray.length; j++) {
		if (goodIndices.includes(j)) {
			newPools.push(pools[j])
		}
	}
	// console.log('reduced pools are...',newPools)
	let newDxVec = this.calculateOptimalOutput(newPools,state.inputAmount);
	// console.log('new dx vec is...',newDxVec)
	let goodInd2newdx = {};
	for (var k=0;k<newDxVec.length;k++) {
		goodInd2newdx[goodIndices[k]] = newDxVec[k]
	}
	let newFullDxVec = [];
	for (var ii=0; ii<pools.length; ii++) {
		if (goodIndices.includes(ii)) {
			newFullDxVec.push(goodInd2newdx[ii]);
		} else {
			newFullDxVec.push(0);
		}
	}
	return newFullDxVec;
},



  async getBestOutput() {
// This runs the main optimization algorithm using the inputs in the state

// console.log("GLOBAL ALL POOLS VARIABLE IS... ",allPoolsGlobal)
let filteredPoolStructList = state.filteredPoolStructList;
// console.log("state is currently... ",state)
// console.log("filteredPoolStructList is...", filteredPoolStructList)
// console.log("currentContract is",currentContract)


 let totalInput = state.inputAmount;
 let result = this.getAllocationsAndOutputs(totalInput, filteredPoolStructList);
//let result = {allocations: ["1000000000000000000000","1000000000000000000000"]}
let allocationPercentages = [];
let totalAllocationInt = 0n;
for (var i=0; i<result.allocations.length;i++) {
  totalAllocationInt += BigInt(result.allocations[i]);
}
for (var i=0; i<result.allocations.length;i++) {
  let percentage = 100n * BigInt(result.allocations[i]) / totalAllocationInt;
  let percentageString = String(percentage) + String('%')
  allocationPercentages.push(percentageString);

}

let dyOutVec = [];
// console.log("about to loop and get answers")

for (var i=0; i<result.outputs.length; i++) {
  dyOutVec.push(BigInt(result.outputs[i]));
}

// for (var i=0; i<filteredPoolStructList.length; i++) {
//     let fps = filteredPoolStructList[i];
//     let allocation = result.allocations[i];
//     let inputs = {"pool_id":fps.id,"token_in":state.inputToken,"amount_in":allocation,"token_out":state.outputToken};
//     console.log(inputs)
//     let amountOut = await currentContract.contract.get_return(inputs)
//     //let amountOut = await currentContract.contract.get_return({"pool_id":11,"token_in":"wrap.testnet","amount_in":"1000000000000000000000","token_out":"banana.ft-fin.testnet"})
//     //let goodInput = {"pool_id":11,"token_in":"wrap.testnet","amount_in":"1000000000000000000000","token_out":"banana.ft-fin.testnet"}
//     //console.log('good input is ',goodInput)
//     dyOutVec.push(amountOut);
//     //let allocationPercentage = BigInt(allocation) * 100n / BigInt(totalInput);
//     // console.log("amount out calculated to be... ",amountOut)

// }

//let outputAmount = dyOutVec;
let totalDy = 0n;
for (var i=0; i<dyOutVec.length; i++) {
  totalDy += BigInt(dyOutVec[i])
}
//await currentContract.contract.get_return({"pool_id":11,"token_in":"wrap.testnet","amount_in":"1000000000000000000000","token_out":"banana.ft-fin.testnet"})
// console.log("amount out calculated to be... ",totalDy)

this.updateFilteredPoolStructList(result.allocations,allocationPercentages);
this.displayFilteredPoolsAsTable();
// Run optimization function on filtered pool list
// Get allocation amounts to each filtered pool.
// Get % allocation for each filtered pool.
// update allocation and allocation % values in each filtered pool struct
// re-render table with updated filtered pool structs
return {outputAmount: String(totalDy)};
//Render Pools in table

},


updateFilteredPoolStructList(allocations=["0","0","0"],allocationPercentages=[]) {
    let pools = state.allPools;
    let filteredPoolStructs = [];
    let j=0;
    for (var i=0;i<pools.length;i++) {
    let pool = pools[i]
    if (pool.token_account_ids.includes(state.inputToken) && pool.token_account_ids.includes(state.outputToken) && pool.amounts[0]>0 && pool.amounts[1]>0) {
        let poolStruct = {
            id : i, //need to update this!
            token_account_ids: pool.token_account_ids,
            amounts: pool.amounts,
            total_fee: pool.total_fee,
            shares_total_supply: pool.shares_total_supply,
            allocation: allocations[j],
            allocationPercentage: allocationPercentages[j],
            amountOut: "0"
    };
    filteredPoolStructs.push(poolStruct);
    j += 1;
    }}
    state.filteredPoolStructList = filteredPoolStructs;
    },

    displayFilteredPoolsAsTable() {
        // TODO -- make the table render the pools
        let table = document.getElementById("tableBody")
        table.innerHTML = ""
        if (state.filteredPoolStructList.length === 0) {
          table.innerHTML += `<div><h2>No Pools Found for Token Pair...<h2><div>`
        }
        for (var i=0;i<state.filteredPoolStructList.length;i++) {
        let poolStruct = state.filteredPoolStructList[i];
        let rowHtml = this.getTableHtmlFromPool(poolStruct);
        table.innerHTML += rowHtml;
        }
        
        },

  
  getTableHtmlFromPool(pool) {
let rowTemplate = `
<tr>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center">

<div class="ml-4">
<div class="text-sm font-medium text-gray-900">
Pool ID ${pool.id}
</div>
<div class="text-sm text-gray-500">
${pool.token_account_ids[0]} <--> ${pool.token_account_ids[1]}
</div>
</div>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="text-sm text-gray-900">${pool.allocation}</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
${pool.allocationPercentage}
</span>
</td>

</tr>
`
return rowTemplate;
},

// eventLoadNewContract() {
//   let el = document.getElementById("newContractNameId")
//   console.log(el)
//   let newContractName = el.value;
//   this.loadNewContract(newContractName);
// }




  },
  setup() {
    const selected = ref(tokens[0])
    const coinOutputSelected = ref(tokens[1]);//ref(people[2])
    return {
      selected,
      coinOutputSelected,
      state,
      tokens
    }
  },
}

</script>


