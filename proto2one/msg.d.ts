declare module protoTS {
	
	
	interface ProtoBufMapItem<KeyType, ValueType> {
		key : KeyType,
		value : ValueType
	}
	
	interface ProtoBufMap<KeyType, ValueType> {
		clear(): void;
		delete(key: KeyType): boolean;
		get(key: KeyType): ValueType;
		has(key: KeyType): boolean;
		set(key: KeyType, value: ValueType): void;
		forEach(fn: (value: ValueType, key?: KeyType) => void): void;
		size: number;
		map : { [key: string]: ProtoBufMapItem<KeyType, ValueType> }
	}
	
	export interface ProtoBufBuilder {
		BattleAction: BattleActionBuilder;
		BattleEnemyUnit: BattleEnemyUnitBuilder;
		BattleInfo: BattleInfoBuilder;
		BattleOneUnit: BattleOneUnitBuilder;
		BattleSelfUnit: BattleSelfUnitBuilder;
		BattleSettle: BattleSettleBuilder;
		BattleSpirits: BattleSpiritsBuilder;
		DceAllEquipmentInfo: DceAllEquipmentInfoBuilder;
		DceBattleOpt: DceBattleOptBuilder;
		DceBattleStart: DceBattleStartBuilder;
		DceBattleSweep: DceBattleSweepBuilder;
		DceChangeSpiritSkin: DceChangeSpiritSkinBuilder;
		DceCombineEquipmentDebris: DceCombineEquipmentDebrisBuilder;
		DceCombineProto: DceCombineProtoBuilder;
		DceCombineSpiritDebris: DceCombineSpiritDebrisBuilder;
		DceDecreeShopOpt: DceDecreeShopOptBuilder;
		DceDevilTowerOpt: DceDevilTowerOptBuilder;
		DceEquipmentDebrisList: DceEquipmentDebrisListBuilder;
		DceEquipmentEnhance: DceEquipmentEnhanceBuilder;
		DceEquipmentGearUp: DceEquipmentGearUpBuilder;
		DceEquipmentRefine: DceEquipmentRefineBuilder;
		DceHeartbeat: DceHeartbeatBuilder;
		DceInstituteOpt: DceInstituteOptBuilder;
		DceMailOpt: DceMailOptBuilder;
		DceResetLeader: DceResetLeaderBuilder;
		DceShopOpt: DceShopOptBuilder;
		DceShowFormationInfo: DceShowFormationInfoBuilder;
		DceShowSingleSpiritInfo: DceShowSingleSpiritInfoBuilder;
		DceShowSpiritInfo: DceShowSpiritInfoBuilder;
		DceSpiritDebrisList: DceSpiritDebrisListBuilder;
		DceSpiritDevelop: DceSpiritDevelopBuilder;
		DceStageAward: DceStageAwardBuilder;
		DceStageExplore: DceStageExploreBuilder;
		DceStageInfo: DceStageInfoBuilder;
		DceStageReset: DceStageResetBuilder;
		DceStorageList: DceStorageListBuilder;
		DceSummon: DceSummonBuilder;
		DceSummonInterface: DceSummonInterfaceBuilder;
		DceSwitchFormation: DceSwitchFormationBuilder;
		DceTownPatrolOpt: DceTownPatrolOptBuilder;
		DceUseExpItem: DceUseExpItemBuilder;
		DceUseItem: DceUseItemBuilder;
		DceUserInfo: DceUserInfoBuilder;
		DseAllEquipmentInfo: DseAllEquipmentInfoBuilder;
		DseAllSpiritInfo: DseAllSpiritInfoBuilder;
		DseAuthState: DseAuthStateBuilder;
		DseBattleOpt: DseBattleOptBuilder;
		DseBattleStart: DseBattleStartBuilder;
		DseBattleSweep: DseBattleSweepBuilder;
		DseChangeSpiritSkin: DseChangeSpiritSkinBuilder;
		DseCombineEquipmentDebris: DseCombineEquipmentDebrisBuilder;
		DseCombineProto: DseCombineProtoBuilder;
		DseCombineSpiritDebris: DseCombineSpiritDebrisBuilder;
		DecreeShop: DecreeShopBuilder;
		DseDecreeShopOpt: DseDecreeShopOptBuilder;
		DevilTowerData: DevilTowerDataBuilder;
		DseDevilTowerOpt: DseDevilTowerOptBuilder;
		DseEquipmentDebrisList: DseEquipmentDebrisListBuilder;
		DseEquipmentEnhance: DseEquipmentEnhanceBuilder;
		DseEquipmentGearUp: DseEquipmentGearUpBuilder;
		DseEquipmentRefine: DseEquipmentRefineBuilder;
		SingleSoldier: SingleSoldierBuilder;
		DseFormationInfo: DseFormationInfoBuilder;
		DseHeartbeat: DseHeartbeatBuilder;
		InstituteItem: InstituteItemBuilder;
		InstituteList: InstituteListBuilder;
		InstituteData: InstituteDataBuilder;
		DseInstituteOpt: DseInstituteOptBuilder;
		DseItemChange: DseItemChangeBuilder;
		ParamUnit: ParamUnitBuilder;
		MailData: MailDataBuilder;
		DseMailOpt: DseMailOptBuilder;
		DseMainScreenReady: DseMainScreenReadyBuilder;
		DseReformInfo: DseReformInfoBuilder;
		DseResetLeaderResult: DseResetLeaderResultBuilder;
		DseShopOpt: DseShopOptBuilder;
		DseSingleSpiritInfo: DseSingleSpiritInfoBuilder;
		DseSpiritDebrisList: DseSpiritDebrisListBuilder;
		DseSpiritDevelop: DseSpiritDevelopBuilder;
		DseSpiritInfo: DseSpiritInfoBuilder;
		DseStageAward: DseStageAwardBuilder;
		ExploreData: ExploreDataBuilder;
		DseStageExplore: DseStageExploreBuilder;
		ChapterInfo: ChapterInfoBuilder;
		ChildInfo: ChildInfoBuilder;
		DseStageInfo: DseStageInfoBuilder;
		DseStageReset: DseStageResetBuilder;
		DseStorageList: DseStorageListBuilder;
		DseSummon: DseSummonBuilder;
		SummonPool: SummonPoolBuilder;
		DseSummonInterface: DseSummonInterfaceBuilder;
		DseSwitchFormation: DseSwitchFormationBuilder;
		TownPatrolInfo: TownPatrolInfoBuilder;
		TownPatrolOneMove: TownPatrolOneMoveBuilder;
		DseTownPatrolOpt: DseTownPatrolOptBuilder;
		DseUpdateEquipmentInfo: DseUpdateEquipmentInfoBuilder;
		DseUpdateSpiritInfo: DseUpdateSpiritInfoBuilder;
		DseUpdateStage: DseUpdateStageBuilder;
		DseUseExpItemResult: DseUseExpItemResultBuilder;
		DseUseItem: DseUseItemBuilder;
		PlayerBaseInfo: PlayerBaseInfoBuilder;
		PlayerCurrency: PlayerCurrencyBuilder;
		MainAnnoncement: MainAnnoncementBuilder;
		DseUserInfo: DseUserInfoBuilder;
		EquipmentInfo: EquipmentInfoBuilder;
		EquipmentInfoLite: EquipmentInfoLiteBuilder;
		MDropData: MDropDataBuilder;
		MDropList: MDropListBuilder;
		MItem: MItemBuilder;
		ShopUnit: ShopUnitBuilder;
		SkillInfoLite: SkillInfoLiteBuilder;
		SpiritInfoLite: SpiritInfoLiteBuilder;
		StageData: StageDataBuilder;
		TacticInfo: TacticInfoBuilder;
		StorageType: StorageType;
		ItemSourceType: ItemSourceType;
		EquipPos: EquipPos;
		MsgHead: MsgHead;
		
}
}

declare module protoTS {

	export class BattleAction {

		

attackid?: string;
		

getAttackid?() : string;
		setAttackid?(attackid : string): void;
		



attackrole?: number;
		

getAttackrole?() : number;
		setAttackrole?(attackrole : number): void;
		



skillid?: number;
		

getSkillid?() : number;
		setSkillid?(skillid : number): void;
		



skillparam?: number;
		

getSkillparam?() : number;
		setSkillparam?(skillparam : number): void;
		



targetlist?: BattleEnemyUnit[];
		

getTargetlist?() : BattleEnemyUnit[];
		setTargetlist?(targetlist : BattleEnemyUnit[]): void;
		



owneffectlist?: BattleSelfUnit[];
		

getOwneffectlist?() : BattleSelfUnit[];
		setOwneffectlist?(owneffectlist : BattleSelfUnit[]): void;
		



allspiritslist?: BattleOneUnit[];
		

getAllspiritslist?() : BattleOneUnit[];
		setAllspiritslist?(allspiritslist : BattleOneUnit[]): void;
		



currenttime?: string;
		

getCurrenttime?() : string;
		setCurrenttime?(currenttime : string): void;
		



send():void;
	}

	export interface BattleActionMessage extends BattleAction {
	add(key: string, value: any, noAssert?: boolean): BattleActionMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleActionMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleActionBuilder {
	new(data?: BattleAction): BattleActionMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleActionMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleActionMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleActionMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleActionMessage;
	decode64(str: string) : BattleActionMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleActionMessage;
	decodeDelimited(buffer: any, enc: string): BattleActionMessage;
	decodeDelimited(buffer: any, enc: string): BattleActionMessage;
	decodeDelimited(buffer: string, enc: string): BattleActionMessage;
	decodeHex(str: string): BattleActionMessage;
	decodeJSON(str: string): BattleActionMessage;
	
}

}


declare module protoTS {

	export class BattleEnemyUnit {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



role?: number;
		

getRole?() : number;
		setRole?(role : number): void;
		



cri?: boolean;
		

getCri?() : boolean;
		setCri?(cri : boolean): void;
		



hit?: boolean;
		

getHit?() : boolean;
		setHit?(hit : boolean): void;
		



damage?: number;
		

getDamage?() : number;
		setDamage?(damage : number): void;
		



shield?: number;
		

getShield?() : number;
		setShield?(shield : number): void;
		



enemyeffecttype?: number;
		

getEnemyeffecttype?() : number;
		setEnemyeffecttype?(enemyeffecttype : number): void;
		



enemyeffectvalue?: number;
		

getEnemyeffectvalue?() : number;
		setEnemyeffectvalue?(enemyeffectvalue : number): void;
		



send():void;
	}

	export interface BattleEnemyUnitMessage extends BattleEnemyUnit {
	add(key: string, value: any, noAssert?: boolean): BattleEnemyUnitMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleEnemyUnitMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleEnemyUnitBuilder {
	new(data?: BattleEnemyUnit): BattleEnemyUnitMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleEnemyUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleEnemyUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleEnemyUnitMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleEnemyUnitMessage;
	decode64(str: string) : BattleEnemyUnitMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleEnemyUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleEnemyUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleEnemyUnitMessage;
	decodeDelimited(buffer: string, enc: string): BattleEnemyUnitMessage;
	decodeHex(str: string): BattleEnemyUnitMessage;
	decodeJSON(str: string): BattleEnemyUnitMessage;
	
}

}


declare module protoTS {

	export class BattleInfo {

		

battleid?: string;
		

getBattleid?() : string;
		setBattleid?(battleid : string): void;
		



battletype?: number;
		

getBattletype?() : number;
		setBattletype?(battletype : number): void;
		



attackTac?: TacticInfo;
		

getAttackTac?() : TacticInfo;
		setAttackTac?(attackTac : TacticInfo): void;
		



defendTac?: TacticInfo;
		

getDefendTac?() : TacticInfo;
		setDefendTac?(defendTac : TacticInfo): void;
		



actionlist?: BattleAction[];
		

getActionlist?() : BattleAction[];
		setActionlist?(actionlist : BattleAction[]): void;
		



score?: number;
		

getScore?() : number;
		setScore?(score : number): void;
		



isauto?: boolean;
		

getIsauto?() : boolean;
		setIsauto?(isauto : boolean): void;
		



send():void;
	}

	export interface BattleInfoMessage extends BattleInfo {
	add(key: string, value: any, noAssert?: boolean): BattleInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleInfoBuilder {
	new(data?: BattleInfo): BattleInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleInfoMessage;
	decode64(str: string) : BattleInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleInfoMessage;
	decodeDelimited(buffer: any, enc: string): BattleInfoMessage;
	decodeDelimited(buffer: any, enc: string): BattleInfoMessage;
	decodeDelimited(buffer: string, enc: string): BattleInfoMessage;
	decodeHex(str: string): BattleInfoMessage;
	decodeJSON(str: string): BattleInfoMessage;
	
}

}


declare module protoTS {

	export class BattleOneUnit {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



role?: number;
		

getRole?() : number;
		setRole?(role : number): void;
		



hp?: number;
		

getHp?() : number;
		setHp?(hp : number): void;
		



maxhp?: number;
		

getMaxhp?() : number;
		setMaxhp?(maxhp : number): void;
		



furypoint?: number;
		

getFurypoint?() : number;
		setFurypoint?(furypoint : number): void;
		



slideacctime?: number;
		

getSlideacctime?() : number;
		setSlideacctime?(slideacctime : number): void;
		



vertigotime?: number;
		

getVertigotime?() : number;
		setVertigotime?(vertigotime : number): void;
		



shieldtime?: number;
		

getShieldtime?() : number;
		setShieldtime?(shieldtime : number): void;
		



shieldvalue?: number;
		

getShieldvalue?() : number;
		setShieldvalue?(shieldvalue : number): void;
		



send():void;
	}

	export interface BattleOneUnitMessage extends BattleOneUnit {
	add(key: string, value: any, noAssert?: boolean): BattleOneUnitMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleOneUnitMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleOneUnitBuilder {
	new(data?: BattleOneUnit): BattleOneUnitMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleOneUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleOneUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleOneUnitMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleOneUnitMessage;
	decode64(str: string) : BattleOneUnitMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleOneUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleOneUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleOneUnitMessage;
	decodeDelimited(buffer: string, enc: string): BattleOneUnitMessage;
	decodeHex(str: string): BattleOneUnitMessage;
	decodeJSON(str: string): BattleOneUnitMessage;
	
}

}


declare module protoTS {

	export class BattleSelfUnit {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



owneffecttype?: number;
		

getOwneffecttype?() : number;
		setOwneffecttype?(owneffecttype : number): void;
		



owneffectparam?: number;
		

getOwneffectparam?() : number;
		setOwneffectparam?(owneffectparam : number): void;
		



send():void;
	}

	export interface BattleSelfUnitMessage extends BattleSelfUnit {
	add(key: string, value: any, noAssert?: boolean): BattleSelfUnitMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleSelfUnitMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleSelfUnitBuilder {
	new(data?: BattleSelfUnit): BattleSelfUnitMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleSelfUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSelfUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSelfUnitMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleSelfUnitMessage;
	decode64(str: string) : BattleSelfUnitMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleSelfUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleSelfUnitMessage;
	decodeDelimited(buffer: any, enc: string): BattleSelfUnitMessage;
	decodeDelimited(buffer: string, enc: string): BattleSelfUnitMessage;
	decodeHex(str: string): BattleSelfUnitMessage;
	decodeJSON(str: string): BattleSelfUnitMessage;
	
}

}


declare module protoTS {

	export class BattleSettle {

		

star?: number;
		

getStar?() : number;
		setStar?(star : number): void;
		



gold?: number;
		

getGold?() : number;
		setGold?(gold : number): void;
		



exp?: number;
		

getExp?() : number;
		setExp?(exp : number): void;
		



firstpass?: boolean;
		

getFirstpass?() : boolean;
		setFirstpass?(firstpass : boolean): void;
		



droplist?: MDropList;
		

getDroplist?() : MDropList;
		setDroplist?(droplist : MDropList): void;
		



send():void;
	}

	export interface BattleSettleMessage extends BattleSettle {
	add(key: string, value: any, noAssert?: boolean): BattleSettleMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleSettleMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleSettleBuilder {
	new(data?: BattleSettle): BattleSettleMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleSettleMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSettleMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSettleMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleSettleMessage;
	decode64(str: string) : BattleSettleMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleSettleMessage;
	decodeDelimited(buffer: any, enc: string): BattleSettleMessage;
	decodeDelimited(buffer: any, enc: string): BattleSettleMessage;
	decodeDelimited(buffer: string, enc: string): BattleSettleMessage;
	decodeHex(str: string): BattleSettleMessage;
	decodeJSON(str: string): BattleSettleMessage;
	
}

}


declare module protoTS {

