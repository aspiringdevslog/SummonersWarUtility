function processAll(json){


var divContainer = document.getElementById('status').innerHTML;

	// monsterValues = json.unit_list;
	// // console.log(monsterValues);

	// //TODO: store the monsters list details in an appropriate data structure

// Guide on looping through JSON
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
	if(localStorage.getItem('IMPORTCHECK') != 1){
		console.log("There's currently no data. Begin importing and processing...");

		
		divContainer = "There's currently no data. Begin importing and processing...";

		for (var key in json){

			if(json.hasOwnProperty(key)){
				// console.log(key);
				// console.log(json[key]);


					if(key == "runes"){
						divContainer = "Processing runes...";
						console.log("Processing runes...");
						processRunes(json[key]);
						// populateHTML("RUNES", "runes");
						divContainer = "Rune processing completed.";
						console.log("Rune processing completed.")
					// if(localStorage.RUNES == null){
					// 	console.log("Processing runes...");
					// 	processRunes(json[key]);
					// 	populateRunes();
					// 	console.log("Rune processing completed.")
					// } else {
					// 	console.log("Runes data already exists!");
					// 	populateRunes();
					// }
					}
					if(key == "unit_list"){
						divContainer = "Processing monsters.";
						console.log("Processing monsters...");
						// console.log(json[key]);
						processMon(json[key]);
						// populateHTML("MONS", "monsters");
						console.log("Monsters processing completed.")
						divContainer = "Monsters processing completed.";

					}



			}
		}

		console.log("All data has been processed.")
		divContainer = "All data has been processed.";


	} else {
		console.log("Data already exist!");
		divContainer = "Data already exist.";
	}


	localStorage.setItem('IMPORTCHECK', 1);
}



// // command KEYS
// processJSON.js:13 ret_code
// processJSON.js:13 wizard_info
// processJSON.js:13 scenario_list
// processJSON.js:13 defense_unit_list
// processJSON.js:13 quest_active
// processJSON.js:13 quest_rewarded
// processJSON.js:13 event_id_list
// processJSON.js:13 building_list
// processJSON.js:13 deco_list
// processJSON.js:13 obstacle_list
// processJSON.js:13 mob_list
// processJSON.js:13 mob_costume_equip_list
// processJSON.js:13 mob_costume_part_list
// processJSON.js:13 homunculus_skill_list
// processJSON.js:13 unit_list
// processJSON.js:13 summon_special_info
// processJSON.js:13 island_info
// processJSON.js:13 inventory_info
// processJSON.js:13 inventory_open_info
// processJSON.js:13 wish_list
// processJSON.js:13 runes
// processJSON.js:23 Runes data already exists!
// populateRunes.js:17 {base_value: 301150, stars: 6, defaultGrade: "Rare", occupied_id: 0, occupied_type: 2, …}
// populateRunes.js:33 <table>​…​</table>​
// processJSON.js:13 rune_craft_item_list
// processJSON.js:13 shop_info
// processJSON.js:13 period_item_list
// processJSON.js:13 notice_info
// processJSON.js:13 push_noti_status
// processJSON.js:13 guild
// processJSON.js:13 guildwar_defense_unit_list
// processJSON.js:13 guildwar_status
// processJSON.js:13 guildwar_participation_info
// processJSON.js:13 guildwar_member_list
// processJSON.js:13 guild_member_defense_list
// processJSON.js:13 guildwar_ranking_info
// processJSON.js:13 guildwar_ranking_stat
// processJSON.js:13 guildwar_reserve
// processJSON.js:13 guildwar_match_reserve
// processJSON.js:13 guildwar_match_info
// processJSON.js:13 guildwar_my_dead_unit_id_list
// processJSON.js:13 my_atkdef_list
// processJSON.js:13 my_attack_list
// processJSON.js:13 opp_participation_info
// processJSON.js:13 opp_guild_info
// processJSON.js:13 opp_guild_member_list
// processJSON.js:13 opp_defense_list
// processJSON.js:13 guildsiege_defense_unit_list
// processJSON.js:13 guildwar_reward_list
// processJSON.js:13 unit_depository_slots
// processJSON.js:13 unit_lock_list
// processJSON.js:13 rune_lock_list
// processJSON.js:13 arena_shutdown_info
// processJSON.js:13 invite_account
// processJSON.js:13 invite_buddy
// processJSON.js:13 invite_counter_list
// processJSON.js:13 shop_daily_bonus_list
// processJSON.js:13 raid_deck
// processJSON.js:13 deck_list
// processJSON.js:13 deck_recent_list
// processJSON.js:13 rtpvp_season_info
// processJSON.js:13 rtpvp_contest_info
// processJSON.js:13 rtpvp_contest_shop_display
// processJSON.js:13 rtpvp_web_link_display
// processJSON.js:13 object_storage_slots
// processJSON.js:13 shop_bonus_event
// processJSON.js:13 lobby_proud_unit_id_list
// processJSON.js:13 quiz_reward_info
// processJSON.js:13 new_user_buff
// processJSON.js:13 summon_choices
// processJSON.js:13 friend_list
// processJSON.js:13 helper_list
// processJSON.js:13 helper_remained
// processJSON.js:13 mentor_helper_list
// processJSON.js:13 mentee_slot_list
// processJSON.js:13 mentor_slot_list
// processJSON.js:13 mentoring_info
// processJSON.js:13 npc_friend_list
// processJSON.js:13 daily_reward_inactive_status
// processJSON.js:13 daily_reward_special_status
// processJSON.js:13 daily_reward_list
// processJSON.js:13 daily_reward_info
// processJSON.js:13 daily_reward_unit_upgrade_info
// processJSON.js:13 pvp_info
// processJSON.js:13 pvp_reward_list
// processJSON.js:13 worldboss_status
// processJSON.js:13 worldboss_used_unit
// processJSON.js:13 my_worldboss_ranking
// processJSON.js:13 my_worldboss_prev_ranking
// processJSON.js:13 my_worldboss_best_ranking
// processJSON.js:13 my_worldboss_daily_battle_count
// processJSON.js:13 costume_ticket_purchased_list
// processJSON.js:13 session_key
// processJSON.js:13 raid_info_list
// processJSON.js:13 trans_item_list
// processJSON.js:13 rtpvp_reward_info
// processJSON.js:13 rtpvp_contest_reward
// processJSON.js:13 guild_attend_info
// processJSON.js:13 country
// processJSON.js:13 wizard_id
// processJSON.js:13 ts_val
// processJSON.js:13 tvalue
// processJSON.js:13 tvaluelocal
// processJSON.js:13 tzone