/*
 * This is an example of a Rust smart contract with two simple, symmetric functions:
 *
 * 1. set_greeting: accepts a greeting, such as "howdy", and records it for the user (account_id)
 *    who sent the request
 * 2. get_greeting: accepts an account_id and returns the greeting saved for it, defaulting to
 *    "Hello"
 *
 * Learn more about writing NEAR smart contracts with Rust:
 * https://github.com/near/near-sdk-rs
 *
 */

// To conserve gas, efficient serialization is achieved through Borsh (http://borsh.io/)
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen, setup_alloc};
use near_sdk::{AccountId, Balance, Promise};
use std::collections::HashMap;

setup_alloc!();

/// Access key allowance for linkdrop keys.
const ACCESS_KEY_ALLOWANCE: u128 = 1_000_000_000_000_000_000_000_000;

// Structs in Rust are similar to other languages, and may include impl keyword as shown below
// Note: the names of the structs are not important when calling the smart contract, but the function names are
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct CrowdLoanContract {
    // pub contributor: String,
    // pub contributedAmount: u128,
    // pub transactionId: u128,
    pub records: HashMap<AccountId, u128>
}

impl Default for CrowdLoanContract {
    fn default() -> Self {
        // contributor: "".to_string(),
        // contributedAmount: 0,
        // transactionId: 0
        near_sdk::env::panic(b"Contract should be initialized before the usage.");
    }
}

#[near_bindgen]
impl CrowdLoanContract {

    #[init]
    pub fn new() -> Self {
        let res = Self::default();
        res
    }

    pub fn contribute(&mut self, amount: u128) {
        let account_id = env::signer_account_id();
        self.records.insert(account_id, amount);
    }

    pub fn display(&self, account_id: AccountId) -> Option<u128> {
        self.records.get(&account_id).cloned()
    }

    // pub fn deposit(&mut self) -> Promise {
    //     assert!(env::attached_deposit() > ACCESS_KEY_ALLOWANCE,
    //     "Attached deposit must be greater than ACCESS_KEY_ALLOWANCE");

    //     let value = self.accounts.get(&pk).unwrap_or(0);
    // }


}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 *
 * To run from contract directory:
 * cargo test -- --nocapture
 *
 * From project root, to run in combination with frontend tests:
 * yarn test
 *
 */
// #[cfg(test)]
// mod tests {
//     use super::*;
//     use near_sdk::MockedBlockchain;
//     use near_sdk::{testing_env, VMContext};

//     // mock the context for testing, notice "signer_account_id" that was accessed above from env::
//     fn get_context(input: Vec<u8>, is_view: bool) -> VMContext {
//         VMContext {
//             current_account_id: "alice_near".to_string(),
//             signer_account_id: "bob_near".to_string(),
//             signer_account_pk: vec![0, 1, 2],
//             predecessor_account_id: "carol_near".to_string(),
//             input,
//             block_index: 0,
//             block_timestamp: 0,
//             account_balance: 0,
//             account_locked_balance: 0,
//             storage_usage: 0,
//             attached_deposit: 0,
//             prepaid_gas: 10u64.pow(18),
//             random_seed: vec![0, 1, 2],
//             is_view,
//             output_data_receivers: vec![],
//             epoch_height: 19,
//         }
//     }

//     #[test]
//     fn set_then_get_greeting() {
//         let context = get_context(vec![], false);
//         testing_env!(context);
//         let mut contract = CrowdLoanContract::default();
//         contract.set_greeting("howdy".to_string());
//         assert_eq!(
//             "howdy".to_string(),
//             contract.get_greeting("bob_near".to_string())
//         );
//     }

//     #[test]
//     fn get_default_greeting() {
//         let context = get_context(vec![], true);
//         testing_env!(context);
//         let contract = CrowdLoanContract::default();
//         // this test did not call set_greeting so should return the default "Hello" greeting
//         assert_eq!(
//             "Hello".to_string(),
//             contract.get_greeting("francis.near".to_string())
//         );
//     }
// }