	export class BattleSpirits {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



spiritsid?: number;
		

getSpiritsid?() : number;
		setSpiritsid?(spiritsid : number): void;
		



skillid?: number;
		

getSkillid?() : number;
		setSkillid?(skillid : number): void;
		



slideskillid?: number;
		

getSlideskillid?() : number;
		setSlideskillid?(slideskillid : number): void;
		



furyskillid?: number;
		

getFuryskillid?() : number;
		setFuryskillid?(furyskillid : number): void;
		



leaderskillid?: number;
		

getLeaderskillid?() : number;
		setLeaderskillid?(leaderskillid : number): void;
		



talentid?: number;
		

getTalentid?() : number;
		setTalentid?(talentid : number): void;
		



upgrade?: number;
		

getUpgrade?() : number;
		setUpgrade?(upgrade : number): void;
		



reformed?: number;
		

getReformed?() : number;
		setReformed?(reformed : number): void;
		



skin?: number;
		

getSkin?() : number;
		setSkin?(skin : number): void;
		



hp?: number;
		

getHp?() : number;
		setHp?(hp : number): void;
		



maxhp?: number;
		

getMaxhp?() : number;
		setMaxhp?(maxhp : number): void;
		



speed?: number;
		

getSpeed?() : number;
		setSpeed?(speed : number): void;
		



furypoint?: number;
		

getFurypoint?() : number;
		setFurypoint?(furypoint : number): void;
		



propertylist?: number[];
		

getPropertylist?() : number[];
		setPropertylist?(propertylist : number[]): void;
		



basepropertylist?: number[];
		

getBasepropertylist?() : number[];
		setBasepropertylist?(basepropertylist : number[]): void;
		



buffpropertylist?: number[];
		

getBuffpropertylist?() : number[];
		setBuffpropertylist?(buffpropertylist : number[]): void;
		



slideacctime?: number;
		

getSlideacctime?() : number;
		setSlideacctime?(slideacctime : number): void;
		



vertigotime?: number;
		

getVertigotime?() : number;
		setVertigotime?(vertigotime : number): void;
		



shieldtime?: number;
		

getShieldtime?() : number;
		setShieldtime?(shieldtime : number): void;
		



shieldvalue?: number;
		

getShieldvalue?() : number;
		setShieldvalue?(shieldvalue : number): void;
		



send():void;
	}

	export interface BattleSpiritsMessage extends BattleSpirits {
	add(key: string, value: any, noAssert?: boolean): BattleSpiritsMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): BattleSpiritsMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface BattleSpiritsBuilder {
	new(data?: BattleSpirits): BattleSpiritsMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : BattleSpiritsMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSpiritsMessage;
	decode(buffer: any, length?: number | string, enc?: string) : BattleSpiritsMessage;
	decode(buffer: string, length?: number | string, enc?: string) : BattleSpiritsMessage;
	decode64(str: string) : BattleSpiritsMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): BattleSpiritsMessage;
	decodeDelimited(buffer: any, enc: string): BattleSpiritsMessage;
	decodeDelimited(buffer: any, enc: string): BattleSpiritsMessage;
	decodeDelimited(buffer: string, enc: string): BattleSpiritsMessage;
	decodeHex(str: string): BattleSpiritsMessage;
	decodeJSON(str: string): BattleSpiritsMessage;
	
}

}


declare module protoTS {

	export class DceAllEquipmentInfo {

		

send():void;
	}

	export interface DceAllEquipmentInfoMessage extends DceAllEquipmentInfo {
	add(key: string, value: any, noAssert?: boolean): DceAllEquipmentInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceAllEquipmentInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceAllEquipmentInfoBuilder {
	new(data?: DceAllEquipmentInfo): DceAllEquipmentInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceAllEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceAllEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceAllEquipmentInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceAllEquipmentInfoMessage;
	decode64(str: string) : DceAllEquipmentInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceAllEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceAllEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceAllEquipmentInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceAllEquipmentInfoMessage;
	decodeHex(str: string): DceAllEquipmentInfoMessage;
	decodeJSON(str: string): DceAllEquipmentInfoMessage;
	
}

}


declare module protoTS {

	export class DceBattleOpt {

		

battleid?: string;
		

getBattleid?() : string;
		setBattleid?(battleid : string): void;
		



opt_type?: number;
		

getOptType?() : number;
		setOptType?(optType : number): void;
		



id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



param?: number;
		

getParam?() : number;
		setParam?(param : number): void;
		



transparam?: number;
		

getTransparam?() : number;
		setTransparam?(transparam : number): void;
		



send():void;
	}

	export interface DceBattleOptMessage extends DceBattleOpt {
	add(key: string, value: any, noAssert?: boolean): DceBattleOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceBattleOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceBattleOptBuilder {
	new(data?: DceBattleOpt): DceBattleOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceBattleOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceBattleOptMessage;
	decode64(str: string) : DceBattleOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceBattleOptMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleOptMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleOptMessage;
	decodeDelimited(buffer: string, enc: string): DceBattleOptMessage;
	decodeHex(str: string): DceBattleOptMessage;
	decodeJSON(str: string): DceBattleOptMessage;
	
}

}


declare module protoTS {

	export class DceBattleStart {

		

targetID?: string;
		

getTargetID?() : string;
		setTargetID?(targetID : string): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DceBattleStartMessage extends DceBattleStart {
	add(key: string, value: any, noAssert?: boolean): DceBattleStartMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceBattleStartMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceBattleStartBuilder {
	new(data?: DceBattleStart): DceBattleStartMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceBattleStartMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleStartMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleStartMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceBattleStartMessage;
	decode64(str: string) : DceBattleStartMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceBattleStartMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleStartMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleStartMessage;
	decodeDelimited(buffer: string, enc: string): DceBattleStartMessage;
	decodeHex(str: string): DceBattleStartMessage;
	decodeJSON(str: string): DceBattleStartMessage;
	
}

}


declare module protoTS {

	export class DceBattleSweep {

		

targetID?: string;
		

getTargetID?() : string;
		setTargetID?(targetID : string): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



times?: number;
		

getTimes?() : number;
		setTimes?(times : number): void;
		



send():void;
	}

	export interface DceBattleSweepMessage extends DceBattleSweep {
	add(key: string, value: any, noAssert?: boolean): DceBattleSweepMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceBattleSweepMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceBattleSweepBuilder {
	new(data?: DceBattleSweep): DceBattleSweepMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceBattleSweepMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleSweepMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceBattleSweepMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceBattleSweepMessage;
	decode64(str: string) : DceBattleSweepMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceBattleSweepMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleSweepMessage;
	decodeDelimited(buffer: any, enc: string): DceBattleSweepMessage;
	decodeDelimited(buffer: string, enc: string): DceBattleSweepMessage;
	decodeHex(str: string): DceBattleSweepMessage;
	decodeJSON(str: string): DceBattleSweepMessage;
	
}

}


declare module protoTS {

	export class DceChangeSpiritSkin {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



skin_id?: number;
		

getSkinId?() : number;
		setSkinId?(skinId : number): void;
		



send():void;
	}

	export interface DceChangeSpiritSkinMessage extends DceChangeSpiritSkin {
	add(key: string, value: any, noAssert?: boolean): DceChangeSpiritSkinMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceChangeSpiritSkinMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceChangeSpiritSkinBuilder {
	new(data?: DceChangeSpiritSkin): DceChangeSpiritSkinMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceChangeSpiritSkinMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceChangeSpiritSkinMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceChangeSpiritSkinMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceChangeSpiritSkinMessage;
	decode64(str: string) : DceChangeSpiritSkinMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceChangeSpiritSkinMessage;
	decodeDelimited(buffer: any, enc: string): DceChangeSpiritSkinMessage;
	decodeDelimited(buffer: any, enc: string): DceChangeSpiritSkinMessage;
	decodeDelimited(buffer: string, enc: string): DceChangeSpiritSkinMessage;
	decodeHex(str: string): DceChangeSpiritSkinMessage;
	decodeJSON(str: string): DceChangeSpiritSkinMessage;
	
}

}


declare module protoTS {

	export class DceCombineEquipmentDebris {

		

id?: number[];
		

getId?() : number[];
		setId?(id : number[]): void;
		



send():void;
	}

	export interface DceCombineEquipmentDebrisMessage extends DceCombineEquipmentDebris {
	add(key: string, value: any, noAssert?: boolean): DceCombineEquipmentDebrisMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceCombineEquipmentDebrisMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceCombineEquipmentDebrisBuilder {
	new(data?: DceCombineEquipmentDebris): DceCombineEquipmentDebrisMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceCombineEquipmentDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineEquipmentDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineEquipmentDebrisMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceCombineEquipmentDebrisMessage;
	decode64(str: string) : DceCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: string, enc: string): DceCombineEquipmentDebrisMessage;
	decodeHex(str: string): DceCombineEquipmentDebrisMessage;
	decodeJSON(str: string): DceCombineEquipmentDebrisMessage;
	
}

}


declare module protoTS {

	export class DceCombineProto {

		

proto_list?: string[];
		

getProtoList?() : string[];
		setProtoList?(protoList : string[]): void;
		



send():void;
	}

	export interface DceCombineProtoMessage extends DceCombineProto {
	add(key: string, value: any, noAssert?: boolean): DceCombineProtoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceCombineProtoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceCombineProtoBuilder {
	new(data?: DceCombineProto): DceCombineProtoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceCombineProtoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineProtoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineProtoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceCombineProtoMessage;
	decode64(str: string) : DceCombineProtoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceCombineProtoMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineProtoMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineProtoMessage;
	decodeDelimited(buffer: string, enc: string): DceCombineProtoMessage;
	decodeHex(str: string): DceCombineProtoMessage;
	decodeJSON(str: string): DceCombineProtoMessage;
	
}

}


declare module protoTS {

	export class DceCombineSpiritDebris {

		

id?: number[];
		

getId?() : number[];
		setId?(id : number[]): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DceCombineSpiritDebrisMessage extends DceCombineSpiritDebris {
	add(key: string, value: any, noAssert?: boolean): DceCombineSpiritDebrisMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceCombineSpiritDebrisMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceCombineSpiritDebrisBuilder {
	new(data?: DceCombineSpiritDebris): DceCombineSpiritDebrisMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceCombineSpiritDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineSpiritDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceCombineSpiritDebrisMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceCombineSpiritDebrisMessage;
	decode64(str: string) : DceCombineSpiritDebrisMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceCombineSpiritDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineSpiritDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DceCombineSpiritDebrisMessage;
	decodeDelimited(buffer: string, enc: string): DceCombineSpiritDebrisMessage;
	decodeHex(str: string): DceCombineSpiritDebrisMessage;
	decodeJSON(str: string): DceCombineSpiritDebrisMessage;
	
}

}


declare module protoTS {

	export class DceDecreeShopOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



index?: number;
		

getIndex?() : number;
		setIndex?(index : number): void;
		



send():void;
	}

	export interface DceDecreeShopOptMessage extends DceDecreeShopOpt {
	add(key: string, value: any, noAssert?: boolean): DceDecreeShopOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceDecreeShopOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceDecreeShopOptBuilder {
	new(data?: DceDecreeShopOpt): DceDecreeShopOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceDecreeShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceDecreeShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceDecreeShopOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceDecreeShopOptMessage;
	decode64(str: string) : DceDecreeShopOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceDecreeShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DceDecreeShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DceDecreeShopOptMessage;
	decodeDelimited(buffer: string, enc: string): DceDecreeShopOptMessage;
	decodeHex(str: string): DceDecreeShopOptMessage;
	decodeJSON(str: string): DceDecreeShopOptMessage;
	
}

}


declare module protoTS {

	export class DceDevilTowerOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DceDevilTowerOptMessage extends DceDevilTowerOpt {
	add(key: string, value: any, noAssert?: boolean): DceDevilTowerOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceDevilTowerOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceDevilTowerOptBuilder {
	new(data?: DceDevilTowerOpt): DceDevilTowerOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceDevilTowerOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceDevilTowerOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceDevilTowerOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceDevilTowerOptMessage;
	decode64(str: string) : DceDevilTowerOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceDevilTowerOptMessage;
	decodeDelimited(buffer: any, enc: string): DceDevilTowerOptMessage;
	decodeDelimited(buffer: any, enc: string): DceDevilTowerOptMessage;
	decodeDelimited(buffer: string, enc: string): DceDevilTowerOptMessage;
	decodeHex(str: string): DceDevilTowerOptMessage;
	decodeJSON(str: string): DceDevilTowerOptMessage;
	
}

}


declare module protoTS {

	export class DceEquipmentDebrisList {

		

send():void;
	}

	export interface DceEquipmentDebrisListMessage extends DceEquipmentDebrisList {
	add(key: string, value: any, noAssert?: boolean): DceEquipmentDebrisListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceEquipmentDebrisListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceEquipmentDebrisListBuilder {
	new(data?: DceEquipmentDebrisList): DceEquipmentDebrisListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceEquipmentDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentDebrisListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceEquipmentDebrisListMessage;
	decode64(str: string) : DceEquipmentDebrisListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceEquipmentDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentDebrisListMessage;
	decodeDelimited(buffer: string, enc: string): DceEquipmentDebrisListMessage;
	decodeHex(str: string): DceEquipmentDebrisListMessage;
	decodeJSON(str: string): DceEquipmentDebrisListMessage;
	
}

}


declare module protoTS {

	export class DceEquipmentEnhance {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



send():void;
	}

	export interface DceEquipmentEnhanceMessage extends DceEquipmentEnhance {
	add(key: string, value: any, noAssert?: boolean): DceEquipmentEnhanceMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceEquipmentEnhanceMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceEquipmentEnhanceBuilder {
	new(data?: DceEquipmentEnhance): DceEquipmentEnhanceMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceEquipmentEnhanceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentEnhanceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentEnhanceMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceEquipmentEnhanceMessage;
	decode64(str: string) : DceEquipmentEnhanceMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceEquipmentEnhanceMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentEnhanceMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentEnhanceMessage;
	decodeDelimited(buffer: string, enc: string): DceEquipmentEnhanceMessage;
	decodeHex(str: string): DceEquipmentEnhanceMessage;
	decodeJSON(str: string): DceEquipmentEnhanceMessage;
	
}

}


declare module protoTS {

	export class DceEquipmentGearUp {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



send():void;
	}

	export interface DceEquipmentGearUpMessage extends DceEquipmentGearUp {
	add(key: string, value: any, noAssert?: boolean): DceEquipmentGearUpMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceEquipmentGearUpMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceEquipmentGearUpBuilder {
	new(data?: DceEquipmentGearUp): DceEquipmentGearUpMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceEquipmentGearUpMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentGearUpMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentGearUpMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceEquipmentGearUpMessage;
	decode64(str: string) : DceEquipmentGearUpMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceEquipmentGearUpMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentGearUpMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentGearUpMessage;
	decodeDelimited(buffer: string, enc: string): DceEquipmentGearUpMessage;
	decodeHex(str: string): DceEquipmentGearUpMessage;
	decodeJSON(str: string): DceEquipmentGearUpMessage;
	
}

}


declare module protoTS {

	export class DceEquipmentRefine {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



send():void;
	}

	export interface DceEquipmentRefineMessage extends DceEquipmentRefine {
	add(key: string, value: any, noAssert?: boolean): DceEquipmentRefineMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceEquipmentRefineMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceEquipmentRefineBuilder {
	new(data?: DceEquipmentRefine): DceEquipmentRefineMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceEquipmentRefineMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentRefineMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceEquipmentRefineMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceEquipmentRefineMessage;
	decode64(str: string) : DceEquipmentRefineMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceEquipmentRefineMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentRefineMessage;
	decodeDelimited(buffer: any, enc: string): DceEquipmentRefineMessage;
	decodeDelimited(buffer: string, enc: string): DceEquipmentRefineMessage;
	decodeHex(str: string): DceEquipmentRefineMessage;
	decodeJSON(str: string): DceEquipmentRefineMessage;
	
}

}


declare module protoTS {

	export class DceHeartbeat {

		

send():void;
	}

	export interface DceHeartbeatMessage extends DceHeartbeat {
	add(key: string, value: any, noAssert?: boolean): DceHeartbeatMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceHeartbeatMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceHeartbeatBuilder {
	new(data?: DceHeartbeat): DceHeartbeatMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceHeartbeatMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceHeartbeatMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceHeartbeatMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceHeartbeatMessage;
	decode64(str: string) : DceHeartbeatMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceHeartbeatMessage;
	decodeDelimited(buffer: any, enc: string): DceHeartbeatMessage;
	decodeDelimited(buffer: any, enc: string): DceHeartbeatMessage;
	decodeDelimited(buffer: string, enc: string): DceHeartbeatMessage;
	decodeHex(str: string): DceHeartbeatMessage;
	decodeJSON(str: string): DceHeartbeatMessage;
	
}

}


declare module protoTS {

	export class DceInstituteOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



instituteid?: number;
		

getInstituteid?() : number;
		setInstituteid?(instituteid : number): void;
		



send():void;
	}

	export interface DceInstituteOptMessage extends DceInstituteOpt {
	add(key: string, value: any, noAssert?: boolean): DceInstituteOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceInstituteOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceInstituteOptBuilder {
	new(data?: DceInstituteOpt): DceInstituteOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceInstituteOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceInstituteOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceInstituteOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceInstituteOptMessage;
	decode64(str: string) : DceInstituteOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceInstituteOptMessage;
	decodeDelimited(buffer: any, enc: string): DceInstituteOptMessage;
	decodeDelimited(buffer: any, enc: string): DceInstituteOptMessage;
	decodeDelimited(buffer: string, enc: string): DceInstituteOptMessage;
	decodeHex(str: string): DceInstituteOptMessage;
	decodeJSON(str: string): DceInstituteOptMessage;
	
}

}


declare module protoTS {

