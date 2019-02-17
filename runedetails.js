function runeObject(){
	constructor(base_value, runeClass, extra, occupied_id, occupied_type, 
		prefix_eff_type, prefix_eff_value, pri_eff_type, pri_eff_value, 
		rank, rune_id, 
		sub_eff_01_type, sub_eff_01_value, 
		sub_eff_02_type, sub_eff_02_value, 
		sub_eff_03_type, sub_eff_03_value, 
		sub_eff_04_type, sub_eff_04_value, 
		sell_value, set_id, slot_no, upgrade_curr, upgrade_limit, wizard_id)
	{
		
			this.base_value = base_value;
			this.runeClass = runeClass;
			this.extra = extra;
			this.occupied_id = occupied_id;	
			this.occupied_type = occupied_type;

			this.prefix_eff_type = prefix_eff_type;     // innate stat type; e.g. HP Flat
			this.prefix_eff_value = prefix_eff_value;	// innate type value; e.g. 5%

			this.pri_eff_type = pri_eff_type; 
			this.pri_eff_value = pri_eff_value;

			this.rank = rank;
			this.rune_id = rune_id; 

			this.sub_eff_01_type = sub_eff_01_type;
			this.sub_eff_01_value = sub_eff_01_value;

			this.sub_eff_02_type = sub_eff_02_type;
			this.sub_eff_02_value = sub_eff_02_value;

			this.sub_eff_03_type = sub_eff_03_type;
			this.sub_eff_03_value = sub_eff_03_value;

			this.sub_eff_04_type = sub_eff_04_type;
			this.sub_eff_04_value = sub_eff_04_value;

			this.sell_value = sell_value;
			this.set_id = set_id;
			this.slot_no = slot_no;
			this.upgrade_curr = upgrade_curr;
			this.upgrade_limit = upgrade_limit;
			this.wizard_id = wizard_id;
	}
}

function initRune(runeObject){

	runeObject.base_value = 0;
	runeObject.runeClass = 0;
	runeObject.extra = 0;
	runeObject.occupied_id = 0;	
	runeObject.occupied_type = 0;
	runeObject.prefix_eff_type = 0;     // innate stat type; e.g. HP Flat
	runeObject.prefix_eff_value = 0;	// innate type value; e.g. 5%
	runeObject.pri_eff_type = 0; 
	runeObject.pri_eff_value = 0;
	runeObject.rank = 0;
	runeObject.rune_id = 0; 
	runeObject.sub_eff_01_type = 0;
	runeObject.sub_eff_01_value = 0;
	runeObject.sub_eff_02_type = 0;
	runeObject.sub_eff_02_value = 0;
	runeObject.sub_eff_03_type = 0;
	runeObject.sub_eff_03_value = 0;
	runeObject.sub_eff_04_type = 0;
	runeObject.sub_eff_04_value = 0;
	runeObject.sell_value = 0;
	runeObject.set_id = 0;
	runeObject.slot_no = 0;
	runeObject.upgrade_curr = 0;
	runeObject.upgrade_limit = 0;
	runeObject.wizard_id = 0;

	return runeObject;
}
