declare namespace JsonTs {
class skill_data{
        public id:number;
        public SkillName_l:string;
        public SkillIcon:string;
        public SkillMark_l:string;
        public SkillType:number;
        public OwnTarget:number;
        public OwnEffect:number;
        public OwnEffectParm:string;
        public EnemyTarget:number;
        public EnemyEffect:number;
        public EnemyEffectParm:string;
        public ATKTimes:number;
        public EnemyDamage:number;
        public SkillCartoon:string;
        public SkillCartoonTime:number;
        public SlideSkillCD:number;
        public LeaderBUFFID:string;
        public LeaderBUFFValue:string;
        public SceneRule:number;
        public SkillNamePic:string;
        public FurySkillType:number;
    }
class spirits_data{
        public id:number;
        public Name_l:string;
        public Remak_l:string;
        public SpiritsModelId:number;
        public Quality:string;
        public Grade:number;
        public Type:number;
        public Rank:number;
        public InitialATK:number;
        public InitialDEF:number;
        public InitialHP:number;
        public Speed:number;
        public DeVertigo:number;
        public Talent:string;
        public NormalSkill:number;
        public ActiveSkill:number;
        public FurySkill:number;
        public LeaderSkill:number;
        public AwakTimes:number;
        public AwakSpiritsModelId:number;
        public AwakFurySkill:number;
        public AwakItemID:string;
        public AwakItemCount:string;
        public AwakRemak:string;
        public fragmentNumber:number;
        public IfAdvance:number;
        public SpeedCoe:number;
        public AllSpiritsModelId:any[];
        public InitialPower:number;
    }
class spirits_model{
        public id:number;
        public SpiritsModel:string;
        public SpiritsHeadSculp:string;
        public HalfLengthPhoto:string;
        public SpiritsID:number;
        public FrontScale:number;
        public MiddleScale:number;
        public BackScale:number;
        public Offset:string;
        public OffsetSpirits:string;
        public OffsetLineup:string;
        public OffsetActiveSkill:string;
        public OffsetEnemyFury:string;
    }
class talent{
        public id:number;
        public TalentDesc:string;
        public AttackPlus:number;
        public DefensePlus:number;
        public BloodPlus:number;
        public HitPlus:number;
        public DodgeRate:number;
        public CritRate:number;
        public TenacityRate:number;
        public ResistStun:number;
    }
class item{
        public id:number;
        public Name_l:string;
        public Remark_l:string;
        public IconBig:string;
        public IconSmall:string;
        public Rank:number;
        public Quality:number;
        public Type:number;
        public RandomID:number;
        public Aims:string;
        public IconSmallBest:string;
    }
class gift_data{
        public id:number;
        public GiftID:number;
        public Type:number;
        public Item:number;
        public Count:number;
    }
class drop_data{
        public id:number;
        public DropID:number;
        public Type:number;
        public Item:number;
        public Count:number;
    }
class one_in_more{
        public id:number;
        public gift_list:string;
    }
class cash_data{
        public id:number;
        public name_l:string;
        public sale:number;
        public cash:number;
        public firstGet:number;
        public activeGet:number;
        public icon:string;
        public dayCount:number;
        public dayGet:number;
        public dayLimit:number;
        public activitySwitch:number;
        public startTime:string;
        public endTime:string;
        public platform:string;
    }
class spirits_exp{
        public id:number;
        public Exp:number;
    }
class spirits_reform{
        public id:number;
        public Level:number;
        public Power:number;
        public ReformTime:number;
    }
class break_buff{
        public id:number;
        public Name_l:string;
        public AdvancedBuff1:number;
        public AdvancedBuffValue1:number;
        public AdvancedBuff2:number;
        public AdvancedBuffValue2:number;
        public AdvancedBuff3:number;
        public AdvancedBuffValue3:number;
        public AdvancedBuff4:number;
        public AdvancedBuffValue4:number;
        public AdvancedBuff5:number;
        public AdvancedBuffValue5:number;
    }
class break_rate{
        public id:number;
        public NeedLevel:number;
        public ATKRate:number;
        public DEFRate:number;
        public HPRate:number;
        public BreakCostPiece:number;
        public AdvanceCostItemType:number;
        public AdvanceCostItemID:number;
        public AdvanceCostItemCount:number;
        public AdvanceCostTokenType:number;
        public AdvanceCostTokenID:number;
        public AdvanceCostTokenCount:number;
        public SpeedRate:number;
        public InitialRate:number;
    }
class global_options{
        public id:number;
        public Num:number;
        public Des:string;
        public Introduce:string;
        public Tips_l:string;
    }
class npc_data{
        public id:number;
        public ShikiModelId:string;
        public Name_l:string;
        public Quality:number;
        public Grade:number;
        public Type:number;
        public Initialfury:number;
        public ATK:number;
        public DEF:number;
        public HP:number;
        public Speed:number;
        public Hit:number;
        public Eva:number;
        public Cri:number;
        public DeCri:number;
        public DeVertigo:number;
        public TalentID:number;
        public NormalSkill:number;
        public ActiveSkill:number;
        public FurySkill:number;
        public LeaderSkill:number;
    }
class area_data{
        public id:number;
        public name_l:string;
        public icon:string;
    }
class campaign_data{
        public id:number;
        public name_l:string;
        public iconX:number;
        public iconY:number;
    }
class stage_data{
        public id:number;
        public name_l:string;
        public reqStage:number;
        public type:number;
        public vitality:number;
        public dayAtkCount:number;
        public exp:number;
        public gold:number;
        public dropItem:string;
        public pos1:number;
        public pos2:number;
        public pos3:number;
        public pos4:number;
        public pos5:number;
        public pos6:number;
        public pos7:number;
        public background:number;
        public starReward:number;
        public exploreExp:number;
        public exploreGold:number;
        public exploreDropItem:number;
        public resetCount:number;
        public resetCost:string;
        public leaderPos:number;
    }
class stage_special_data{
        public id:number;
        public name_l:string;
        public reqStage:number;
        public reqSpecialStage:number;
        public vitality:number;
        public pos1:number;
        public pos2:number;
        public pos3:number;
        public pos4:number;
        public pos5:number;
        public pos6:number;
        public pos7:number;
        public exp:number;
        public gold:number;
        public dropItem:string;
        public dayAtkCount:number;
        public background:number;
        public starReward:number;
        public leaderPos:number;
    }
class explore_talk_data{
        public id:number;
        public talk_l:string;
    }
class drop_type{
        public id:number;
        public Name_l:string;
        public Remarks_l:string;
        public Icon:string;
        public quality:number;
        public IconLittle:string;
    }
class patrol_base{
        public id:number;
        public SlateCount:number;
        public PatrolTotal:number;
        public PatrolCD:number;
        public PatrolCost:number;
        public UnitSilver:number;
        public GiftID:number;
        public HoeingTime:number;
        public HoeingMine:number;
        public MineCostTime:number;
    }
class patrol_event{
        public id:number;
        public IncidentName_l:string;
        public Remarks_l:string;
        public MorraGift:string;
        public Remarks2_l:string;
        public Icon:string;
    }
class patrol_achievement{
        public id:number;
        public AchieveGift:number;
    }
class level_data{
        public id:number;
        public exp:number;
        public desc_l:string;
        public desc_img:string;
        public vitalityLimit:number;
        public nextFunction:number;
        public failjumpid:string;
        public LineupUnlock:number;
    }
class shop_data{
        public id:number;
        public enable:number;
        public itemType:number;
        public itemId:number;
        public itemCount:number;
        public name_l:string;
        public shopType:number;
        public costType:number;
        public costID:number;
        public costValue:number;
        public order:number;
        public reqLevel:number;
        public reqVIPLevel:number;
        public countLimit:number;
        public reqArenaRank:number;
        public chooseNum:number;
    }
class decree_shop{
        public id:number;
        public name_l:string;
        public type:number;
        public item:number;
        public count:number;
        public discountCost:number;
        public rnd:number;
        public reqLevel:number;
    }
class shop_type{
        public id:number;
        public shopName:string;
        public shopPosition:number;
        public shopPicture:string;
        public token1:number;
        public token2:number;
        public token3:number;
    }
class summon_data{
        public id:number;
        public cardId:number;
        public spiritId:number;
        public weight:number;
    }
class summon_expend_data{
        public id:number;
        public summonType:number;
        public freeSummon:number;
        public freeSummonNumebei:number;
        public freeSummonInterval:number;
        public onceConsumeTypeFirst:number;
        public onceConsumeIdFirst:number;
        public onceConsumeNumberFirst:number;
        public onceConsumeTypeSecond:number;
        public onceConsumeIdSecond:number;
        public onceConsumeNumberSecond:number;
        public timesConsumeNumber:number;
        public timesConsumeTypeFirst:number;
        public timesConsumeIdFirst:number;
        public timesConsumeNumberFirst:number;
        public timesConsumeTypeSecond:number;
        public timesConsumeIdSecond:number;
        public timesConsumeNumberSecond:number;
        public titleBg:string;
        public spiritTtpeBg:string;
        public summonLabel:string;
        public summonSort:number;
        public summonSpiritModel:string;
    }
class err_code{
        public id:number;
        public ErrorWords_l:string;
    }
class spirits_piece_data{
        public id:number;
        public name_l:string;
        public iconId:string;
        public Quality:number;
        public Grade:number;
        public desc_l:string;
    }
class tower_base_data{
        public id:number;
        public openlevel:number;
        public freeFightNumber:number;
        public moneyFightFirst:number;
        public moneyFightAdd:number;
        public resetNumber:number;
        public resetCost:number;
        public sweepIntervalTime:number;
        public sweepLayerCost:number;
    }
class spirits_reform_skill{
        public id:number;
        public SkillId:any[];
        public OwnEffectParmAdd:any[];
        public EnemyDamage:any[];
    }
class top_common_data{
        public id:number;
        public titleType:number;
        public titleImage:string;
        public dropType1:number;
        public itemId1:number;
        public dropType2:number;
        public itemId2:number;
        public dropType3:number;
        public itemId3:number;
        public dropType4:number;
        public itemId4:number;
    }
class buff_depict{
        public id:number;
        public depict_l:string;
        public Type:number;
        public Pic:string;
    }
class equipment{
        public id:number;
        public Name_l:string;
        public Type:number;
        public Quality:number;
        public equipsets:number;
        public synthetic:number;
        public upgradeType:number;
        public basicValue:number;
        public upgradeValue:number;
        public additiveType:any[];
        public additiveValue:any[];
        public ResolveReturn:number;
        public icon:string;
        public desc_l:string;
    }
class equip_strengthen{
        public id:number;
        public upCost:number;
    }
class refining_equipment{
        public id:number;
        public upCost1:any[];
        public upCost2:any[];
        public upCost3:any[];
        public upCost4:any[];
        public upCost5:any[];
        public upCost6:any[];
    }
class equip_refining_growth{
        public id:number;
        public percentage_0:any[];
        public percentage_1:any[];
        public percentage_2:any[];
        public percentage_3:any[];
        public percentage_4:any[];
        public percentage_5:any[];
    }
class equip_suit_attribute{
        public id:number;
        public Name_l:string;
        public setseffect0:any[];
        public setseffect1:any[];
        public setseffect2:any[];
    }
class equip_type_coefficient{
        public id:number;
        public coefficient:number;
    }
class equip_quality_coefficient{
        public id:number;
        public coefficient:number;
    }
class resolve_exp{
        public id:number;
        public Item_id:number;
        public Exp:number;
    }
class challenge_data{
        public id:number;
        public sort:number;
        public name:string;
        public icon:string;
        public label:string;
        public panelClass:string;
        public panelParam:any[];
        public level:number;
        public grayLabel:string;
    }
class study_data{
        public id:number;
        public Name_l:string;
        public Type:number;
        public Icon:string;
        public PreStudy:any[];
        public ReqLevel:number;
        public PreStudyLevel1:any[];
        public PreStudyLevel2:any[];
        public PostStudy:any[];
        public Level:number;
        public DevelopBuffType:number;
        public DevelopBuffValue:any[];
        public BattleType:any[];
        public BattleValue:any[];
        public CostTime:any[];
    }
class battle_lost{
        public id:number;
        public StartLevel:number;
        public EndLevel:number;
        public Target1:any[];
        public Target2:any[];
        public Target3:any[];
    }
class arena_stage_data{
        public id:number;
        public level:number;
        public rankMin:number;
        public rankMax:number;
        public npcList:any[];
    }
class area_base_data{
        public id:number;
        public openlevel:number;
        public freeFightNumber:number;
    }
class explain_data{
        public id:number;
        public title_l:string;
        public content_l:string;
    }
class dungeons_spirit_data{
        public id:number;
    }
class dungeons_data{
        public id:number;
        public type:number;
        public name:string;
        public costSpirit:number;
        public dropid:any[];
        public npcList:any[];
        public sort:number;
        public bgNpc:number;
        public bgPic:string;
        public rewardType:number;
    }
}