	export class DceMailOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



mailtype?: number;
		

getMailtype?() : number;
		setMailtype?(mailtype : number): void;
		



id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



receiver?: string;
		

getReceiver?() : string;
		setReceiver?(receiver : string): void;
		



receiveruid?: string;
		

getReceiveruid?() : string;
		setReceiveruid?(receiveruid : string): void;
		



content?: string;
		

getContent?() : string;
		setContent?(content : string): void;
		



send():void;
	}

	export interface DceMailOptMessage extends DceMailOpt {
	add(key: string, value: any, noAssert?: boolean): DceMailOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceMailOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceMailOptBuilder {
	new(data?: DceMailOpt): DceMailOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceMailOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceMailOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceMailOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceMailOptMessage;
	decode64(str: string) : DceMailOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceMailOptMessage;
	decodeDelimited(buffer: any, enc: string): DceMailOptMessage;
	decodeDelimited(buffer: any, enc: string): DceMailOptMessage;
	decodeDelimited(buffer: string, enc: string): DceMailOptMessage;
	decodeHex(str: string): DceMailOptMessage;
	decodeJSON(str: string): DceMailOptMessage;
	
}

}


declare module protoTS {

	export class DceResetLeader {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



send():void;
	}

	export interface DceResetLeaderMessage extends DceResetLeader {
	add(key: string, value: any, noAssert?: boolean): DceResetLeaderMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceResetLeaderMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceResetLeaderBuilder {
	new(data?: DceResetLeader): DceResetLeaderMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceResetLeaderMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceResetLeaderMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceResetLeaderMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceResetLeaderMessage;
	decode64(str: string) : DceResetLeaderMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceResetLeaderMessage;
	decodeDelimited(buffer: any, enc: string): DceResetLeaderMessage;
	decodeDelimited(buffer: any, enc: string): DceResetLeaderMessage;
	decodeDelimited(buffer: string, enc: string): DceResetLeaderMessage;
	decodeHex(str: string): DceResetLeaderMessage;
	decodeJSON(str: string): DceResetLeaderMessage;
	
}

}


declare module protoTS {

	export class DceShopOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



shopid?: number;
		

getShopid?() : number;
		setShopid?(shopid : number): void;
		



count?: number;
		

getCount?() : number;
		setCount?(count : number): void;
		



send():void;
	}

	export interface DceShopOptMessage extends DceShopOpt {
	add(key: string, value: any, noAssert?: boolean): DceShopOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceShopOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceShopOptBuilder {
	new(data?: DceShopOpt): DceShopOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShopOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceShopOptMessage;
	decode64(str: string) : DceShopOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DceShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DceShopOptMessage;
	decodeDelimited(buffer: string, enc: string): DceShopOptMessage;
	decodeHex(str: string): DceShopOptMessage;
	decodeJSON(str: string): DceShopOptMessage;
	
}

}


declare module protoTS {

	export class DceShowFormationInfo {

		

send():void;
	}

	export interface DceShowFormationInfoMessage extends DceShowFormationInfo {
	add(key: string, value: any, noAssert?: boolean): DceShowFormationInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceShowFormationInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceShowFormationInfoBuilder {
	new(data?: DceShowFormationInfo): DceShowFormationInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceShowFormationInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowFormationInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowFormationInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceShowFormationInfoMessage;
	decode64(str: string) : DceShowFormationInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceShowFormationInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowFormationInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowFormationInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceShowFormationInfoMessage;
	decodeHex(str: string): DceShowFormationInfoMessage;
	decodeJSON(str: string): DceShowFormationInfoMessage;
	
}

}


declare module protoTS {

	export class DceShowSingleSpiritInfo {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



send():void;
	}

	export interface DceShowSingleSpiritInfoMessage extends DceShowSingleSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DceShowSingleSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceShowSingleSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceShowSingleSpiritInfoBuilder {
	new(data?: DceShowSingleSpiritInfo): DceShowSingleSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceShowSingleSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowSingleSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowSingleSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceShowSingleSpiritInfoMessage;
	decode64(str: string) : DceShowSingleSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceShowSingleSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowSingleSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowSingleSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceShowSingleSpiritInfoMessage;
	decodeHex(str: string): DceShowSingleSpiritInfoMessage;
	decodeJSON(str: string): DceShowSingleSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DceShowSpiritInfo {

		

msgType?: number;
		

getMsgType?() : number;
		setMsgType?(msgType : number): void;
		



send():void;
	}

	export interface DceShowSpiritInfoMessage extends DceShowSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DceShowSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceShowSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceShowSpiritInfoBuilder {
	new(data?: DceShowSpiritInfo): DceShowSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceShowSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceShowSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceShowSpiritInfoMessage;
	decode64(str: string) : DceShowSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceShowSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceShowSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceShowSpiritInfoMessage;
	decodeHex(str: string): DceShowSpiritInfoMessage;
	decodeJSON(str: string): DceShowSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DceSpiritDebrisList {

		

send():void;
	}

	export interface DceSpiritDebrisListMessage extends DceSpiritDebrisList {
	add(key: string, value: any, noAssert?: boolean): DceSpiritDebrisListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceSpiritDebrisListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceSpiritDebrisListBuilder {
	new(data?: DceSpiritDebrisList): DceSpiritDebrisListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceSpiritDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSpiritDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSpiritDebrisListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceSpiritDebrisListMessage;
	decode64(str: string) : DceSpiritDebrisListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceSpiritDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DceSpiritDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DceSpiritDebrisListMessage;
	decodeDelimited(buffer: string, enc: string): DceSpiritDebrisListMessage;
	decodeHex(str: string): DceSpiritDebrisListMessage;
	decodeJSON(str: string): DceSpiritDebrisListMessage;
	
}

}


declare module protoTS {

	export class DceSpiritDevelop {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



action?: number;
		

getAction?() : number;
		setAction?(action : number): void;
		



send():void;
	}

	export interface DceSpiritDevelopMessage extends DceSpiritDevelop {
	add(key: string, value: any, noAssert?: boolean): DceSpiritDevelopMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceSpiritDevelopMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceSpiritDevelopBuilder {
	new(data?: DceSpiritDevelop): DceSpiritDevelopMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceSpiritDevelopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSpiritDevelopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSpiritDevelopMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceSpiritDevelopMessage;
	decode64(str: string) : DceSpiritDevelopMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceSpiritDevelopMessage;
	decodeDelimited(buffer: any, enc: string): DceSpiritDevelopMessage;
	decodeDelimited(buffer: any, enc: string): DceSpiritDevelopMessage;
	decodeDelimited(buffer: string, enc: string): DceSpiritDevelopMessage;
	decodeHex(str: string): DceSpiritDevelopMessage;
	decodeJSON(str: string): DceSpiritDevelopMessage;
	
}

}


declare module protoTS {

	export class DceStageAward {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



chapterid?: number;
		

getChapterid?() : number;
		setChapterid?(chapterid : number): void;
		



sceneid?: number;
		

getSceneid?() : number;
		setSceneid?(sceneid : number): void;
		



send():void;
	}

	export interface DceStageAwardMessage extends DceStageAward {
	add(key: string, value: any, noAssert?: boolean): DceStageAwardMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceStageAwardMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceStageAwardBuilder {
	new(data?: DceStageAward): DceStageAwardMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceStageAwardMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageAwardMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageAwardMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceStageAwardMessage;
	decode64(str: string) : DceStageAwardMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceStageAwardMessage;
	decodeDelimited(buffer: any, enc: string): DceStageAwardMessage;
	decodeDelimited(buffer: any, enc: string): DceStageAwardMessage;
	decodeDelimited(buffer: string, enc: string): DceStageAwardMessage;
	decodeHex(str: string): DceStageAwardMessage;
	decodeJSON(str: string): DceStageAwardMessage;
	
}

}


declare module protoTS {

	export class DceStageExplore {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DceStageExploreMessage extends DceStageExplore {
	add(key: string, value: any, noAssert?: boolean): DceStageExploreMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceStageExploreMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceStageExploreBuilder {
	new(data?: DceStageExplore): DceStageExploreMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceStageExploreMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageExploreMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageExploreMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceStageExploreMessage;
	decode64(str: string) : DceStageExploreMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceStageExploreMessage;
	decodeDelimited(buffer: any, enc: string): DceStageExploreMessage;
	decodeDelimited(buffer: any, enc: string): DceStageExploreMessage;
	decodeDelimited(buffer: string, enc: string): DceStageExploreMessage;
	decodeHex(str: string): DceStageExploreMessage;
	decodeJSON(str: string): DceStageExploreMessage;
	
}

}


declare module protoTS {

	export class DceStageInfo {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



chapterid?: number;
		

getChapterid?() : number;
		setChapterid?(chapterid : number): void;
		



send():void;
	}

	export interface DceStageInfoMessage extends DceStageInfo {
	add(key: string, value: any, noAssert?: boolean): DceStageInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceStageInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceStageInfoBuilder {
	new(data?: DceStageInfo): DceStageInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceStageInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceStageInfoMessage;
	decode64(str: string) : DceStageInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceStageInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceStageInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceStageInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceStageInfoMessage;
	decodeHex(str: string): DceStageInfoMessage;
	decodeJSON(str: string): DceStageInfoMessage;
	
}

}


declare module protoTS {

	export class DceStageReset {

		

stageid?: number;
		

getStageid?() : number;
		setStageid?(stageid : number): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DceStageResetMessage extends DceStageReset {
	add(key: string, value: any, noAssert?: boolean): DceStageResetMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceStageResetMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceStageResetBuilder {
	new(data?: DceStageReset): DceStageResetMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceStageResetMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageResetMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStageResetMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceStageResetMessage;
	decode64(str: string) : DceStageResetMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceStageResetMessage;
	decodeDelimited(buffer: any, enc: string): DceStageResetMessage;
	decodeDelimited(buffer: any, enc: string): DceStageResetMessage;
	decodeDelimited(buffer: string, enc: string): DceStageResetMessage;
	decodeHex(str: string): DceStageResetMessage;
	decodeJSON(str: string): DceStageResetMessage;
	
}

}


declare module protoTS {

	export class DceStorageList {

		

type?: StorageType;
		

getType?() : StorageType;
		setType?(type : StorageType): void;
		



send():void;
	}

	export interface DceStorageListMessage extends DceStorageList {
	add(key: string, value: any, noAssert?: boolean): DceStorageListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceStorageListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceStorageListBuilder {
	new(data?: DceStorageList): DceStorageListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceStorageListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStorageListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceStorageListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceStorageListMessage;
	decode64(str: string) : DceStorageListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceStorageListMessage;
	decodeDelimited(buffer: any, enc: string): DceStorageListMessage;
	decodeDelimited(buffer: any, enc: string): DceStorageListMessage;
	decodeDelimited(buffer: string, enc: string): DceStorageListMessage;
	decodeHex(str: string): DceStorageListMessage;
	decodeJSON(str: string): DceStorageListMessage;
	
}

}


declare module protoTS {

	export class DceSummon {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



mode?: number;
		

getMode?() : number;
		setMode?(mode : number): void;
		



send():void;
	}

	export interface DceSummonMessage extends DceSummon {
	add(key: string, value: any, noAssert?: boolean): DceSummonMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceSummonMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceSummonBuilder {
	new(data?: DceSummon): DceSummonMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceSummonMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSummonMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSummonMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceSummonMessage;
	decode64(str: string) : DceSummonMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceSummonMessage;
	decodeDelimited(buffer: any, enc: string): DceSummonMessage;
	decodeDelimited(buffer: any, enc: string): DceSummonMessage;
	decodeDelimited(buffer: string, enc: string): DceSummonMessage;
	decodeHex(str: string): DceSummonMessage;
	decodeJSON(str: string): DceSummonMessage;
	
}

}


declare module protoTS {

	export class DceSummonInterface {

		

send():void;
	}

	export interface DceSummonInterfaceMessage extends DceSummonInterface {
	add(key: string, value: any, noAssert?: boolean): DceSummonInterfaceMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceSummonInterfaceMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceSummonInterfaceBuilder {
	new(data?: DceSummonInterface): DceSummonInterfaceMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceSummonInterfaceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSummonInterfaceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSummonInterfaceMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceSummonInterfaceMessage;
	decode64(str: string) : DceSummonInterfaceMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceSummonInterfaceMessage;
	decodeDelimited(buffer: any, enc: string): DceSummonInterfaceMessage;
	decodeDelimited(buffer: any, enc: string): DceSummonInterfaceMessage;
	decodeDelimited(buffer: string, enc: string): DceSummonInterfaceMessage;
	decodeHex(str: string): DceSummonInterfaceMessage;
	decodeJSON(str: string): DceSummonInterfaceMessage;
	
}

}


declare module protoTS {

	export class DceSwitchFormation {

		

pos1?: number;
		

getPos1?() : number;
		setPos1?(pos1 : number): void;
		



pos2?: number;
		

getPos2?() : number;
		setPos2?(pos2 : number): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



send():void;
	}

	export interface DceSwitchFormationMessage extends DceSwitchFormation {
	add(key: string, value: any, noAssert?: boolean): DceSwitchFormationMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceSwitchFormationMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceSwitchFormationBuilder {
	new(data?: DceSwitchFormation): DceSwitchFormationMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceSwitchFormationMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSwitchFormationMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceSwitchFormationMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceSwitchFormationMessage;
	decode64(str: string) : DceSwitchFormationMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceSwitchFormationMessage;
	decodeDelimited(buffer: any, enc: string): DceSwitchFormationMessage;
	decodeDelimited(buffer: any, enc: string): DceSwitchFormationMessage;
	decodeDelimited(buffer: string, enc: string): DceSwitchFormationMessage;
	decodeHex(str: string): DceSwitchFormationMessage;
	decodeJSON(str: string): DceSwitchFormationMessage;
	
}

}


declare module protoTS {

	export class DceTownPatrolOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



param?: number;
		

getParam?() : number;
		setParam?(param : number): void;
		



hoepos?: number[];
		

getHoepos?() : number[];
		setHoepos?(hoepos : number[]): void;
		



send():void;
	}

	export interface DceTownPatrolOptMessage extends DceTownPatrolOpt {
	add(key: string, value: any, noAssert?: boolean): DceTownPatrolOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceTownPatrolOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceTownPatrolOptBuilder {
	new(data?: DceTownPatrolOpt): DceTownPatrolOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceTownPatrolOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceTownPatrolOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceTownPatrolOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceTownPatrolOptMessage;
	decode64(str: string) : DceTownPatrolOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceTownPatrolOptMessage;
	decodeDelimited(buffer: any, enc: string): DceTownPatrolOptMessage;
	decodeDelimited(buffer: any, enc: string): DceTownPatrolOptMessage;
	decodeDelimited(buffer: string, enc: string): DceTownPatrolOptMessage;
	decodeHex(str: string): DceTownPatrolOptMessage;
	decodeJSON(str: string): DceTownPatrolOptMessage;
	
}

}


declare module protoTS {

	export class DceUseExpItem {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



amount?: number;
		

getAmount?() : number;
		setAmount?(amount : number): void;
		



send():void;
	}

	export interface DceUseExpItemMessage extends DceUseExpItem {
	add(key: string, value: any, noAssert?: boolean): DceUseExpItemMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceUseExpItemMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceUseExpItemBuilder {
	new(data?: DceUseExpItem): DceUseExpItemMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceUseExpItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUseExpItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUseExpItemMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceUseExpItemMessage;
	decode64(str: string) : DceUseExpItemMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceUseExpItemMessage;
	decodeDelimited(buffer: any, enc: string): DceUseExpItemMessage;
	decodeDelimited(buffer: any, enc: string): DceUseExpItemMessage;
	decodeDelimited(buffer: string, enc: string): DceUseExpItemMessage;
	decodeHex(str: string): DceUseExpItemMessage;
	decodeJSON(str: string): DceUseExpItemMessage;
	
}

}


declare module protoTS {

	export class DceUseItem {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



amount?: number;
		

getAmount?() : number;
		setAmount?(amount : number): void;
		



param?: number;
		

getParam?() : number;
		setParam?(param : number): void;
		



msgType?: number;
		

getMsgType?() : number;
		setMsgType?(msgType : number): void;
		



send():void;
	}

	export interface DceUseItemMessage extends DceUseItem {
	add(key: string, value: any, noAssert?: boolean): DceUseItemMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceUseItemMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceUseItemBuilder {
	new(data?: DceUseItem): DceUseItemMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceUseItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUseItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUseItemMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceUseItemMessage;
	decode64(str: string) : DceUseItemMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceUseItemMessage;
	decodeDelimited(buffer: any, enc: string): DceUseItemMessage;
	decodeDelimited(buffer: any, enc: string): DceUseItemMessage;
	decodeDelimited(buffer: string, enc: string): DceUseItemMessage;
	decodeHex(str: string): DceUseItemMessage;
	decodeJSON(str: string): DceUseItemMessage;
	
}

}


declare module protoTS {

	export class DceUserInfo {

		

send():void;
	}

	export interface DceUserInfoMessage extends DceUserInfo {
	add(key: string, value: any, noAssert?: boolean): DceUserInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DceUserInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DceUserInfoBuilder {
	new(data?: DceUserInfo): DceUserInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DceUserInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUserInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DceUserInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DceUserInfoMessage;
	decode64(str: string) : DceUserInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DceUserInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceUserInfoMessage;
	decodeDelimited(buffer: any, enc: string): DceUserInfoMessage;
	decodeDelimited(buffer: string, enc: string): DceUserInfoMessage;
	decodeHex(str: string): DceUserInfoMessage;
	decodeJSON(str: string): DceUserInfoMessage;
	
}

}


declare module protoTS {

	export class DseAllEquipmentInfo {

		

infos?: EquipmentInfo[];
		

getInfos?() : EquipmentInfo[];
		setInfos?(infos : EquipmentInfo[]): void;
		



send():void;
	}

	export interface DseAllEquipmentInfoMessage extends DseAllEquipmentInfo {
	add(key: string, value: any, noAssert?: boolean): DseAllEquipmentInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseAllEquipmentInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseAllEquipmentInfoBuilder {
	new(data?: DseAllEquipmentInfo): DseAllEquipmentInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseAllEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAllEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAllEquipmentInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseAllEquipmentInfoMessage;
	decode64(str: string) : DseAllEquipmentInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseAllEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseAllEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseAllEquipmentInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseAllEquipmentInfoMessage;
	decodeHex(str: string): DseAllEquipmentInfoMessage;
	decodeJSON(str: string): DseAllEquipmentInfoMessage;
	
}

}


declare module protoTS {

	export class DseAllSpiritInfo {

		

soldiers?: DseSingleSpiritInfo[];
		

getSoldiers?() : DseSingleSpiritInfo[];
		setSoldiers?(soldiers : DseSingleSpiritInfo[]): void;
		



send():void;
	}

	export interface DseAllSpiritInfoMessage extends DseAllSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DseAllSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseAllSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseAllSpiritInfoBuilder {
	new(data?: DseAllSpiritInfo): DseAllSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseAllSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAllSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAllSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseAllSpiritInfoMessage;
	decode64(str: string) : DseAllSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseAllSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseAllSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseAllSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseAllSpiritInfoMessage;
	decodeHex(str: string): DseAllSpiritInfoMessage;
	decodeJSON(str: string): DseAllSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DseAuthState {

		

pass?: boolean;
		

getPass?() : boolean;
		setPass?(pass : boolean): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



leftMin?: number;
		

getLeftMin?() : number;
		setLeftMin?(leftMin : number): void;
		



time?: number;
		

getTime?() : number;
		setTime?(time : number): void;
		



zone?: number;
		

getZone?() : number;
		setZone?(zone : number): void;
		



uid?: string;
		

getUid?() : string;
		setUid?(uid : string): void;
		



send():void;
	}

	export interface DseAuthStateMessage extends DseAuthState {
	add(key: string, value: any, noAssert?: boolean): DseAuthStateMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseAuthStateMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseAuthStateBuilder {
	new(data?: DseAuthState): DseAuthStateMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseAuthStateMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAuthStateMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseAuthStateMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseAuthStateMessage;
	decode64(str: string) : DseAuthStateMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseAuthStateMessage;
	decodeDelimited(buffer: any, enc: string): DseAuthStateMessage;
	decodeDelimited(buffer: any, enc: string): DseAuthStateMessage;
	decodeDelimited(buffer: string, enc: string): DseAuthStateMessage;
	decodeHex(str: string): DseAuthStateMessage;
	decodeJSON(str: string): DseAuthStateMessage;
	
}

}


declare module protoTS {

	export class DseBattleOpt {

		

opt_type?: number;
		

getOptType?() : number;
		setOptType?(optType : number): void;
		



id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



param?: number;
		

getParam?() : number;
		setParam?(param : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



action?: BattleAction[];
		

getAction?() : BattleAction[];
		setAction?(action : BattleAction[]): void;
		



isover?: boolean;
		

getIsover?() : boolean;
		setIsover?(isover : boolean): void;
		



battleinfo?: BattleInfo;
		

getBattleinfo?() : BattleInfo;
		setBattleinfo?(battleinfo : BattleInfo): void;
		



sendclient?: boolean;
		

getSendclient?() : boolean;
		setSendclient?(sendclient : boolean): void;
		



BattleSettle?: BattleSettle;
		

getBattleSettle?() : BattleSettle;
		setBattleSettle?(battleSettle : BattleSettle): void;
		



transparam?: number;
		

getTransparam?() : number;
		setTransparam?(transparam : number): void;
		



satifycon?: boolean;
		

getSatifycon?() : boolean;
		setSatifycon?(satifycon : boolean): void;
		



send():void;
	}

	export interface DseBattleOptMessage extends DseBattleOpt {
	add(key: string, value: any, noAssert?: boolean): DseBattleOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseBattleOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseBattleOptBuilder {
	new(data?: DseBattleOpt): DseBattleOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseBattleOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseBattleOptMessage;
	decode64(str: string) : DseBattleOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseBattleOptMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleOptMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleOptMessage;
	decodeDelimited(buffer: string, enc: string): DseBattleOptMessage;
	decodeHex(str: string): DseBattleOptMessage;
	decodeJSON(str: string): DseBattleOptMessage;
	
}

}


declare module protoTS {

	export class DseBattleStart {

		

targetID?: string;
		

getTargetID?() : string;
		setTargetID?(targetID : string): void;
		



battleinfo?: BattleInfo;
		

getBattleinfo?() : BattleInfo;
		setBattleinfo?(battleinfo : BattleInfo): void;
		



result?: number;
		

getResult?() : number;
		setResult?(result : number): void;
		



send():void;
	}

	export interface DseBattleStartMessage extends DseBattleStart {
	add(key: string, value: any, noAssert?: boolean): DseBattleStartMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseBattleStartMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseBattleStartBuilder {
	new(data?: DseBattleStart): DseBattleStartMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseBattleStartMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleStartMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleStartMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseBattleStartMessage;
	decode64(str: string) : DseBattleStartMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseBattleStartMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleStartMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleStartMessage;
	decodeDelimited(buffer: string, enc: string): DseBattleStartMessage;
	decodeHex(str: string): DseBattleStartMessage;
	decodeJSON(str: string): DseBattleStartMessage;
	
}

}


declare module protoTS {

	export class DseBattleSweep {

		

res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



targetID?: string;
		

getTargetID?() : string;
		setTargetID?(targetID : string): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



BattleSettle?: BattleSettle[];
		

getBattleSettle?() : BattleSettle[];
		setBattleSettle?(battleSettle : BattleSettle[]): void;
		



send():void;
	}

	export interface DseBattleSweepMessage extends DseBattleSweep {
	add(key: string, value: any, noAssert?: boolean): DseBattleSweepMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseBattleSweepMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseBattleSweepBuilder {
	new(data?: DseBattleSweep): DseBattleSweepMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseBattleSweepMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleSweepMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseBattleSweepMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseBattleSweepMessage;
	decode64(str: string) : DseBattleSweepMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseBattleSweepMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleSweepMessage;
	decodeDelimited(buffer: any, enc: string): DseBattleSweepMessage;
	decodeDelimited(buffer: string, enc: string): DseBattleSweepMessage;
	decodeHex(str: string): DseBattleSweepMessage;
	decodeJSON(str: string): DseBattleSweepMessage;
	
}

}


declare module protoTS {

	export class DseChangeSpiritSkin {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



skin_id?: number;
		

getSkinId?() : number;
		setSkinId?(skinId : number): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseChangeSpiritSkinMessage extends DseChangeSpiritSkin {
	add(key: string, value: any, noAssert?: boolean): DseChangeSpiritSkinMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseChangeSpiritSkinMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseChangeSpiritSkinBuilder {
	new(data?: DseChangeSpiritSkin): DseChangeSpiritSkinMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseChangeSpiritSkinMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseChangeSpiritSkinMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseChangeSpiritSkinMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseChangeSpiritSkinMessage;
	decode64(str: string) : DseChangeSpiritSkinMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseChangeSpiritSkinMessage;
	decodeDelimited(buffer: any, enc: string): DseChangeSpiritSkinMessage;
	decodeDelimited(buffer: any, enc: string): DseChangeSpiritSkinMessage;
	decodeDelimited(buffer: string, enc: string): DseChangeSpiritSkinMessage;
	decodeHex(str: string): DseChangeSpiritSkinMessage;
	decodeJSON(str: string): DseChangeSpiritSkinMessage;
	
}

}


declare module protoTS {

	export class DseCombineEquipmentDebris {

		

id?: number[];
		

getId?() : number[];
		setId?(id : number[]): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseCombineEquipmentDebrisMessage extends DseCombineEquipmentDebris {
	add(key: string, value: any, noAssert?: boolean): DseCombineEquipmentDebrisMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseCombineEquipmentDebrisMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseCombineEquipmentDebrisBuilder {
	new(data?: DseCombineEquipmentDebris): DseCombineEquipmentDebrisMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseCombineEquipmentDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineEquipmentDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineEquipmentDebrisMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseCombineEquipmentDebrisMessage;
	decode64(str: string) : DseCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineEquipmentDebrisMessage;
	decodeDelimited(buffer: string, enc: string): DseCombineEquipmentDebrisMessage;
	decodeHex(str: string): DseCombineEquipmentDebrisMessage;
	decodeJSON(str: string): DseCombineEquipmentDebrisMessage;
	
}

}


declare module protoTS {

	export class DseCombineProto {

		

res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



send():void;
	}

	export interface DseCombineProtoMessage extends DseCombineProto {
	add(key: string, value: any, noAssert?: boolean): DseCombineProtoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseCombineProtoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseCombineProtoBuilder {
	new(data?: DseCombineProto): DseCombineProtoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseCombineProtoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineProtoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineProtoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseCombineProtoMessage;
	decode64(str: string) : DseCombineProtoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseCombineProtoMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineProtoMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineProtoMessage;
	decodeDelimited(buffer: string, enc: string): DseCombineProtoMessage;
	decodeHex(str: string): DseCombineProtoMessage;
	decodeJSON(str: string): DseCombineProtoMessage;
	
}

}


declare module protoTS {

	export class DseCombineSpiritDebris {

		

id?: number[];
		

getId?() : number[];
		setId?(id : number[]): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



send():void;
	}

	export interface DseCombineSpiritDebrisMessage extends DseCombineSpiritDebris {
	add(key: string, value: any, noAssert?: boolean): DseCombineSpiritDebrisMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseCombineSpiritDebrisMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseCombineSpiritDebrisBuilder {
	new(data?: DseCombineSpiritDebris): DseCombineSpiritDebrisMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseCombineSpiritDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineSpiritDebrisMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseCombineSpiritDebrisMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseCombineSpiritDebrisMessage;
	decode64(str: string) : DseCombineSpiritDebrisMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseCombineSpiritDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineSpiritDebrisMessage;
	decodeDelimited(buffer: any, enc: string): DseCombineSpiritDebrisMessage;
	decodeDelimited(buffer: string, enc: string): DseCombineSpiritDebrisMessage;
	decodeHex(str: string): DseCombineSpiritDebrisMessage;
	decodeJSON(str: string): DseCombineSpiritDebrisMessage;
	
}

}


declare module protoTS {

	export class DecreeShop {

		

freetimes?: number;
		

getFreetimes?() : number;
		setFreetimes?(freetimes : number): void;
		



lastrefreshtime?: string;
		

getLastrefreshtime?() : string;
		setLastrefreshtime?(lastrefreshtime : string): void;
		



remainrefreshtimes?: number;
		

getRemainrefreshtimes?() : number;
		setRemainrefreshtimes?(remainrefreshtimes : number): void;
		



shoplist?: ShopUnit[];
		

getShoplist?() : ShopUnit[];
		setShoplist?(shoplist : ShopUnit[]): void;
		



send():void;
	}

	export interface DecreeShopMessage extends DecreeShop {
	add(key: string, value: any, noAssert?: boolean): DecreeShopMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DecreeShopMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DecreeShopBuilder {
	new(data?: DecreeShop): DecreeShopMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DecreeShopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DecreeShopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DecreeShopMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DecreeShopMessage;
	decode64(str: string) : DecreeShopMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DecreeShopMessage;
	decodeDelimited(buffer: any, enc: string): DecreeShopMessage;
	decodeDelimited(buffer: any, enc: string): DecreeShopMessage;
	decodeDelimited(buffer: string, enc: string): DecreeShopMessage;
	decodeHex(str: string): DecreeShopMessage;
	decodeJSON(str: string): DecreeShopMessage;
	
}

}


declare module protoTS {

	export class DseDecreeShopOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



index?: number;
		

getIndex?() : number;
		setIndex?(index : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



decreeshop?: DecreeShop;
		

getDecreeshop?() : DecreeShop;
		setDecreeshop?(decreeshop : DecreeShop): void;
		



send():void;
	}

	export interface DseDecreeShopOptMessage extends DseDecreeShopOpt {
	add(key: string, value: any, noAssert?: boolean): DseDecreeShopOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseDecreeShopOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseDecreeShopOptBuilder {
	new(data?: DseDecreeShopOpt): DseDecreeShopOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseDecreeShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseDecreeShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseDecreeShopOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseDecreeShopOptMessage;
	decode64(str: string) : DseDecreeShopOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseDecreeShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DseDecreeShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DseDecreeShopOptMessage;
	decodeDelimited(buffer: string, enc: string): DseDecreeShopOptMessage;
	decodeHex(str: string): DseDecreeShopOptMessage;
	decodeJSON(str: string): DseDecreeShopOptMessage;
	
}

}


declare module protoTS {

	export class DevilTowerData {

		

curlayer?: number;
		

getCurlayer?() : number;
		setCurlayer?(curlayer : number): void;
		



maxlayer?: number;
		

getMaxlayer?() : number;
		setMaxlayer?(maxlayer : number): void;
		



losetimes?: number;
		

getLosetimes?() : number;
		setLosetimes?(losetimes : number): void;
		



buychallenge?: number;
		

getBuychallenge?() : number;
		setBuychallenge?(buychallenge : number): void;
		



buyreset?: number;
		

getBuyreset?() : number;
		setBuyreset?(buyreset : number): void;
		



sweepstart?: string;
		

getSweepstart?() : string;
		setSweepstart?(sweepstart : string): void;
		



send():void;
	}

	export interface DevilTowerDataMessage extends DevilTowerData {
	add(key: string, value: any, noAssert?: boolean): DevilTowerDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DevilTowerDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DevilTowerDataBuilder {
	new(data?: DevilTowerData): DevilTowerDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DevilTowerDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DevilTowerDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DevilTowerDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DevilTowerDataMessage;
	decode64(str: string) : DevilTowerDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DevilTowerDataMessage;
	decodeDelimited(buffer: any, enc: string): DevilTowerDataMessage;
	decodeDelimited(buffer: any, enc: string): DevilTowerDataMessage;
	decodeDelimited(buffer: string, enc: string): DevilTowerDataMessage;
	decodeHex(str: string): DevilTowerDataMessage;
	decodeJSON(str: string): DevilTowerDataMessage;
	
}

}


declare module protoTS {

	export class DseDevilTowerOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



deviltower?: DevilTowerData;
		

getDeviltower?() : DevilTowerData;
		setDeviltower?(deviltower : DevilTowerData): void;
		



send():void;
	}

	export interface DseDevilTowerOptMessage extends DseDevilTowerOpt {
	add(key: string, value: any, noAssert?: boolean): DseDevilTowerOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseDevilTowerOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseDevilTowerOptBuilder {
	new(data?: DseDevilTowerOpt): DseDevilTowerOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseDevilTowerOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseDevilTowerOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseDevilTowerOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseDevilTowerOptMessage;
	decode64(str: string) : DseDevilTowerOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseDevilTowerOptMessage;
	decodeDelimited(buffer: any, enc: string): DseDevilTowerOptMessage;
	decodeDelimited(buffer: any, enc: string): DseDevilTowerOptMessage;
	decodeDelimited(buffer: string, enc: string): DseDevilTowerOptMessage;
	decodeHex(str: string): DseDevilTowerOptMessage;
	decodeJSON(str: string): DseDevilTowerOptMessage;
	
}

}


declare module protoTS {

	export class DseEquipmentDebrisList {

		

items?: MItem[];
		

getItems?() : MItem[];
		setItems?(items : MItem[]): void;
		



send():void;
	}

	export interface DseEquipmentDebrisListMessage extends DseEquipmentDebrisList {
	add(key: string, value: any, noAssert?: boolean): DseEquipmentDebrisListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseEquipmentDebrisListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseEquipmentDebrisListBuilder {
	new(data?: DseEquipmentDebrisList): DseEquipmentDebrisListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseEquipmentDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentDebrisListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseEquipmentDebrisListMessage;
	decode64(str: string) : DseEquipmentDebrisListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseEquipmentDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentDebrisListMessage;
	decodeDelimited(buffer: string, enc: string): DseEquipmentDebrisListMessage;
	decodeHex(str: string): DseEquipmentDebrisListMessage;
	decodeJSON(str: string): DseEquipmentDebrisListMessage;
	
}

}


declare module protoTS {

	export class DseEquipmentEnhance {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseEquipmentEnhanceMessage extends DseEquipmentEnhance {
	add(key: string, value: any, noAssert?: boolean): DseEquipmentEnhanceMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseEquipmentEnhanceMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseEquipmentEnhanceBuilder {
	new(data?: DseEquipmentEnhance): DseEquipmentEnhanceMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseEquipmentEnhanceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentEnhanceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentEnhanceMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseEquipmentEnhanceMessage;
	decode64(str: string) : DseEquipmentEnhanceMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseEquipmentEnhanceMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentEnhanceMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentEnhanceMessage;
	decodeDelimited(buffer: string, enc: string): DseEquipmentEnhanceMessage;
	decodeHex(str: string): DseEquipmentEnhanceMessage;
	decodeJSON(str: string): DseEquipmentEnhanceMessage;
	
}

}


declare module protoTS {

	export class DseEquipmentGearUp {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseEquipmentGearUpMessage extends DseEquipmentGearUp {
	add(key: string, value: any, noAssert?: boolean): DseEquipmentGearUpMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseEquipmentGearUpMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseEquipmentGearUpBuilder {
	new(data?: DseEquipmentGearUp): DseEquipmentGearUpMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseEquipmentGearUpMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentGearUpMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentGearUpMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseEquipmentGearUpMessage;
	decode64(str: string) : DseEquipmentGearUpMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseEquipmentGearUpMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentGearUpMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentGearUpMessage;
	decodeDelimited(buffer: string, enc: string): DseEquipmentGearUpMessage;
	decodeHex(str: string): DseEquipmentGearUpMessage;
	decodeJSON(str: string): DseEquipmentGearUpMessage;
	
}

}


declare module protoTS {

	export class DseEquipmentRefine {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseEquipmentRefineMessage extends DseEquipmentRefine {
	add(key: string, value: any, noAssert?: boolean): DseEquipmentRefineMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseEquipmentRefineMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseEquipmentRefineBuilder {
	new(data?: DseEquipmentRefine): DseEquipmentRefineMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseEquipmentRefineMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentRefineMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseEquipmentRefineMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseEquipmentRefineMessage;
	decode64(str: string) : DseEquipmentRefineMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseEquipmentRefineMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentRefineMessage;
	decodeDelimited(buffer: any, enc: string): DseEquipmentRefineMessage;
	decodeDelimited(buffer: string, enc: string): DseEquipmentRefineMessage;
	decodeHex(str: string): DseEquipmentRefineMessage;
	decodeJSON(str: string): DseEquipmentRefineMessage;
	
}

}


declare module protoTS {

	export class SingleSoldier {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



equips?: EquipmentInfoLite[];
		

getEquips?() : EquipmentInfoLite[];
		setEquips?(equips : EquipmentInfoLite[]): void;
		



send():void;
	}

	export interface SingleSoldierMessage extends SingleSoldier {
	add(key: string, value: any, noAssert?: boolean): SingleSoldierMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): SingleSoldierMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface SingleSoldierBuilder {
	new(data?: SingleSoldier): SingleSoldierMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : SingleSoldierMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SingleSoldierMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SingleSoldierMessage;
	decode(buffer: string, length?: number | string, enc?: string) : SingleSoldierMessage;
	decode64(str: string) : SingleSoldierMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): SingleSoldierMessage;
	decodeDelimited(buffer: any, enc: string): SingleSoldierMessage;
	decodeDelimited(buffer: any, enc: string): SingleSoldierMessage;
	decodeDelimited(buffer: string, enc: string): SingleSoldierMessage;
	decodeHex(str: string): SingleSoldierMessage;
	decodeJSON(str: string): SingleSoldierMessage;
	
}

}


declare module protoTS {

	export class DseFormationInfo {

		

forms?: SingleSoldier[];
		

getForms?() : SingleSoldier[];
		setForms?(forms : SingleSoldier[]): void;
		



captain_pos?: number;
		

getCaptainPos?() : number;
		setCaptainPos?(captainPos : number): void;
		



send():void;
	}

	export interface DseFormationInfoMessage extends DseFormationInfo {
	add(key: string, value: any, noAssert?: boolean): DseFormationInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseFormationInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseFormationInfoBuilder {
	new(data?: DseFormationInfo): DseFormationInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseFormationInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseFormationInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseFormationInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseFormationInfoMessage;
	decode64(str: string) : DseFormationInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseFormationInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseFormationInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseFormationInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseFormationInfoMessage;
	decodeHex(str: string): DseFormationInfoMessage;
	decodeJSON(str: string): DseFormationInfoMessage;
	
}

}


declare module protoTS {

	export class DseHeartbeat {

		

time?: number;
		

getTime?() : number;
		setTime?(time : number): void;
		



send():void;
	}

	export interface DseHeartbeatMessage extends DseHeartbeat {
	add(key: string, value: any, noAssert?: boolean): DseHeartbeatMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseHeartbeatMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseHeartbeatBuilder {
	new(data?: DseHeartbeat): DseHeartbeatMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseHeartbeatMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseHeartbeatMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseHeartbeatMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseHeartbeatMessage;
	decode64(str: string) : DseHeartbeatMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseHeartbeatMessage;
	decodeDelimited(buffer: any, enc: string): DseHeartbeatMessage;
	decodeDelimited(buffer: any, enc: string): DseHeartbeatMessage;
	decodeDelimited(buffer: string, enc: string): DseHeartbeatMessage;
	decodeHex(str: string): DseHeartbeatMessage;
	decodeJSON(str: string): DseHeartbeatMessage;
	
}

}


declare module protoTS {

	export class InstituteItem {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



level?: number;
		

getLevel?() : number;
		setLevel?(level : number): void;
		



send():void;
	}

	export interface InstituteItemMessage extends InstituteItem {
	add(key: string, value: any, noAssert?: boolean): InstituteItemMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): InstituteItemMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface InstituteItemBuilder {
	new(data?: InstituteItem): InstituteItemMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : InstituteItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteItemMessage;
	decode(buffer: string, length?: number | string, enc?: string) : InstituteItemMessage;
	decode64(str: string) : InstituteItemMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): InstituteItemMessage;
	decodeDelimited(buffer: any, enc: string): InstituteItemMessage;
	decodeDelimited(buffer: any, enc: string): InstituteItemMessage;
	decodeDelimited(buffer: string, enc: string): InstituteItemMessage;
	decodeHex(str: string): InstituteItemMessage;
	decodeJSON(str: string): InstituteItemMessage;
	
}

}


declare module protoTS {

	export class InstituteList {

		

institutelist?: InstituteItem[];
		

getInstitutelist?() : InstituteItem[];
		setInstitutelist?(institutelist : InstituteItem[]): void;
		



send():void;
	}

	export interface InstituteListMessage extends InstituteList {
	add(key: string, value: any, noAssert?: boolean): InstituteListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): InstituteListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface InstituteListBuilder {
	new(data?: InstituteList): InstituteListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : InstituteListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : InstituteListMessage;
	decode64(str: string) : InstituteListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): InstituteListMessage;
	decodeDelimited(buffer: any, enc: string): InstituteListMessage;
	decodeDelimited(buffer: any, enc: string): InstituteListMessage;
	decodeDelimited(buffer: string, enc: string): InstituteListMessage;
	decodeHex(str: string): InstituteListMessage;
	decodeJSON(str: string): InstituteListMessage;
	
}

}


declare module protoTS {

	export class InstituteData {

		

allinstitute?: InstituteList[];
		

getAllinstitute?() : InstituteList[];
		setAllinstitute?(allinstitute : InstituteList[]): void;
		



instituteid?: number;
		

getInstituteid?() : number;
		setInstituteid?(instituteid : number): void;
		



finishtime?: string;
		

getFinishtime?() : string;
		setFinishtime?(finishtime : string): void;
		



freesec?: number;
		

getFreesec?() : number;
		setFreesec?(freesec : number): void;
		



send():void;
	}

	export interface InstituteDataMessage extends InstituteData {
	add(key: string, value: any, noAssert?: boolean): InstituteDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): InstituteDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface InstituteDataBuilder {
	new(data?: InstituteData): InstituteDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : InstituteDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : InstituteDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : InstituteDataMessage;
	decode64(str: string) : InstituteDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): InstituteDataMessage;
	decodeDelimited(buffer: any, enc: string): InstituteDataMessage;
	decodeDelimited(buffer: any, enc: string): InstituteDataMessage;
	decodeDelimited(buffer: string, enc: string): InstituteDataMessage;
	decodeHex(str: string): InstituteDataMessage;
	decodeJSON(str: string): InstituteDataMessage;
	
}

}


declare module protoTS {

	export class DseInstituteOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



instituteid?: number;
		

getInstituteid?() : number;
		setInstituteid?(instituteid : number): void;
		



institute?: InstituteData;
		

getInstitute?() : InstituteData;
		setInstitute?(institute : InstituteData): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



send():void;
	}

	export interface DseInstituteOptMessage extends DseInstituteOpt {
	add(key: string, value: any, noAssert?: boolean): DseInstituteOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseInstituteOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseInstituteOptBuilder {
	new(data?: DseInstituteOpt): DseInstituteOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseInstituteOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseInstituteOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseInstituteOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseInstituteOptMessage;
	decode64(str: string) : DseInstituteOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseInstituteOptMessage;
	decodeDelimited(buffer: any, enc: string): DseInstituteOptMessage;
	decodeDelimited(buffer: any, enc: string): DseInstituteOptMessage;
	decodeDelimited(buffer: string, enc: string): DseInstituteOptMessage;
	decodeHex(str: string): DseInstituteOptMessage;
	decodeJSON(str: string): DseInstituteOptMessage;
	
}

}


declare module protoTS {

	export class DseItemChange {

		

list?: MDropList;
		

getList?() : MDropList;
		setList?(list : MDropList): void;
		



source?: ItemSourceType;
		

getSource?() : ItemSourceType;
		setSource?(source : ItemSourceType): void;
		



send():void;
	}

	export interface DseItemChangeMessage extends DseItemChange {
	add(key: string, value: any, noAssert?: boolean): DseItemChangeMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseItemChangeMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseItemChangeBuilder {
	new(data?: DseItemChange): DseItemChangeMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseItemChangeMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseItemChangeMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseItemChangeMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseItemChangeMessage;
	decode64(str: string) : DseItemChangeMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseItemChangeMessage;
	decodeDelimited(buffer: any, enc: string): DseItemChangeMessage;
	decodeDelimited(buffer: any, enc: string): DseItemChangeMessage;
	decodeDelimited(buffer: string, enc: string): DseItemChangeMessage;
	decodeHex(str: string): DseItemChangeMessage;
	decodeJSON(str: string): DseItemChangeMessage;
	
}

}


declare module protoTS {

	export class ParamUnit {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



param?: string;
		

getParam?() : string;
		setParam?(param : string): void;
		



send():void;
	}

	export interface ParamUnitMessage extends ParamUnit {
	add(key: string, value: any, noAssert?: boolean): ParamUnitMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): ParamUnitMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface ParamUnitBuilder {
	new(data?: ParamUnit): ParamUnitMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : ParamUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ParamUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ParamUnitMessage;
	decode(buffer: string, length?: number | string, enc?: string) : ParamUnitMessage;
	decode64(str: string) : ParamUnitMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): ParamUnitMessage;
	decodeDelimited(buffer: any, enc: string): ParamUnitMessage;
	decodeDelimited(buffer: any, enc: string): ParamUnitMessage;
	decodeDelimited(buffer: string, enc: string): ParamUnitMessage;
	decodeHex(str: string): ParamUnitMessage;
	decodeJSON(str: string): ParamUnitMessage;
	
}

}


declare module protoTS {

	export class MailData {

		

id?: string;
		

getId?() : string;
		setId?(id : string): void;
		



createtime?: string;
		

getCreatetime?() : string;
		setCreatetime?(createtime : string): void;
		



title?: string;
		

getTitle?() : string;
		setTitle?(title : string): void;
		



content?: string;
		

getContent?() : string;
		setContent?(content : string): void;
		



name?: string;
		

getName?() : string;
		setName?(name : string): void;
		



uid?: string;
		

getUid?() : string;
		setUid?(uid : string): void;
		



paramlist?: ParamUnit[];
		

getParamlist?() : ParamUnit[];
		setParamlist?(paramlist : ParamUnit[]): void;
		



reward?: MDropList;
		

getReward?() : MDropList;
		setReward?(reward : MDropList): void;
		



isget?: boolean;
		

getIsget?() : boolean;
		setIsget?(isget : boolean): void;
		



isread?: boolean;
		

getIsread?() : boolean;
		setIsread?(isread : boolean): void;
		



send():void;
	}

	export interface MailDataMessage extends MailData {
	add(key: string, value: any, noAssert?: boolean): MailDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): MailDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface MailDataBuilder {
	new(data?: MailData): MailDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : MailDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MailDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MailDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : MailDataMessage;
	decode64(str: string) : MailDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): MailDataMessage;
	decodeDelimited(buffer: any, enc: string): MailDataMessage;
	decodeDelimited(buffer: any, enc: string): MailDataMessage;
	decodeDelimited(buffer: string, enc: string): MailDataMessage;
	decodeHex(str: string): MailDataMessage;
	decodeJSON(str: string): MailDataMessage;
	
}

}


declare module protoTS {

	export class DseMailOpt {

		

res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



mailtype?: number;
		

getMailtype?() : number;
		setMailtype?(mailtype : number): void;
		



maillist?: MailData[];
		

getMaillist?() : MailData[];
		setMaillist?(maillist : MailData[]): void;
		



newcounts?: number[];
		

getNewcounts?() : number[];
		setNewcounts?(newcounts : number[]): void;
		



send():void;
	}

	export interface DseMailOptMessage extends DseMailOpt {
	add(key: string, value: any, noAssert?: boolean): DseMailOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseMailOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseMailOptBuilder {
	new(data?: DseMailOpt): DseMailOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseMailOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseMailOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseMailOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseMailOptMessage;
	decode64(str: string) : DseMailOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseMailOptMessage;
	decodeDelimited(buffer: any, enc: string): DseMailOptMessage;
	decodeDelimited(buffer: any, enc: string): DseMailOptMessage;
	decodeDelimited(buffer: string, enc: string): DseMailOptMessage;
	decodeHex(str: string): DseMailOptMessage;
	decodeJSON(str: string): DseMailOptMessage;
	
}

}


declare module protoTS {

	export class DseMainScreenReady {

		

send():void;
	}

	export interface DseMainScreenReadyMessage extends DseMainScreenReady {
	add(key: string, value: any, noAssert?: boolean): DseMainScreenReadyMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseMainScreenReadyMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseMainScreenReadyBuilder {
	new(data?: DseMainScreenReady): DseMainScreenReadyMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseMainScreenReadyMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseMainScreenReadyMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseMainScreenReadyMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseMainScreenReadyMessage;
	decode64(str: string) : DseMainScreenReadyMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseMainScreenReadyMessage;
	decodeDelimited(buffer: any, enc: string): DseMainScreenReadyMessage;
	decodeDelimited(buffer: any, enc: string): DseMainScreenReadyMessage;
	decodeDelimited(buffer: string, enc: string): DseMainScreenReadyMessage;
	decodeHex(str: string): DseMainScreenReadyMessage;
	decodeJSON(str: string): DseMainScreenReadyMessage;
	
}

}


declare module protoTS {

	export class DseReformInfo {

		

spiritid?: number;
		

getSpiritid?() : number;
		setSpiritid?(spiritid : number): void;
		



endtime?: string;
		

getEndtime?() : string;
		setEndtime?(endtime : string): void;
		



interval?: number;
		

getInterval?() : number;
		setInterval?(interval : number): void;
		



costnum?: number;
		

getCostnum?() : number;
		setCostnum?(costnum : number): void;
		



send():void;
	}

	export interface DseReformInfoMessage extends DseReformInfo {
	add(key: string, value: any, noAssert?: boolean): DseReformInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseReformInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseReformInfoBuilder {
	new(data?: DseReformInfo): DseReformInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseReformInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseReformInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseReformInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseReformInfoMessage;
	decode64(str: string) : DseReformInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseReformInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseReformInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseReformInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseReformInfoMessage;
	decodeHex(str: string): DseReformInfoMessage;
	decodeJSON(str: string): DseReformInfoMessage;
	
}

}


declare module protoTS {

	export class DseResetLeaderResult {

		

result?: number;
		

getResult?() : number;
		setResult?(result : number): void;
		



send():void;
	}

	export interface DseResetLeaderResultMessage extends DseResetLeaderResult {
	add(key: string, value: any, noAssert?: boolean): DseResetLeaderResultMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseResetLeaderResultMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseResetLeaderResultBuilder {
	new(data?: DseResetLeaderResult): DseResetLeaderResultMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseResetLeaderResultMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseResetLeaderResultMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseResetLeaderResultMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseResetLeaderResultMessage;
	decode64(str: string) : DseResetLeaderResultMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseResetLeaderResultMessage;
	decodeDelimited(buffer: any, enc: string): DseResetLeaderResultMessage;
	decodeDelimited(buffer: any, enc: string): DseResetLeaderResultMessage;
	decodeDelimited(buffer: string, enc: string): DseResetLeaderResultMessage;
	decodeHex(str: string): DseResetLeaderResultMessage;
	decodeJSON(str: string): DseResetLeaderResultMessage;
	
}

}


declare module protoTS {

	export class DseShopOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



shopid?: number;
		

getShopid?() : number;
		setShopid?(shopid : number): void;
		



count?: number;
		

getCount?() : number;
		setCount?(count : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



buylist?: ShopUnit[];
		

getBuylist?() : ShopUnit[];
		setBuylist?(buylist : ShopUnit[]): void;
		



send():void;
	}

	export interface DseShopOptMessage extends DseShopOpt {
	add(key: string, value: any, noAssert?: boolean): DseShopOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseShopOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseShopOptBuilder {
	new(data?: DseShopOpt): DseShopOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseShopOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseShopOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseShopOptMessage;
	decode64(str: string) : DseShopOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DseShopOptMessage;
	decodeDelimited(buffer: any, enc: string): DseShopOptMessage;
	decodeDelimited(buffer: string, enc: string): DseShopOptMessage;
	decodeHex(str: string): DseShopOptMessage;
	decodeJSON(str: string): DseShopOptMessage;
	
}

}


declare module protoTS {

	export class DseSingleSpiritInfo {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



maxhp?: number;
		

getMaxhp?() : number;
		setMaxhp?(maxhp : number): void;
		



attack?: number;
		

getAttack?() : number;
		setAttack?(attack : number): void;
		



defence?: number;
		

getDefence?() : number;
		setDefence?(defence : number): void;
		



speed?: number;
		

getSpeed?() : number;
		setSpeed?(speed : number): void;
		



isCaptain?: boolean;
		

getIsCaptain?() : boolean;
		setIsCaptain?(isCaptain : boolean): void;
		



level?: number;
		

getLevel?() : number;
		setLevel?(level : number): void;
		



reformed?: number;
		

getReformed?() : number;
		setReformed?(reformed : number): void;
		



breakthrough?: number;
		

getBreakthrough?() : number;
		setBreakthrough?(breakthrough : number): void;
		



upgraded?: number;
		

getUpgraded?() : number;
		setUpgraded?(upgraded : number): void;
		



awakened?: number;
		

getAwakened?() : number;
		setAwakened?(awakened : number): void;
		



talent?: number;
		

getTalent?() : number;
		setTalent?(talent : number): void;
		



power?: number;
		

getPower?() : number;
		setPower?(power : number): void;
		



exp?: number;
		

getExp?() : number;
		setExp?(exp : number): void;
		



skin?: number;
		

getSkin?() : number;
		setSkin?(skin : number): void;
		



skin_unlocked?: number[];
		

getSkinUnlocked?() : number[];
		setSkinUnlocked?(skinUnlocked : number[]): void;
		



send():void;
	}

	export interface DseSingleSpiritInfoMessage extends DseSingleSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DseSingleSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSingleSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSingleSpiritInfoBuilder {
	new(data?: DseSingleSpiritInfo): DseSingleSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSingleSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSingleSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSingleSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSingleSpiritInfoMessage;
	decode64(str: string) : DseSingleSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSingleSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseSingleSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseSingleSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseSingleSpiritInfoMessage;
	decodeHex(str: string): DseSingleSpiritInfoMessage;
	decodeJSON(str: string): DseSingleSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DseSpiritDebrisList {

		

items?: MItem[];
		

getItems?() : MItem[];
		setItems?(items : MItem[]): void;
		



send():void;
	}

	export interface DseSpiritDebrisListMessage extends DseSpiritDebrisList {
	add(key: string, value: any, noAssert?: boolean): DseSpiritDebrisListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSpiritDebrisListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSpiritDebrisListBuilder {
	new(data?: DseSpiritDebrisList): DseSpiritDebrisListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSpiritDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritDebrisListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritDebrisListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSpiritDebrisListMessage;
	decode64(str: string) : DseSpiritDebrisListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSpiritDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritDebrisListMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritDebrisListMessage;
	decodeDelimited(buffer: string, enc: string): DseSpiritDebrisListMessage;
	decodeHex(str: string): DseSpiritDebrisListMessage;
	decodeJSON(str: string): DseSpiritDebrisListMessage;
	
}

}


declare module protoTS {

	export class DseSpiritDevelop {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



action?: number;
		

getAction?() : number;
		setAction?(action : number): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseSpiritDevelopMessage extends DseSpiritDevelop {
	add(key: string, value: any, noAssert?: boolean): DseSpiritDevelopMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSpiritDevelopMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSpiritDevelopBuilder {
	new(data?: DseSpiritDevelop): DseSpiritDevelopMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSpiritDevelopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritDevelopMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritDevelopMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSpiritDevelopMessage;
	decode64(str: string) : DseSpiritDevelopMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSpiritDevelopMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritDevelopMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritDevelopMessage;
	decodeDelimited(buffer: string, enc: string): DseSpiritDevelopMessage;
	decodeHex(str: string): DseSpiritDevelopMessage;
	decodeJSON(str: string): DseSpiritDevelopMessage;
	
}

}


declare module protoTS {

	export class DseSpiritInfo {

		

spirits?: SpiritInfoLite[];
		

getSpirits?() : SpiritInfoLite[];
		setSpirits?(spirits : SpiritInfoLite[]): void;
		



info?: DseSingleSpiritInfo;
		

getInfo?() : DseSingleSpiritInfo;
		setInfo?(info : DseSingleSpiritInfo): void;
		



send():void;
	}

	export interface DseSpiritInfoMessage extends DseSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DseSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSpiritInfoBuilder {
	new(data?: DseSpiritInfo): DseSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSpiritInfoMessage;
	decode64(str: string) : DseSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseSpiritInfoMessage;
	decodeHex(str: string): DseSpiritInfoMessage;
	decodeJSON(str: string): DseSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DseStageAward {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



chapterid?: number;
		

getChapterid?() : number;
		setChapterid?(chapterid : number): void;
		



sceneid?: number;
		

getSceneid?() : number;
		setSceneid?(sceneid : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



send():void;
	}

	export interface DseStageAwardMessage extends DseStageAward {
	add(key: string, value: any, noAssert?: boolean): DseStageAwardMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseStageAwardMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseStageAwardBuilder {
	new(data?: DseStageAward): DseStageAwardMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseStageAwardMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageAwardMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageAwardMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseStageAwardMessage;
	decode64(str: string) : DseStageAwardMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseStageAwardMessage;
	decodeDelimited(buffer: any, enc: string): DseStageAwardMessage;
	decodeDelimited(buffer: any, enc: string): DseStageAwardMessage;
	decodeDelimited(buffer: string, enc: string): DseStageAwardMessage;
	decodeHex(str: string): DseStageAwardMessage;
	decodeJSON(str: string): DseStageAwardMessage;
	
}

}


declare module protoTS {

	export class ExploreData {

		

starttime?: string;
		

getStarttime?() : string;
		setStarttime?(starttime : string): void;
		



maxendtime?: string;
		

getMaxendtime?() : string;
		setMaxendtime?(maxendtime : string): void;
		



totalgold?: number;
		

getTotalgold?() : number;
		setTotalgold?(totalgold : number): void;
		



totalexp?: number;
		

getTotalexp?() : number;
		setTotalexp?(totalexp : number): void;
		



interval?: number;
		

getInterval?() : number;
		setInterval?(interval : number): void;
		



goldonce?: number;
		

getGoldonce?() : number;
		setGoldonce?(goldonce : number): void;
		



exponce?: number;
		

getExponce?() : number;
		setExponce?(exponce : number): void;
		



havedrop?: boolean;
		

getHavedrop?() : boolean;
		setHavedrop?(havedrop : boolean): void;
		



send():void;
	}

	export interface ExploreDataMessage extends ExploreData {
	add(key: string, value: any, noAssert?: boolean): ExploreDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): ExploreDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface ExploreDataBuilder {
	new(data?: ExploreData): ExploreDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : ExploreDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ExploreDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ExploreDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : ExploreDataMessage;
	decode64(str: string) : ExploreDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): ExploreDataMessage;
	decodeDelimited(buffer: any, enc: string): ExploreDataMessage;
	decodeDelimited(buffer: any, enc: string): ExploreDataMessage;
	decodeDelimited(buffer: string, enc: string): ExploreDataMessage;
	decodeHex(str: string): ExploreDataMessage;
	decodeJSON(str: string): ExploreDataMessage;
	
}

}


declare module protoTS {

	export class DseStageExplore {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



info?: ExploreData;
		

getInfo?() : ExploreData;
		setInfo?(info : ExploreData): void;
		



gold?: number;
		

getGold?() : number;
		setGold?(gold : number): void;
		



exp?: number;
		

getExp?() : number;
		setExp?(exp : number): void;
		



droplist?: MDropList;
		

getDroplist?() : MDropList;
		setDroplist?(droplist : MDropList): void;
		



send():void;
	}

	export interface DseStageExploreMessage extends DseStageExplore {
	add(key: string, value: any, noAssert?: boolean): DseStageExploreMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseStageExploreMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseStageExploreBuilder {
	new(data?: DseStageExplore): DseStageExploreMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseStageExploreMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageExploreMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageExploreMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseStageExploreMessage;
	decode64(str: string) : DseStageExploreMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseStageExploreMessage;
	decodeDelimited(buffer: any, enc: string): DseStageExploreMessage;
	decodeDelimited(buffer: any, enc: string): DseStageExploreMessage;
	decodeDelimited(buffer: string, enc: string): DseStageExploreMessage;
	decodeHex(str: string): DseStageExploreMessage;
	decodeJSON(str: string): DseStageExploreMessage;
	
}

}


declare module protoTS {

	export class ChapterInfo {

		

chapterid?: number;
		

getChapterid?() : number;
		setChapterid?(chapterid : number): void;
		



nextstageid?: number;
		

getNextstageid?() : number;
		setNextstageid?(nextstageid : number): void;
		



isaward?: boolean;
		

getIsaward?() : boolean;
		setIsaward?(isaward : boolean): void;
		



scenelist?: ChildInfo[];
		

getScenelist?() : ChildInfo[];
		setScenelist?(scenelist : ChildInfo[]): void;
		



lastjuniorstageid?: number;
		

getLastjuniorstageid?() : number;
		setLastjuniorstageid?(lastjuniorstageid : number): void;
		



send():void;
	}

	export interface ChapterInfoMessage extends ChapterInfo {
	add(key: string, value: any, noAssert?: boolean): ChapterInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): ChapterInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface ChapterInfoBuilder {
	new(data?: ChapterInfo): ChapterInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : ChapterInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ChapterInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ChapterInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : ChapterInfoMessage;
	decode64(str: string) : ChapterInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): ChapterInfoMessage;
	decodeDelimited(buffer: any, enc: string): ChapterInfoMessage;
	decodeDelimited(buffer: any, enc: string): ChapterInfoMessage;
	decodeDelimited(buffer: string, enc: string): ChapterInfoMessage;
	decodeHex(str: string): ChapterInfoMessage;
	decodeJSON(str: string): ChapterInfoMessage;
	
}

}


declare module protoTS {

	export class ChildInfo {

		

sceneid?: number;
		

getSceneid?() : number;
		setSceneid?(sceneid : number): void;
		



scenestar?: number;
		

getScenestar?() : number;
		setScenestar?(scenestar : number): void;
		



isaward?: boolean;
		

getIsaward?() : boolean;
		setIsaward?(isaward : boolean): void;
		



stagelist?: StageData[];
		

getStagelist?() : StageData[];
		setStagelist?(stagelist : StageData[]): void;
		



send():void;
	}

	export interface ChildInfoMessage extends ChildInfo {
	add(key: string, value: any, noAssert?: boolean): ChildInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): ChildInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface ChildInfoBuilder {
	new(data?: ChildInfo): ChildInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : ChildInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ChildInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ChildInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : ChildInfoMessage;
	decode64(str: string) : ChildInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): ChildInfoMessage;
	decodeDelimited(buffer: any, enc: string): ChildInfoMessage;
	decodeDelimited(buffer: any, enc: string): ChildInfoMessage;
	decodeDelimited(buffer: string, enc: string): ChildInfoMessage;
	decodeHex(str: string): ChildInfoMessage;
	decodeJSON(str: string): ChildInfoMessage;
	
}

}


declare module protoTS {

	export class DseStageInfo {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



chapterinfo?: ChapterInfo;
		

getChapterinfo?() : ChapterInfo;
		setChapterinfo?(chapterinfo : ChapterInfo): void;
		



send():void;
	}

	export interface DseStageInfoMessage extends DseStageInfo {
	add(key: string, value: any, noAssert?: boolean): DseStageInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseStageInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseStageInfoBuilder {
	new(data?: DseStageInfo): DseStageInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseStageInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseStageInfoMessage;
	decode64(str: string) : DseStageInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseStageInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseStageInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseStageInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseStageInfoMessage;
	decodeHex(str: string): DseStageInfoMessage;
	decodeJSON(str: string): DseStageInfoMessage;
	
}

}


declare module protoTS {

	export class DseStageReset {

		

res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



send():void;
	}

	export interface DseStageResetMessage extends DseStageReset {
	add(key: string, value: any, noAssert?: boolean): DseStageResetMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseStageResetMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseStageResetBuilder {
	new(data?: DseStageReset): DseStageResetMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseStageResetMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageResetMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStageResetMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseStageResetMessage;
	decode64(str: string) : DseStageResetMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseStageResetMessage;
	decodeDelimited(buffer: any, enc: string): DseStageResetMessage;
	decodeDelimited(buffer: any, enc: string): DseStageResetMessage;
	decodeDelimited(buffer: string, enc: string): DseStageResetMessage;
	decodeHex(str: string): DseStageResetMessage;
	decodeJSON(str: string): DseStageResetMessage;
	
}

}


declare module protoTS {

	export class DseStorageList {

		

type?: StorageType;
		

getType?() : StorageType;
		setType?(type : StorageType): void;
		



items?: MItem[];
		

getItems?() : MItem[];
		setItems?(items : MItem[]): void;
		



send():void;
	}

	export interface DseStorageListMessage extends DseStorageList {
	add(key: string, value: any, noAssert?: boolean): DseStorageListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseStorageListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseStorageListBuilder {
	new(data?: DseStorageList): DseStorageListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseStorageListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStorageListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseStorageListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseStorageListMessage;
	decode64(str: string) : DseStorageListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseStorageListMessage;
	decodeDelimited(buffer: any, enc: string): DseStorageListMessage;
	decodeDelimited(buffer: any, enc: string): DseStorageListMessage;
	decodeDelimited(buffer: string, enc: string): DseStorageListMessage;
	decodeHex(str: string): DseStorageListMessage;
	decodeJSON(str: string): DseStorageListMessage;
	
}

}


declare module protoTS {

	export class DseSummon {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



mode?: number;
		

getMode?() : number;
		setMode?(mode : number): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



list?: MDropList;
		

getList?() : MDropList;
		setList?(list : MDropList): void;
		



send():void;
	}

	export interface DseSummonMessage extends DseSummon {
	add(key: string, value: any, noAssert?: boolean): DseSummonMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSummonMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSummonBuilder {
	new(data?: DseSummon): DseSummonMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSummonMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSummonMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSummonMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSummonMessage;
	decode64(str: string) : DseSummonMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSummonMessage;
	decodeDelimited(buffer: any, enc: string): DseSummonMessage;
	decodeDelimited(buffer: any, enc: string): DseSummonMessage;
	decodeDelimited(buffer: string, enc: string): DseSummonMessage;
	decodeHex(str: string): DseSummonMessage;
	decodeJSON(str: string): DseSummonMessage;
	
}

}


declare module protoTS {

	export class SummonPool {

		

id?: number;
		

getId?() : number;
		setId?(id : number): void;
		



free_used?: number;
		

getFreeUsed?() : number;
		setFreeUsed?(freeUsed : number): void;
		



next_free?: string;
		

getNextFree?() : string;
		setNextFree?(nextFree : string): void;
		



send():void;
	}

	export interface SummonPoolMessage extends SummonPool {
	add(key: string, value: any, noAssert?: boolean): SummonPoolMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): SummonPoolMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface SummonPoolBuilder {
	new(data?: SummonPool): SummonPoolMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : SummonPoolMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SummonPoolMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SummonPoolMessage;
	decode(buffer: string, length?: number | string, enc?: string) : SummonPoolMessage;
	decode64(str: string) : SummonPoolMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): SummonPoolMessage;
	decodeDelimited(buffer: any, enc: string): SummonPoolMessage;
	decodeDelimited(buffer: any, enc: string): SummonPoolMessage;
	decodeDelimited(buffer: string, enc: string): SummonPoolMessage;
	decodeHex(str: string): SummonPoolMessage;
	decodeJSON(str: string): SummonPoolMessage;
	
}

}


declare module protoTS {

	export class DseSummonInterface {

		

pools?: SummonPool[];
		

getPools?() : SummonPool[];
		setPools?(pools : SummonPool[]): void;
		



send():void;
	}

	export interface DseSummonInterfaceMessage extends DseSummonInterface {
	add(key: string, value: any, noAssert?: boolean): DseSummonInterfaceMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSummonInterfaceMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSummonInterfaceBuilder {
	new(data?: DseSummonInterface): DseSummonInterfaceMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSummonInterfaceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSummonInterfaceMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSummonInterfaceMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSummonInterfaceMessage;
	decode64(str: string) : DseSummonInterfaceMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSummonInterfaceMessage;
	decodeDelimited(buffer: any, enc: string): DseSummonInterfaceMessage;
	decodeDelimited(buffer: any, enc: string): DseSummonInterfaceMessage;
	decodeDelimited(buffer: string, enc: string): DseSummonInterfaceMessage;
	decodeHex(str: string): DseSummonInterfaceMessage;
	decodeJSON(str: string): DseSummonInterfaceMessage;
	
}

}


declare module protoTS {

	export class DseSwitchFormation {

		

code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



send():void;
	}

	export interface DseSwitchFormationMessage extends DseSwitchFormation {
	add(key: string, value: any, noAssert?: boolean): DseSwitchFormationMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseSwitchFormationMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseSwitchFormationBuilder {
	new(data?: DseSwitchFormation): DseSwitchFormationMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseSwitchFormationMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSwitchFormationMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseSwitchFormationMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseSwitchFormationMessage;
	decode64(str: string) : DseSwitchFormationMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseSwitchFormationMessage;
	decodeDelimited(buffer: any, enc: string): DseSwitchFormationMessage;
	decodeDelimited(buffer: any, enc: string): DseSwitchFormationMessage;
	decodeDelimited(buffer: string, enc: string): DseSwitchFormationMessage;
	decodeHex(str: string): DseSwitchFormationMessage;
	decodeJSON(str: string): DseSwitchFormationMessage;
	
}

}


declare module protoTS {

	export class TownPatrolInfo {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



patrolspells?: number;
		

getPatrolspells?() : number;
		setPatrolspells?(patrolspells : number): void;
		



lastrecovertime?: string;
		

getLastrecovertime?() : string;
		setLastrecovertime?(lastrecovertime : string): void;
		



isbuy?: boolean;
		

getIsbuy?() : boolean;
		setIsbuy?(isbuy : boolean): void;
		



slatelist?: number[];
		

getSlatelist?() : number[];
		setSlatelist?(slatelist : number[]): void;
		



canguess?: boolean;
		

getCanguess?() : boolean;
		setCanguess?(canguess : boolean): void;
		



canhoeing?: boolean;
		

getCanhoeing?() : boolean;
		setCanhoeing?(canhoeing : boolean): void;
		



finishtimes?: number;
		

getFinishtimes?() : number;
		setFinishtimes?(finishtimes : number): void;
		



finishreward?: number[];
		

getFinishreward?() : number[];
		setFinishreward?(finishreward : number[]): void;
		



send():void;
	}

	export interface TownPatrolInfoMessage extends TownPatrolInfo {
	add(key: string, value: any, noAssert?: boolean): TownPatrolInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): TownPatrolInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface TownPatrolInfoBuilder {
	new(data?: TownPatrolInfo): TownPatrolInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : TownPatrolInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TownPatrolInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TownPatrolInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : TownPatrolInfoMessage;
	decode64(str: string) : TownPatrolInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): TownPatrolInfoMessage;
	decodeDelimited(buffer: any, enc: string): TownPatrolInfoMessage;
	decodeDelimited(buffer: any, enc: string): TownPatrolInfoMessage;
	decodeDelimited(buffer: string, enc: string): TownPatrolInfoMessage;
	decodeHex(str: string): TownPatrolInfoMessage;
	decodeJSON(str: string): TownPatrolInfoMessage;
	
}

}


declare module protoTS {

	export class TownPatrolOneMove {

		

slatenum?: number;
		

getSlatenum?() : number;
		setSlatenum?(slatenum : number): void;
		



eventtype?: number;
		

getEventtype?() : number;
		setEventtype?(eventtype : number): void;
		



droplist?: MDropList;
		

getDroplist?() : MDropList;
		setDroplist?(droplist : MDropList): void;
		



farmland?: MDropList;
		

getFarmland?() : MDropList;
		setFarmland?(farmland : MDropList): void;
		



getgold?: number;
		

getGetgold?() : number;
		setGetgold?(getgold : number): void;
		



send():void;
	}

	export interface TownPatrolOneMoveMessage extends TownPatrolOneMove {
	add(key: string, value: any, noAssert?: boolean): TownPatrolOneMoveMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): TownPatrolOneMoveMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface TownPatrolOneMoveBuilder {
	new(data?: TownPatrolOneMove): TownPatrolOneMoveMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : TownPatrolOneMoveMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TownPatrolOneMoveMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TownPatrolOneMoveMessage;
	decode(buffer: string, length?: number | string, enc?: string) : TownPatrolOneMoveMessage;
	decode64(str: string) : TownPatrolOneMoveMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): TownPatrolOneMoveMessage;
	decodeDelimited(buffer: any, enc: string): TownPatrolOneMoveMessage;
	decodeDelimited(buffer: any, enc: string): TownPatrolOneMoveMessage;
	decodeDelimited(buffer: string, enc: string): TownPatrolOneMoveMessage;
	decodeHex(str: string): TownPatrolOneMoveMessage;
	decodeJSON(str: string): TownPatrolOneMoveMessage;
	
}

}


declare module protoTS {

	export class DseTownPatrolOpt {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



res?: number;
		

getRes?() : number;
		setRes?(res : number): void;
		



param?: number;
		

getParam?() : number;
		setParam?(param : number): void;
		



guessres?: number;
		

getGuessres?() : number;
		setGuessres?(guessres : number): void;
		



optiondroplist?: MDropList;
		

getOptiondroplist?() : MDropList;
		setOptiondroplist?(optiondroplist : MDropList): void;
		



movelist?: TownPatrolOneMove[];
		

getMovelist?() : TownPatrolOneMove[];
		setMovelist?(movelist : TownPatrolOneMove[]): void;
		



patrolinfo?: TownPatrolInfo;
		

getPatrolinfo?() : TownPatrolInfo;
		setPatrolinfo?(patrolinfo : TownPatrolInfo): void;
		



send():void;
	}

	export interface DseTownPatrolOptMessage extends DseTownPatrolOpt {
	add(key: string, value: any, noAssert?: boolean): DseTownPatrolOptMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseTownPatrolOptMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseTownPatrolOptBuilder {
	new(data?: DseTownPatrolOpt): DseTownPatrolOptMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseTownPatrolOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseTownPatrolOptMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseTownPatrolOptMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseTownPatrolOptMessage;
	decode64(str: string) : DseTownPatrolOptMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseTownPatrolOptMessage;
	decodeDelimited(buffer: any, enc: string): DseTownPatrolOptMessage;
	decodeDelimited(buffer: any, enc: string): DseTownPatrolOptMessage;
	decodeDelimited(buffer: string, enc: string): DseTownPatrolOptMessage;
	decodeHex(str: string): DseTownPatrolOptMessage;
	decodeJSON(str: string): DseTownPatrolOptMessage;
	
}

}


declare module protoTS {

	export class DseUpdateEquipmentInfo {

		

infos?: EquipmentInfo[];
		

getInfos?() : EquipmentInfo[];
		setInfos?(infos : EquipmentInfo[]): void;
		



send():void;
	}

	export interface DseUpdateEquipmentInfoMessage extends DseUpdateEquipmentInfo {
	add(key: string, value: any, noAssert?: boolean): DseUpdateEquipmentInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUpdateEquipmentInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUpdateEquipmentInfoBuilder {
	new(data?: DseUpdateEquipmentInfo): DseUpdateEquipmentInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUpdateEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateEquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateEquipmentInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUpdateEquipmentInfoMessage;
	decode64(str: string) : DseUpdateEquipmentInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUpdateEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateEquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateEquipmentInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseUpdateEquipmentInfoMessage;
	decodeHex(str: string): DseUpdateEquipmentInfoMessage;
	decodeJSON(str: string): DseUpdateEquipmentInfoMessage;
	
}

}


declare module protoTS {

	export class DseUpdateSpiritInfo {

		

soldiers?: DseSingleSpiritInfo[];
		

getSoldiers?() : DseSingleSpiritInfo[];
		setSoldiers?(soldiers : DseSingleSpiritInfo[]): void;
		



send():void;
	}

	export interface DseUpdateSpiritInfoMessage extends DseUpdateSpiritInfo {
	add(key: string, value: any, noAssert?: boolean): DseUpdateSpiritInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUpdateSpiritInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUpdateSpiritInfoBuilder {
	new(data?: DseUpdateSpiritInfo): DseUpdateSpiritInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUpdateSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateSpiritInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateSpiritInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUpdateSpiritInfoMessage;
	decode64(str: string) : DseUpdateSpiritInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUpdateSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateSpiritInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateSpiritInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseUpdateSpiritInfoMessage;
	decodeHex(str: string): DseUpdateSpiritInfoMessage;
	decodeJSON(str: string): DseUpdateSpiritInfoMessage;
	
}

}


declare module protoTS {

	export class DseUpdateStage {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



stagelist?: StageData[];
		

getStagelist?() : StageData[];
		setStagelist?(stagelist : StageData[]): void;
		



send():void;
	}

	export interface DseUpdateStageMessage extends DseUpdateStage {
	add(key: string, value: any, noAssert?: boolean): DseUpdateStageMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUpdateStageMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUpdateStageBuilder {
	new(data?: DseUpdateStage): DseUpdateStageMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUpdateStageMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateStageMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUpdateStageMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUpdateStageMessage;
	decode64(str: string) : DseUpdateStageMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUpdateStageMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateStageMessage;
	decodeDelimited(buffer: any, enc: string): DseUpdateStageMessage;
	decodeDelimited(buffer: string, enc: string): DseUpdateStageMessage;
	decodeHex(str: string): DseUpdateStageMessage;
	decodeJSON(str: string): DseUpdateStageMessage;
	
}

}


declare module protoTS {

	export class DseUseExpItemResult {

		

result?: number;
		

getResult?() : number;
		setResult?(result : number): void;
		



send():void;
	}

	export interface DseUseExpItemResultMessage extends DseUseExpItemResult {
	add(key: string, value: any, noAssert?: boolean): DseUseExpItemResultMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUseExpItemResultMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUseExpItemResultBuilder {
	new(data?: DseUseExpItemResult): DseUseExpItemResultMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUseExpItemResultMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUseExpItemResultMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUseExpItemResultMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUseExpItemResultMessage;
	decode64(str: string) : DseUseExpItemResultMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUseExpItemResultMessage;
	decodeDelimited(buffer: any, enc: string): DseUseExpItemResultMessage;
	decodeDelimited(buffer: any, enc: string): DseUseExpItemResultMessage;
	decodeDelimited(buffer: string, enc: string): DseUseExpItemResultMessage;
	decodeHex(str: string): DseUseExpItemResultMessage;
	decodeJSON(str: string): DseUseExpItemResultMessage;
	
}

}


declare module protoTS {

	export class DseUseItem {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



amount?: number;
		

getAmount?() : number;
		setAmount?(amount : number): void;
		



code?: number;
		

getCode?() : number;
		setCode?(code : number): void;
		



list?: MDropList;
		

getList?() : MDropList;
		setList?(list : MDropList): void;
		



msgType?: number;
		

getMsgType?() : number;
		setMsgType?(msgType : number): void;
		



send():void;
	}

	export interface DseUseItemMessage extends DseUseItem {
	add(key: string, value: any, noAssert?: boolean): DseUseItemMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUseItemMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUseItemBuilder {
	new(data?: DseUseItem): DseUseItemMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUseItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUseItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUseItemMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUseItemMessage;
	decode64(str: string) : DseUseItemMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUseItemMessage;
	decodeDelimited(buffer: any, enc: string): DseUseItemMessage;
	decodeDelimited(buffer: any, enc: string): DseUseItemMessage;
	decodeDelimited(buffer: string, enc: string): DseUseItemMessage;
	decodeHex(str: string): DseUseItemMessage;
	decodeJSON(str: string): DseUseItemMessage;
	
}

}


declare module protoTS {

	export class PlayerBaseInfo {

		

name?: string;
		

getName?() : string;
		setName?(name : string): void;
		



level?: number;
		

getLevel?() : number;
		setLevel?(level : number): void;
		



exp?: number;
		

getExp?() : number;
		setExp?(exp : number): void;
		



vipLevel?: number;
		

getVipLevel?() : number;
		setVipLevel?(vipLevel : number): void;
		



totalbuy?: number;
		

getTotalbuy?() : number;
		setTotalbuy?(totalbuy : number): void;
		



head?: number;
		

getHead?() : number;
		setHead?(head : number): void;
		



power?: number;
		

getPower?() : number;
		setPower?(power : number): void;
		



sweeptimes?: number;
		

getSweeptimes?() : number;
		setSweeptimes?(sweeptimes : number): void;
		



screenspirits?: number;
		

getScreenspirits?() : number;
		setScreenspirits?(screenspirits : number): void;
		



send():void;
	}

	export interface PlayerBaseInfoMessage extends PlayerBaseInfo {
	add(key: string, value: any, noAssert?: boolean): PlayerBaseInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): PlayerBaseInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface PlayerBaseInfoBuilder {
	new(data?: PlayerBaseInfo): PlayerBaseInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : PlayerBaseInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : PlayerBaseInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : PlayerBaseInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : PlayerBaseInfoMessage;
	decode64(str: string) : PlayerBaseInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): PlayerBaseInfoMessage;
	decodeDelimited(buffer: any, enc: string): PlayerBaseInfoMessage;
	decodeDelimited(buffer: any, enc: string): PlayerBaseInfoMessage;
	decodeDelimited(buffer: string, enc: string): PlayerBaseInfoMessage;
	decodeHex(str: string): PlayerBaseInfoMessage;
	decodeJSON(str: string): PlayerBaseInfoMessage;
	
}

}


declare module protoTS {

	export class PlayerCurrency {

		

rechargecash?: number;
		

getRechargecash?() : number;
		setRechargecash?(rechargecash : number): void;
		



cash?: number;
		

getCash?() : number;
		setCash?(cash : number): void;
		



vitality?: number;
		

getVitality?() : number;
		setVitality?(vitality : number): void;
		



gold?: string;
		

getGold?() : string;
		setGold?(gold : string): void;
		



friendship?: number;
		

getFriendship?() : number;
		setFriendship?(friendship : number): void;
		



decree?: number;
		

getDecree?() : number;
		setDecree?(decree : number): void;
		



refine_point?: number;
		

getRefinePoint?() : number;
		setRefinePoint?(refinePoint : number): void;
		



send():void;
	}

	export interface PlayerCurrencyMessage extends PlayerCurrency {
	add(key: string, value: any, noAssert?: boolean): PlayerCurrencyMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): PlayerCurrencyMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface PlayerCurrencyBuilder {
	new(data?: PlayerCurrency): PlayerCurrencyMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : PlayerCurrencyMessage;
	decode(buffer: any, length?: number | string, enc?: string) : PlayerCurrencyMessage;
	decode(buffer: any, length?: number | string, enc?: string) : PlayerCurrencyMessage;
	decode(buffer: string, length?: number | string, enc?: string) : PlayerCurrencyMessage;
	decode64(str: string) : PlayerCurrencyMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): PlayerCurrencyMessage;
	decodeDelimited(buffer: any, enc: string): PlayerCurrencyMessage;
	decodeDelimited(buffer: any, enc: string): PlayerCurrencyMessage;
	decodeDelimited(buffer: string, enc: string): PlayerCurrencyMessage;
	decodeHex(str: string): PlayerCurrencyMessage;
	decodeJSON(str: string): PlayerCurrencyMessage;
	
}

}


declare module protoTS {

	export class MainAnnoncement {

		

send():void;
	}

	export interface MainAnnoncementMessage extends MainAnnoncement {
	add(key: string, value: any, noAssert?: boolean): MainAnnoncementMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): MainAnnoncementMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface MainAnnoncementBuilder {
	new(data?: MainAnnoncement): MainAnnoncementMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : MainAnnoncementMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MainAnnoncementMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MainAnnoncementMessage;
	decode(buffer: string, length?: number | string, enc?: string) : MainAnnoncementMessage;
	decode64(str: string) : MainAnnoncementMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): MainAnnoncementMessage;
	decodeDelimited(buffer: any, enc: string): MainAnnoncementMessage;
	decodeDelimited(buffer: any, enc: string): MainAnnoncementMessage;
	decodeDelimited(buffer: string, enc: string): MainAnnoncementMessage;
	decodeHex(str: string): MainAnnoncementMessage;
	decodeJSON(str: string): MainAnnoncementMessage;
	
}

}


declare module protoTS {

	export class DseUserInfo {

		

info?: PlayerBaseInfo;
		

getInfo?() : PlayerBaseInfo;
		setInfo?(info : PlayerBaseInfo): void;
		



currency?: PlayerCurrency;
		

getCurrency?() : PlayerCurrency;
		setCurrency?(currency : PlayerCurrency): void;
		



announce?: MainAnnoncement;
		

getAnnounce?() : MainAnnoncement;
		setAnnounce?(announce : MainAnnoncement): void;
		



send():void;
	}

	export interface DseUserInfoMessage extends DseUserInfo {
	add(key: string, value: any, noAssert?: boolean): DseUserInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): DseUserInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface DseUserInfoBuilder {
	new(data?: DseUserInfo): DseUserInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : DseUserInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUserInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : DseUserInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : DseUserInfoMessage;
	decode64(str: string) : DseUserInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): DseUserInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUserInfoMessage;
	decodeDelimited(buffer: any, enc: string): DseUserInfoMessage;
	decodeDelimited(buffer: string, enc: string): DseUserInfoMessage;
	decodeHex(str: string): DseUserInfoMessage;
	decodeJSON(str: string): DseUserInfoMessage;
	
}

}


declare module protoTS {

	export class EquipmentInfo {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



enhanceLevel?: number;
		

getEnhanceLevel?() : number;
		setEnhanceLevel?(enhanceLevel : number): void;
		



refineLevle?: number;
		

getRefineLevle?() : number;
		setRefineLevle?(refineLevle : number): void;
		



pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



prop_value?: number;
		

getPropValue?() : number;
		setPropValue?(propValue : number): void;
		



send():void;
	}

	export interface EquipmentInfoMessage extends EquipmentInfo {
	add(key: string, value: any, noAssert?: boolean): EquipmentInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): EquipmentInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface EquipmentInfoBuilder {
	new(data?: EquipmentInfo): EquipmentInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : EquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : EquipmentInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : EquipmentInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : EquipmentInfoMessage;
	decode64(str: string) : EquipmentInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): EquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): EquipmentInfoMessage;
	decodeDelimited(buffer: any, enc: string): EquipmentInfoMessage;
	decodeDelimited(buffer: string, enc: string): EquipmentInfoMessage;
	decodeHex(str: string): EquipmentInfoMessage;
	decodeJSON(str: string): EquipmentInfoMessage;
	
}

}


declare module protoTS {

	export class EquipmentInfoLite {

		

oid?: string;
		

getOid?() : string;
		setOid?(oid : string): void;
		



pos?: EquipPos;
		

getPos?() : EquipPos;
		setPos?(pos : EquipPos): void;
		



send():void;
	}

	export interface EquipmentInfoLiteMessage extends EquipmentInfoLite {
	add(key: string, value: any, noAssert?: boolean): EquipmentInfoLiteMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): EquipmentInfoLiteMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface EquipmentInfoLiteBuilder {
	new(data?: EquipmentInfoLite): EquipmentInfoLiteMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : EquipmentInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : EquipmentInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : EquipmentInfoLiteMessage;
	decode(buffer: string, length?: number | string, enc?: string) : EquipmentInfoLiteMessage;
	decode64(str: string) : EquipmentInfoLiteMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): EquipmentInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): EquipmentInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): EquipmentInfoLiteMessage;
	decodeDelimited(buffer: string, enc: string): EquipmentInfoLiteMessage;
	decodeHex(str: string): EquipmentInfoLiteMessage;
	decodeJSON(str: string): EquipmentInfoLiteMessage;
	
}

}


declare module protoTS {

	export class MDropData {

		

type?: number;
		

getType?() : number;
		setType?(type : number): void;
		



index?: number;
		

getIndex?() : number;
		setIndex?(index : number): void;
		



amount?: number;
		

getAmount?() : number;
		setAmount?(amount : number): void;
		



send():void;
	}

	export interface MDropDataMessage extends MDropData {
	add(key: string, value: any, noAssert?: boolean): MDropDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): MDropDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface MDropDataBuilder {
	new(data?: MDropData): MDropDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : MDropDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MDropDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MDropDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : MDropDataMessage;
	decode64(str: string) : MDropDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): MDropDataMessage;
	decodeDelimited(buffer: any, enc: string): MDropDataMessage;
	decodeDelimited(buffer: any, enc: string): MDropDataMessage;
	decodeDelimited(buffer: string, enc: string): MDropDataMessage;
	decodeHex(str: string): MDropDataMessage;
	decodeJSON(str: string): MDropDataMessage;
	
}

}


declare module protoTS {

	export class MDropList {

		

drops?: MDropData[];
		

getDrops?() : MDropData[];
		setDrops?(drops : MDropData[]): void;
		



send():void;
	}

	export interface MDropListMessage extends MDropList {
	add(key: string, value: any, noAssert?: boolean): MDropListMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): MDropListMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface MDropListBuilder {
	new(data?: MDropList): MDropListMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : MDropListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MDropListMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MDropListMessage;
	decode(buffer: string, length?: number | string, enc?: string) : MDropListMessage;
	decode64(str: string) : MDropListMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): MDropListMessage;
	decodeDelimited(buffer: any, enc: string): MDropListMessage;
	decodeDelimited(buffer: any, enc: string): MDropListMessage;
	decodeDelimited(buffer: string, enc: string): MDropListMessage;
	decodeHex(str: string): MDropListMessage;
	decodeJSON(str: string): MDropListMessage;
	
}

}


declare module protoTS {

	export class MItem {

		

tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



amount?: number;
		

getAmount?() : number;
		setAmount?(amount : number): void;
		



send():void;
	}

	export interface MItemMessage extends MItem {
	add(key: string, value: any, noAssert?: boolean): MItemMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): MItemMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface MItemBuilder {
	new(data?: MItem): MItemMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : MItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MItemMessage;
	decode(buffer: any, length?: number | string, enc?: string) : MItemMessage;
	decode(buffer: string, length?: number | string, enc?: string) : MItemMessage;
	decode64(str: string) : MItemMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): MItemMessage;
	decodeDelimited(buffer: any, enc: string): MItemMessage;
	decodeDelimited(buffer: any, enc: string): MItemMessage;
	decodeDelimited(buffer: string, enc: string): MItemMessage;
	decodeHex(str: string): MItemMessage;
	decodeJSON(str: string): MItemMessage;
	
}

}


declare module protoTS {

	export class ShopUnit {

		

shopid?: number;
		

getShopid?() : number;
		setShopid?(shopid : number): void;
		



count?: number;
		

getCount?() : number;
		setCount?(count : number): void;
		



send():void;
	}

	export interface ShopUnitMessage extends ShopUnit {
	add(key: string, value: any, noAssert?: boolean): ShopUnitMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): ShopUnitMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface ShopUnitBuilder {
	new(data?: ShopUnit): ShopUnitMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : ShopUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ShopUnitMessage;
	decode(buffer: any, length?: number | string, enc?: string) : ShopUnitMessage;
	decode(buffer: string, length?: number | string, enc?: string) : ShopUnitMessage;
	decode64(str: string) : ShopUnitMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): ShopUnitMessage;
	decodeDelimited(buffer: any, enc: string): ShopUnitMessage;
	decodeDelimited(buffer: any, enc: string): ShopUnitMessage;
	decodeDelimited(buffer: string, enc: string): ShopUnitMessage;
	decodeHex(str: string): ShopUnitMessage;
	decodeJSON(str: string): ShopUnitMessage;
	
}

}


declare module protoTS {

	export class SkillInfoLite {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



level?: number;
		

getLevel?() : number;
		setLevel?(level : number): void;
		



send():void;
	}

	export interface SkillInfoLiteMessage extends SkillInfoLite {
	add(key: string, value: any, noAssert?: boolean): SkillInfoLiteMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): SkillInfoLiteMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface SkillInfoLiteBuilder {
	new(data?: SkillInfoLite): SkillInfoLiteMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : SkillInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SkillInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SkillInfoLiteMessage;
	decode(buffer: string, length?: number | string, enc?: string) : SkillInfoLiteMessage;
	decode64(str: string) : SkillInfoLiteMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): SkillInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): SkillInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): SkillInfoLiteMessage;
	decodeDelimited(buffer: string, enc: string): SkillInfoLiteMessage;
	decodeHex(str: string): SkillInfoLiteMessage;
	decodeJSON(str: string): SkillInfoLiteMessage;
	
}

}


declare module protoTS {

	export class SpiritInfoLite {

		

pos?: number;
		

getPos?() : number;
		setPos?(pos : number): void;
		



tid?: number;
		

getTid?() : number;
		setTid?(tid : number): void;
		



isCaptain?: boolean;
		

getIsCaptain?() : boolean;
		setIsCaptain?(isCaptain : boolean): void;
		



send():void;
	}

	export interface SpiritInfoLiteMessage extends SpiritInfoLite {
	add(key: string, value: any, noAssert?: boolean): SpiritInfoLiteMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): SpiritInfoLiteMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface SpiritInfoLiteBuilder {
	new(data?: SpiritInfoLite): SpiritInfoLiteMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : SpiritInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SpiritInfoLiteMessage;
	decode(buffer: any, length?: number | string, enc?: string) : SpiritInfoLiteMessage;
	decode(buffer: string, length?: number | string, enc?: string) : SpiritInfoLiteMessage;
	decode64(str: string) : SpiritInfoLiteMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): SpiritInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): SpiritInfoLiteMessage;
	decodeDelimited(buffer: any, enc: string): SpiritInfoLiteMessage;
	decodeDelimited(buffer: string, enc: string): SpiritInfoLiteMessage;
	decodeHex(str: string): SpiritInfoLiteMessage;
	decodeJSON(str: string): SpiritInfoLiteMessage;
	
}

}


declare module protoTS {

	export class StageData {

		

stageid?: number;
		

getStageid?() : number;
		setStageid?(stageid : number): void;
		



star?: number;
		

getStar?() : number;
		setStar?(star : number): void;
		



todaytimes?: number;
		

getTodaytimes?() : number;
		setTodaytimes?(todaytimes : number): void;
		



todaybuy?: number;
		

getTodaybuy?() : number;
		setTodaybuy?(todaybuy : number): void;
		



send():void;
	}

	export interface StageDataMessage extends StageData {
	add(key: string, value: any, noAssert?: boolean): StageDataMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): StageDataMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface StageDataBuilder {
	new(data?: StageData): StageDataMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : StageDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : StageDataMessage;
	decode(buffer: any, length?: number | string, enc?: string) : StageDataMessage;
	decode(buffer: string, length?: number | string, enc?: string) : StageDataMessage;
	decode64(str: string) : StageDataMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): StageDataMessage;
	decodeDelimited(buffer: any, enc: string): StageDataMessage;
	decodeDelimited(buffer: any, enc: string): StageDataMessage;
	decodeDelimited(buffer: string, enc: string): StageDataMessage;
	decodeHex(str: string): StageDataMessage;
	decodeJSON(str: string): StageDataMessage;
	
}

}


declare module protoTS {

	export class TacticInfo {

		

uid?: string;
		

getUid?() : string;
		setUid?(uid : string): void;
		



leaderid?: string;
		

getLeaderid?() : string;
		setLeaderid?(leaderid : string): void;
		



spiritslist?: BattleSpirits[];
		

getSpiritslist?() : BattleSpirits[];
		setSpiritslist?(spiritslist : BattleSpirits[]): void;
		



send():void;
	}

	export interface TacticInfoMessage extends TacticInfo {
	add(key: string, value: any, noAssert?: boolean): TacticInfoMessage;
	calculate(): number;
	encode64(): string;
	encodeAB(): ArrayBuffer;
	encodeDelimited(buffer?: any, noVerify?: boolean): any;
	encodeDelimited(buffer?: boolean, noVerify?: boolean): any;
	encodeHex(): string;
	encodeJSON(): string;
	encodeNB(): any;
	get(key: string, noAssert: boolean): any;
	set(keyOrObj: string, value: any | boolean, noAssert: boolean): TacticInfoMessage;
	toArrayBuffer(): ArrayBuffer;
	toBase64(): string;
	toBuffer(): any;
	toHex(): string;
	toRaw(): any;
	toString(): string;
}

export interface TacticInfoBuilder {
	new(data?: TacticInfo): TacticInfoMessage;
	decode(buffer: ArrayBuffer, length?: number | string, enc?: string) : TacticInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TacticInfoMessage;
	decode(buffer: any, length?: number | string, enc?: string) : TacticInfoMessage;
	decode(buffer: string, length?: number | string, enc?: string) : TacticInfoMessage;
	decode64(str: string) : TacticInfoMessage;
	decodeDelimited(buffer: ArrayBuffer, enc: string): TacticInfoMessage;
	decodeDelimited(buffer: any, enc: string): TacticInfoMessage;
	decodeDelimited(buffer: any, enc: string): TacticInfoMessage;
	decodeDelimited(buffer: string, enc: string): TacticInfoMessage;
	decodeHex(str: string): TacticInfoMessage;
	decodeJSON(str: string): TacticInfoMessage;
	
}

}


declare module protoTS {
	export const enum StorageType {
		INVALID_BAG = 0,
		ITEM_BAG = 1,
		
}
}

declare module protoTS {
	export const enum ItemSourceType {
		ITEM_SOURCE_NORMAL = 0,
		ITEM_SOURCE_TREASURE_CASE = 1,
		ITEM_SOURCE_GIFT = 2,
		ITEM_SOURCE_MULTI_DROP_CASE = 3,
		ITEM_SOURCE_PICK_GIFT = 4,
		
}
}

declare module protoTS {
	export const enum EquipPos {
		WEAPON = 1,
		HEAD = 2,
		CHEST = 3,
		BOOT = 4,
		
}
}

declare module protoTS {
	export const enum MsgHead {
		DceBattleStart = 2048,
		DceCombineProto = 2049,
		DceHeartbeat = 2050,
		DceResetLeader = 2051,
		DceShowSpiritInfo = 2052,
		DceShowFormationInfo = 2053,
		DceSwitchFormation = 2054,
		DceShowSingleSpiritInfo = 2055,
		DceBattleOpt = 2056,
		DceUserInfo = 2057,
		DceStageInfo = 2058,
		DceStageAward = 2059,
		DceStageExplore = 2060,
		DceStorageList = 2061,
		DceUseItem = 2062,
		DceBattleSweep = 2063,
		DceShopOpt = 2064,
		DceDecreeShopOpt = 2065,
		DceStageReset = 2066,
		DceSummon = 2067,
		DceSummonInterface = 2068,
		DceSpiritDevelop = 2069,
		DceCombineSpiritDebris = 2070,
		DceSpiritDebrisList = 2071,
		DceCombineEquipmentDebris = 2072,
		DceEquipmentDebrisList = 2073,
		DceAllEquipmentInfo = 2074,
		DceEquipmentGearUp = 2075,
		DceEquipmentEnhance = 2076,
		DceEquipmentRefine = 2077,
		DceTownPatrolOpt = 2078,
		DceDevilTowerOpt = 2079,
		DceMailOpt = 2080,
		DceChangeSpiritSkin = 2081,
		DceInstituteOpt = 2082,
		DseAuthState = 512,
		DseBattleStart = 513,
		DseCombineProto = 514,
		DseHeartbeat = 515,
		DseResetLeaderResult = 516,
		DseSingleSpiritInfo = 517,
		DseFormationInfo = 518,
		DseAllSpiritInfo = 519,
		DseBattleOpt = 520,
		DseUserInfo = 521,
		DseStageInfo = 522,
		DseStageAward = 523,
		DseStageExplore = 524,
		DseItemChange = 525,
		DseStorageList = 526,
		DseUseItem = 527,
		DseUpdateStage = 528,
		DseBattleSweep = 529,
		DseMainScreenReady = 530,
		DseShopOpt = 531,
		DseDecreeShopOpt = 532,
		DseStageReset = 533,
		DseUpdateSpiritInfo = 534,
		DseSummon = 535,
		DseSummonInterface = 536,
		DseSpiritDevelop = 537,
		DseSwitchFormation = 538,
		DseCombineSpiritDebris = 539,
		DseSpiritDebrisList = 540,
		DseCombineEquipmentDebris = 541,
		DseEquipmentDebrisList = 542,
		DseAllEquipmentInfo = 543,
		DseUpdateEquipmentInfo = 544,
		DseEquipmentGearUp = 545,
		DseEquipmentEnhance = 546,
		DseEquipmentRefine = 547,
		DseTownPatrolOpt = 548,
		DseDevilTowerOpt = 549,
		DseMailOpt = 550,
		DseChangeSpiritSkin = 551,
		DseReformInfo = 552,
		DseInstituteOpt = 553,
		
}
}


