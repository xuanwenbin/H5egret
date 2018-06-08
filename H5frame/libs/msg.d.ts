

declare namespace protoTS {


    /** Properties of a BattleAction. */
    interface IBattleAction {

        /** BattleAction attackid */
        attackid?: (string|null);

        /** BattleAction attackrole */
        attackrole?: (number|null);

        /** BattleAction skillid */
        skillid?: (number|null);

        /** BattleAction skillparam */
        skillparam?: (number|null);

        /** BattleAction targetlist */
        targetlist?: (IBattleEnemyUnit[]|null);

        /** BattleAction owneffectlist */
        owneffectlist?: (IBattleSelfUnit[]|null);

        /** BattleAction allspiritslist */
        allspiritslist?: (IBattleOneUnit[]|null);

        /** BattleAction currenttime */
        currenttime?: (string|null);
    }

    /** Represents a BattleAction. */
    class BattleAction implements IBattleAction {

        /**
         * Constructs a new BattleAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleAction);

        /** BattleAction attackid. */
        public attackid: string;

        /** BattleAction attackrole. */
        public attackrole: number;

        /** BattleAction skillid. */
        public skillid: number;

        /** BattleAction skillparam. */
        public skillparam: number;

        /** BattleAction targetlist. */
        public targetlist: IBattleEnemyUnit[];

        /** BattleAction owneffectlist. */
        public owneffectlist: IBattleSelfUnit[];

        /** BattleAction allspiritslist. */
        public allspiritslist: IBattleOneUnit[];

        /** BattleAction currenttime. */
        public currenttime: string;

        /**
         * Creates a new BattleAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleAction instance
         */
        public static create(properties?: IBattleAction): BattleAction;

        /**
         * Encodes the specified BattleAction message. Does not implicitly {@link BattleAction.verify|verify} messages.
         * @param message BattleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleAction message, length delimited. Does not implicitly {@link BattleAction.verify|verify} messages.
         * @param message BattleAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleAction;

        /**
         * Decodes a BattleAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleAction;

        /**
         * Verifies a BattleAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleAction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleAction
         */
        public static fromObject(object: { [k: string]: any }): BattleAction;

        /**
         * Creates a plain object from a BattleAction message. Also converts values to other types if specified.
         * @param message BattleAction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleAction, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleAction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleEnemyUnit. */
    interface IBattleEnemyUnit {

        /** BattleEnemyUnit id */
        id?: (string|null);

        /** BattleEnemyUnit role */
        role?: (number|null);

        /** BattleEnemyUnit cri */
        cri?: (boolean|null);

        /** BattleEnemyUnit hit */
        hit?: (boolean|null);

        /** BattleEnemyUnit damage */
        damage?: (number|null);

        /** BattleEnemyUnit shield */
        shield?: (number|null);

        /** BattleEnemyUnit enemyeffecttype */
        enemyeffecttype?: (number|null);

        /** BattleEnemyUnit enemyeffectvalue */
        enemyeffectvalue?: (number|null);
    }

    /** Represents a BattleEnemyUnit. */
    class BattleEnemyUnit implements IBattleEnemyUnit {

        /**
         * Constructs a new BattleEnemyUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleEnemyUnit);

        /** BattleEnemyUnit id. */
        public id: string;

        /** BattleEnemyUnit role. */
        public role: number;

        /** BattleEnemyUnit cri. */
        public cri: boolean;

        /** BattleEnemyUnit hit. */
        public hit: boolean;

        /** BattleEnemyUnit damage. */
        public damage: number;

        /** BattleEnemyUnit shield. */
        public shield: number;

        /** BattleEnemyUnit enemyeffecttype. */
        public enemyeffecttype: number;

        /** BattleEnemyUnit enemyeffectvalue. */
        public enemyeffectvalue: number;

        /**
         * Creates a new BattleEnemyUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleEnemyUnit instance
         */
        public static create(properties?: IBattleEnemyUnit): BattleEnemyUnit;

        /**
         * Encodes the specified BattleEnemyUnit message. Does not implicitly {@link BattleEnemyUnit.verify|verify} messages.
         * @param message BattleEnemyUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleEnemyUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleEnemyUnit message, length delimited. Does not implicitly {@link BattleEnemyUnit.verify|verify} messages.
         * @param message BattleEnemyUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleEnemyUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleEnemyUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleEnemyUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleEnemyUnit;

        /**
         * Decodes a BattleEnemyUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleEnemyUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleEnemyUnit;

        /**
         * Verifies a BattleEnemyUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleEnemyUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleEnemyUnit
         */
        public static fromObject(object: { [k: string]: any }): BattleEnemyUnit;

        /**
         * Creates a plain object from a BattleEnemyUnit message. Also converts values to other types if specified.
         * @param message BattleEnemyUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleEnemyUnit, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleEnemyUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSelfUnit. */
    interface IBattleSelfUnit {

        /** BattleSelfUnit id */
        id?: (string|null);

        /** BattleSelfUnit owneffecttype */
        owneffecttype?: (number|null);

        /** BattleSelfUnit owneffectparam */
        owneffectparam?: (number|null);
    }

    /** Represents a BattleSelfUnit. */
    class BattleSelfUnit implements IBattleSelfUnit {

        /**
         * Constructs a new BattleSelfUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleSelfUnit);

        /** BattleSelfUnit id. */
        public id: string;

        /** BattleSelfUnit owneffecttype. */
        public owneffecttype: number;

        /** BattleSelfUnit owneffectparam. */
        public owneffectparam: number;

        /**
         * Creates a new BattleSelfUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSelfUnit instance
         */
        public static create(properties?: IBattleSelfUnit): BattleSelfUnit;

        /**
         * Encodes the specified BattleSelfUnit message. Does not implicitly {@link BattleSelfUnit.verify|verify} messages.
         * @param message BattleSelfUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleSelfUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleSelfUnit message, length delimited. Does not implicitly {@link BattleSelfUnit.verify|verify} messages.
         * @param message BattleSelfUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleSelfUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleSelfUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSelfUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleSelfUnit;

        /**
         * Decodes a BattleSelfUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSelfUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleSelfUnit;

        /**
         * Verifies a BattleSelfUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSelfUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSelfUnit
         */
        public static fromObject(object: { [k: string]: any }): BattleSelfUnit;

        /**
         * Creates a plain object from a BattleSelfUnit message. Also converts values to other types if specified.
         * @param message BattleSelfUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleSelfUnit, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSelfUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleOneUnit. */
    interface IBattleOneUnit {

        /** BattleOneUnit id */
        id?: (string|null);

        /** BattleOneUnit role */
        role?: (number|null);

        /** BattleOneUnit hp */
        hp?: (number|null);

        /** BattleOneUnit maxhp */
        maxhp?: (number|null);

        /** BattleOneUnit furypoint */
        furypoint?: (number|null);

        /** BattleOneUnit slideacctime */
        slideacctime?: (number|null);

        /** BattleOneUnit vertigotime */
        vertigotime?: (number|null);

        /** BattleOneUnit shieldtime */
        shieldtime?: (number|null);

        /** BattleOneUnit shieldvalue */
        shieldvalue?: (number|null);
    }

    /** Represents a BattleOneUnit. */
    class BattleOneUnit implements IBattleOneUnit {

        /**
         * Constructs a new BattleOneUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleOneUnit);

        /** BattleOneUnit id. */
        public id: string;

        /** BattleOneUnit role. */
        public role: number;

        /** BattleOneUnit hp. */
        public hp: number;

        /** BattleOneUnit maxhp. */
        public maxhp: number;

        /** BattleOneUnit furypoint. */
        public furypoint: number;

        /** BattleOneUnit slideacctime. */
        public slideacctime: number;

        /** BattleOneUnit vertigotime. */
        public vertigotime: number;

        /** BattleOneUnit shieldtime. */
        public shieldtime: number;

        /** BattleOneUnit shieldvalue. */
        public shieldvalue: number;

        /**
         * Creates a new BattleOneUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleOneUnit instance
         */
        public static create(properties?: IBattleOneUnit): BattleOneUnit;

        /**
         * Encodes the specified BattleOneUnit message. Does not implicitly {@link BattleOneUnit.verify|verify} messages.
         * @param message BattleOneUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleOneUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleOneUnit message, length delimited. Does not implicitly {@link BattleOneUnit.verify|verify} messages.
         * @param message BattleOneUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleOneUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleOneUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleOneUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleOneUnit;

        /**
         * Decodes a BattleOneUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleOneUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleOneUnit;

        /**
         * Verifies a BattleOneUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleOneUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleOneUnit
         */
        public static fromObject(object: { [k: string]: any }): BattleOneUnit;

        /**
         * Creates a plain object from a BattleOneUnit message. Also converts values to other types if specified.
         * @param message BattleOneUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleOneUnit, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleOneUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleInfo. */
    interface IBattleInfo {

        /** BattleInfo battleid */
        battleid?: (string|null);

        /** BattleInfo battletype */
        battletype?: (number|null);

        /** BattleInfo attackTac */
        attackTac?: (ITacticInfo|null);

        /** BattleInfo defendTac */
        defendTac?: (ITacticInfo|null);

        /** BattleInfo actionlist */
        actionlist?: (IBattleAction[]|null);

        /** BattleInfo score */
        score?: (number|null);

        /** BattleInfo isauto */
        isauto?: (boolean|null);
    }

    /** Represents a BattleInfo. */
    class BattleInfo implements IBattleInfo {

        /**
         * Constructs a new BattleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleInfo);

        /** BattleInfo battleid. */
        public battleid: string;

        /** BattleInfo battletype. */
        public battletype: number;

        /** BattleInfo attackTac. */
        public attackTac?: (ITacticInfo|null);

        /** BattleInfo defendTac. */
        public defendTac?: (ITacticInfo|null);

        /** BattleInfo actionlist. */
        public actionlist: IBattleAction[];

        /** BattleInfo score. */
        public score: number;

        /** BattleInfo isauto. */
        public isauto: boolean;

        /**
         * Creates a new BattleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleInfo instance
         */
        public static create(properties?: IBattleInfo): BattleInfo;

        /**
         * Encodes the specified BattleInfo message. Does not implicitly {@link BattleInfo.verify|verify} messages.
         * @param message BattleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleInfo message, length delimited. Does not implicitly {@link BattleInfo.verify|verify} messages.
         * @param message BattleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleInfo;

        /**
         * Decodes a BattleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleInfo;

        /**
         * Verifies a BattleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleInfo
         */
        public static fromObject(object: { [k: string]: any }): BattleInfo;

        /**
         * Creates a plain object from a BattleInfo message. Also converts values to other types if specified.
         * @param message BattleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TacticInfo. */
    interface ITacticInfo {

        /** TacticInfo uid */
        uid?: (string|null);

        /** TacticInfo leaderid */
        leaderid?: (string|null);

        /** TacticInfo spiritslist */
        spiritslist?: (IBattleSpirits[]|null);
    }

    /** Represents a TacticInfo. */
    class TacticInfo implements ITacticInfo {

        /**
         * Constructs a new TacticInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ITacticInfo);

        /** TacticInfo uid. */
        public uid: string;

        /** TacticInfo leaderid. */
        public leaderid: string;

        /** TacticInfo spiritslist. */
        public spiritslist: IBattleSpirits[];

        /**
         * Creates a new TacticInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TacticInfo instance
         */
        public static create(properties?: ITacticInfo): TacticInfo;

        /**
         * Encodes the specified TacticInfo message. Does not implicitly {@link TacticInfo.verify|verify} messages.
         * @param message TacticInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ITacticInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TacticInfo message, length delimited. Does not implicitly {@link TacticInfo.verify|verify} messages.
         * @param message TacticInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ITacticInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TacticInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TacticInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): TacticInfo;

        /**
         * Decodes a TacticInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TacticInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): TacticInfo;

        /**
         * Verifies a TacticInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TacticInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TacticInfo
         */
        public static fromObject(object: { [k: string]: any }): TacticInfo;

        /**
         * Creates a plain object from a TacticInfo message. Also converts values to other types if specified.
         * @param message TacticInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TacticInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TacticInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSpirits. */
    interface IBattleSpirits {

        /** BattleSpirits id */
        id?: (string|null);

        /** BattleSpirits spiritsid */
        spiritsid?: (number|null);

        /** BattleSpirits skillid */
        skillid?: (number|null);

        /** BattleSpirits slideskillid */
        slideskillid?: (number|null);

        /** BattleSpirits furyskillid */
        furyskillid?: (number|null);

        /** BattleSpirits leaderskillid */
        leaderskillid?: (number|null);

        /** BattleSpirits talentid */
        talentid?: (number|null);

        /** BattleSpirits upgrade */
        upgrade?: (number|null);

        /** BattleSpirits reformed */
        reformed?: (number|null);

        /** BattleSpirits skin */
        skin?: (number|null);

        /** BattleSpirits hp */
        hp?: (number|null);

        /** BattleSpirits maxhp */
        maxhp?: (number|null);

        /** BattleSpirits speed */
        speed?: (number|null);

        /** BattleSpirits furypoint */
        furypoint?: (number|null);

        /** BattleSpirits propertylist */
        propertylist?: (number[]|null);

        /** BattleSpirits basepropertylist */
        basepropertylist?: (number[]|null);

        /** BattleSpirits buffpropertylist */
        buffpropertylist?: (number[]|null);

        /** BattleSpirits slideacctime */
        slideacctime?: (number|null);

        /** BattleSpirits vertigotime */
        vertigotime?: (number|null);

        /** BattleSpirits shieldtime */
        shieldtime?: (number|null);

        /** BattleSpirits shieldvalue */
        shieldvalue?: (number|null);
    }

    /** Represents a BattleSpirits. */
    class BattleSpirits implements IBattleSpirits {

        /**
         * Constructs a new BattleSpirits.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleSpirits);

        /** BattleSpirits id. */
        public id: string;

        /** BattleSpirits spiritsid. */
        public spiritsid: number;

        /** BattleSpirits skillid. */
        public skillid: number;

        /** BattleSpirits slideskillid. */
        public slideskillid: number;

        /** BattleSpirits furyskillid. */
        public furyskillid: number;

        /** BattleSpirits leaderskillid. */
        public leaderskillid: number;

        /** BattleSpirits talentid. */
        public talentid: number;

        /** BattleSpirits upgrade. */
        public upgrade: number;

        /** BattleSpirits reformed. */
        public reformed: number;

        /** BattleSpirits skin. */
        public skin: number;

        /** BattleSpirits hp. */
        public hp: number;

        /** BattleSpirits maxhp. */
        public maxhp: number;

        /** BattleSpirits speed. */
        public speed: number;

        /** BattleSpirits furypoint. */
        public furypoint: number;

        /** BattleSpirits propertylist. */
        public propertylist: number[];

        /** BattleSpirits basepropertylist. */
        public basepropertylist: number[];

        /** BattleSpirits buffpropertylist. */
        public buffpropertylist: number[];

        /** BattleSpirits slideacctime. */
        public slideacctime: number;

        /** BattleSpirits vertigotime. */
        public vertigotime: number;

        /** BattleSpirits shieldtime. */
        public shieldtime: number;

        /** BattleSpirits shieldvalue. */
        public shieldvalue: number;

        /**
         * Creates a new BattleSpirits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSpirits instance
         */
        public static create(properties?: IBattleSpirits): BattleSpirits;

        /**
         * Encodes the specified BattleSpirits message. Does not implicitly {@link BattleSpirits.verify|verify} messages.
         * @param message BattleSpirits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleSpirits, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleSpirits message, length delimited. Does not implicitly {@link BattleSpirits.verify|verify} messages.
         * @param message BattleSpirits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleSpirits, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleSpirits message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSpirits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleSpirits;

        /**
         * Decodes a BattleSpirits message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSpirits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleSpirits;

        /**
         * Verifies a BattleSpirits message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSpirits message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSpirits
         */
        public static fromObject(object: { [k: string]: any }): BattleSpirits;

        /**
         * Creates a plain object from a BattleSpirits message. Also converts values to other types if specified.
         * @param message BattleSpirits
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleSpirits, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSpirits to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BattleSettle. */
    interface IBattleSettle {

        /** BattleSettle star */
        star?: (number|null);

        /** BattleSettle gold */
        gold?: (number|null);

        /** BattleSettle exp */
        exp?: (number|null);

        /** BattleSettle firstpass */
        firstpass?: (boolean|null);

        /** BattleSettle droplist */
        droplist?: (IMDropList|null);
    }

    /** Represents a BattleSettle. */
    class BattleSettle implements IBattleSettle {

        /**
         * Constructs a new BattleSettle.
         * @param [properties] Properties to set
         */
        constructor(properties?: IBattleSettle);

        /** BattleSettle star. */
        public star: number;

        /** BattleSettle gold. */
        public gold: number;

        /** BattleSettle exp. */
        public exp: number;

        /** BattleSettle firstpass. */
        public firstpass: boolean;

        /** BattleSettle droplist. */
        public droplist?: (IMDropList|null);

        /**
         * Creates a new BattleSettle instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BattleSettle instance
         */
        public static create(properties?: IBattleSettle): BattleSettle;

        /**
         * Encodes the specified BattleSettle message. Does not implicitly {@link BattleSettle.verify|verify} messages.
         * @param message BattleSettle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IBattleSettle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BattleSettle message, length delimited. Does not implicitly {@link BattleSettle.verify|verify} messages.
         * @param message BattleSettle message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IBattleSettle, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BattleSettle message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BattleSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): BattleSettle;

        /**
         * Decodes a BattleSettle message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BattleSettle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): BattleSettle;

        /**
         * Verifies a BattleSettle message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BattleSettle message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BattleSettle
         */
        public static fromObject(object: { [k: string]: any }): BattleSettle;

        /**
         * Creates a plain object from a BattleSettle message. Also converts values to other types if specified.
         * @param message BattleSettle
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: BattleSettle, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BattleSettle to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MDropData. */
    interface IMDropData {

        /** MDropData type */
        type?: (number|null);

        /** MDropData index */
        index?: (number|null);

        /** MDropData amount */
        amount?: (number|null);
    }

    /** Represents a MDropData. */
    class MDropData implements IMDropData {

        /**
         * Constructs a new MDropData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IMDropData);

        /** MDropData type. */
        public type: number;

        /** MDropData index. */
        public index: number;

        /** MDropData amount. */
        public amount: number;

        /**
         * Creates a new MDropData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MDropData instance
         */
        public static create(properties?: IMDropData): MDropData;

        /**
         * Encodes the specified MDropData message. Does not implicitly {@link MDropData.verify|verify} messages.
         * @param message MDropData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IMDropData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MDropData message, length delimited. Does not implicitly {@link MDropData.verify|verify} messages.
         * @param message MDropData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IMDropData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MDropData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MDropData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): MDropData;

        /**
         * Decodes a MDropData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MDropData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): MDropData;

        /**
         * Verifies a MDropData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MDropData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MDropData
         */
        public static fromObject(object: { [k: string]: any }): MDropData;

        /**
         * Creates a plain object from a MDropData message. Also converts values to other types if specified.
         * @param message MDropData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MDropData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MDropData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MDropList. */
    interface IMDropList {

        /** MDropList drops */
        drops?: (IMDropData[]|null);
    }

    /** Represents a MDropList. */
    class MDropList implements IMDropList {

        /**
         * Constructs a new MDropList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IMDropList);

        /** MDropList drops. */
        public drops: IMDropData[];

        /**
         * Creates a new MDropList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MDropList instance
         */
        public static create(properties?: IMDropList): MDropList;

        /**
         * Encodes the specified MDropList message. Does not implicitly {@link MDropList.verify|verify} messages.
         * @param message MDropList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IMDropList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MDropList message, length delimited. Does not implicitly {@link MDropList.verify|verify} messages.
         * @param message MDropList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IMDropList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MDropList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MDropList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): MDropList;

        /**
         * Decodes a MDropList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MDropList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): MDropList;

        /**
         * Verifies a MDropList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MDropList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MDropList
         */
        public static fromObject(object: { [k: string]: any }): MDropList;

        /**
         * Creates a plain object from a MDropList message. Also converts values to other types if specified.
         * @param message MDropList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MDropList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MDropList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceAllEquipmentInfo. */
    interface IDceAllEquipmentInfo {
    }

    /** Represents a DceAllEquipmentInfo. */
    class DceAllEquipmentInfo implements IDceAllEquipmentInfo {
public send():void;

        /**
         * Constructs a new DceAllEquipmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceAllEquipmentInfo);

        /**
         * Creates a new DceAllEquipmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceAllEquipmentInfo instance
         */
        public static create(properties?: IDceAllEquipmentInfo): DceAllEquipmentInfo;

        /**
         * Encodes the specified DceAllEquipmentInfo message. Does not implicitly {@link DceAllEquipmentInfo.verify|verify} messages.
         * @param message DceAllEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceAllEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceAllEquipmentInfo message, length delimited. Does not implicitly {@link DceAllEquipmentInfo.verify|verify} messages.
         * @param message DceAllEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceAllEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceAllEquipmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceAllEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceAllEquipmentInfo;

        /**
         * Decodes a DceAllEquipmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceAllEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceAllEquipmentInfo;

        /**
         * Verifies a DceAllEquipmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceAllEquipmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceAllEquipmentInfo
         */
        public static fromObject(object: { [k: string]: any }): DceAllEquipmentInfo;

        /**
         * Creates a plain object from a DceAllEquipmentInfo message. Also converts values to other types if specified.
         * @param message DceAllEquipmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceAllEquipmentInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceAllEquipmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceBattleOpt. */
    interface IDceBattleOpt {

        /** DceBattleOpt battleid */
        battleid?: (string|null);

        /** DceBattleOpt opt_type */
        opt_type?: (number|null);

        /** DceBattleOpt id */
        id?: (string|null);

        /** DceBattleOpt param */
        param?: (number|null);

        /** DceBattleOpt transparam */
        transparam?: (number|null);
    }

    /** Represents a DceBattleOpt. */
    class DceBattleOpt implements IDceBattleOpt {
public send():void;

        /**
         * Constructs a new DceBattleOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceBattleOpt);

        /** DceBattleOpt battleid. */
        public battleid: string;

        /** DceBattleOpt opt_type. */
        public opt_type: number;

        /** DceBattleOpt id. */
        public id: string;

        /** DceBattleOpt param. */
        public param: number;

        /** DceBattleOpt transparam. */
        public transparam: number;

        /**
         * Creates a new DceBattleOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceBattleOpt instance
         */
        public static create(properties?: IDceBattleOpt): DceBattleOpt;

        /**
         * Encodes the specified DceBattleOpt message. Does not implicitly {@link DceBattleOpt.verify|verify} messages.
         * @param message DceBattleOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceBattleOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceBattleOpt message, length delimited. Does not implicitly {@link DceBattleOpt.verify|verify} messages.
         * @param message DceBattleOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceBattleOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceBattleOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceBattleOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceBattleOpt;

        /**
         * Decodes a DceBattleOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceBattleOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceBattleOpt;

        /**
         * Verifies a DceBattleOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceBattleOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceBattleOpt
         */
        public static fromObject(object: { [k: string]: any }): DceBattleOpt;

        /**
         * Creates a plain object from a DceBattleOpt message. Also converts values to other types if specified.
         * @param message DceBattleOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceBattleOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceBattleOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceBattleStart. */
    interface IDceBattleStart {

        /** DceBattleStart targetID */
        targetID?: (string|null);

        /** DceBattleStart type */
        type?: (number|null);
    }

    /** Represents a DceBattleStart. */
    class DceBattleStart implements IDceBattleStart {
public send():void;

        /**
         * Constructs a new DceBattleStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceBattleStart);

        /** DceBattleStart targetID. */
        public targetID: string;

        /** DceBattleStart type. */
        public type: number;

        /**
         * Creates a new DceBattleStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceBattleStart instance
         */
        public static create(properties?: IDceBattleStart): DceBattleStart;

        /**
         * Encodes the specified DceBattleStart message. Does not implicitly {@link DceBattleStart.verify|verify} messages.
         * @param message DceBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceBattleStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceBattleStart message, length delimited. Does not implicitly {@link DceBattleStart.verify|verify} messages.
         * @param message DceBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceBattleStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceBattleStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceBattleStart;

        /**
         * Decodes a DceBattleStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceBattleStart;

        /**
         * Verifies a DceBattleStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceBattleStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceBattleStart
         */
        public static fromObject(object: { [k: string]: any }): DceBattleStart;

        /**
         * Creates a plain object from a DceBattleStart message. Also converts values to other types if specified.
         * @param message DceBattleStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceBattleStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceBattleStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceBattleSweep. */
    interface IDceBattleSweep {

        /** DceBattleSweep targetID */
        targetID?: (string|null);

        /** DceBattleSweep type */
        type?: (number|null);

        /** DceBattleSweep times */
        times?: (number|null);
    }

    /** Represents a DceBattleSweep. */
    class DceBattleSweep implements IDceBattleSweep {
public send():void;

        /**
         * Constructs a new DceBattleSweep.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceBattleSweep);

        /** DceBattleSweep targetID. */
        public targetID: string;

        /** DceBattleSweep type. */
        public type: number;

        /** DceBattleSweep times. */
        public times: number;

        /**
         * Creates a new DceBattleSweep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceBattleSweep instance
         */
        public static create(properties?: IDceBattleSweep): DceBattleSweep;

        /**
         * Encodes the specified DceBattleSweep message. Does not implicitly {@link DceBattleSweep.verify|verify} messages.
         * @param message DceBattleSweep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceBattleSweep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceBattleSweep message, length delimited. Does not implicitly {@link DceBattleSweep.verify|verify} messages.
         * @param message DceBattleSweep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceBattleSweep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceBattleSweep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceBattleSweep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceBattleSweep;

        /**
         * Decodes a DceBattleSweep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceBattleSweep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceBattleSweep;

        /**
         * Verifies a DceBattleSweep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceBattleSweep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceBattleSweep
         */
        public static fromObject(object: { [k: string]: any }): DceBattleSweep;

        /**
         * Creates a plain object from a DceBattleSweep message. Also converts values to other types if specified.
         * @param message DceBattleSweep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceBattleSweep, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceBattleSweep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceChangeSpiritSkin. */
    interface IDceChangeSpiritSkin {

        /** DceChangeSpiritSkin tid */
        tid?: (number|null);

        /** DceChangeSpiritSkin skin_id */
        skin_id?: (number|null);
    }

    /** Represents a DceChangeSpiritSkin. */
    class DceChangeSpiritSkin implements IDceChangeSpiritSkin {
public send():void;

        /**
         * Constructs a new DceChangeSpiritSkin.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceChangeSpiritSkin);

        /** DceChangeSpiritSkin tid. */
        public tid: number;

        /** DceChangeSpiritSkin skin_id. */
        public skin_id: number;

        /**
         * Creates a new DceChangeSpiritSkin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceChangeSpiritSkin instance
         */
        public static create(properties?: IDceChangeSpiritSkin): DceChangeSpiritSkin;

        /**
         * Encodes the specified DceChangeSpiritSkin message. Does not implicitly {@link DceChangeSpiritSkin.verify|verify} messages.
         * @param message DceChangeSpiritSkin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceChangeSpiritSkin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceChangeSpiritSkin message, length delimited. Does not implicitly {@link DceChangeSpiritSkin.verify|verify} messages.
         * @param message DceChangeSpiritSkin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceChangeSpiritSkin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceChangeSpiritSkin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceChangeSpiritSkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceChangeSpiritSkin;

        /**
         * Decodes a DceChangeSpiritSkin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceChangeSpiritSkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceChangeSpiritSkin;

        /**
         * Verifies a DceChangeSpiritSkin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceChangeSpiritSkin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceChangeSpiritSkin
         */
        public static fromObject(object: { [k: string]: any }): DceChangeSpiritSkin;

        /**
         * Creates a plain object from a DceChangeSpiritSkin message. Also converts values to other types if specified.
         * @param message DceChangeSpiritSkin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceChangeSpiritSkin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceChangeSpiritSkin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceCombineEquipmentDebris. */
    interface IDceCombineEquipmentDebris {

        /** DceCombineEquipmentDebris id */
        id?: (number[]|null);
    }

    /** Represents a DceCombineEquipmentDebris. */
    class DceCombineEquipmentDebris implements IDceCombineEquipmentDebris {
public send():void;

        /**
         * Constructs a new DceCombineEquipmentDebris.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceCombineEquipmentDebris);

        /** DceCombineEquipmentDebris id. */
        public id: number[];

        /**
         * Creates a new DceCombineEquipmentDebris instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceCombineEquipmentDebris instance
         */
        public static create(properties?: IDceCombineEquipmentDebris): DceCombineEquipmentDebris;

        /**
         * Encodes the specified DceCombineEquipmentDebris message. Does not implicitly {@link DceCombineEquipmentDebris.verify|verify} messages.
         * @param message DceCombineEquipmentDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceCombineEquipmentDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceCombineEquipmentDebris message, length delimited. Does not implicitly {@link DceCombineEquipmentDebris.verify|verify} messages.
         * @param message DceCombineEquipmentDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceCombineEquipmentDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceCombineEquipmentDebris message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceCombineEquipmentDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceCombineEquipmentDebris;

        /**
         * Decodes a DceCombineEquipmentDebris message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceCombineEquipmentDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceCombineEquipmentDebris;

        /**
         * Verifies a DceCombineEquipmentDebris message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceCombineEquipmentDebris message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceCombineEquipmentDebris
         */
        public static fromObject(object: { [k: string]: any }): DceCombineEquipmentDebris;

        /**
         * Creates a plain object from a DceCombineEquipmentDebris message. Also converts values to other types if specified.
         * @param message DceCombineEquipmentDebris
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceCombineEquipmentDebris, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceCombineEquipmentDebris to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceCombineProto. */
    interface IDceCombineProto {

        /** DceCombineProto proto_list */
        proto_list?: (string[]|null);
    }

    /** Represents a DceCombineProto. */
    class DceCombineProto implements IDceCombineProto {
public send():void;

        /**
         * Constructs a new DceCombineProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceCombineProto);

        /** DceCombineProto proto_list. */
        public proto_list: string[];

        /**
         * Creates a new DceCombineProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceCombineProto instance
         */
        public static create(properties?: IDceCombineProto): DceCombineProto;

        /**
         * Encodes the specified DceCombineProto message. Does not implicitly {@link DceCombineProto.verify|verify} messages.
         * @param message DceCombineProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceCombineProto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceCombineProto message, length delimited. Does not implicitly {@link DceCombineProto.verify|verify} messages.
         * @param message DceCombineProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceCombineProto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceCombineProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceCombineProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceCombineProto;

        /**
         * Decodes a DceCombineProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceCombineProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceCombineProto;

        /**
         * Verifies a DceCombineProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceCombineProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceCombineProto
         */
        public static fromObject(object: { [k: string]: any }): DceCombineProto;

        /**
         * Creates a plain object from a DceCombineProto message. Also converts values to other types if specified.
         * @param message DceCombineProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceCombineProto, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceCombineProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceCombineSpiritDebris. */
    interface IDceCombineSpiritDebris {

        /** DceCombineSpiritDebris id */
        id?: (number[]|null);

        /** DceCombineSpiritDebris type */
        type?: (number|null);
    }

    /** Represents a DceCombineSpiritDebris. */
    class DceCombineSpiritDebris implements IDceCombineSpiritDebris {
public send():void;

        /**
         * Constructs a new DceCombineSpiritDebris.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceCombineSpiritDebris);

        /** DceCombineSpiritDebris id. */
        public id: number[];

        /** DceCombineSpiritDebris type. */
        public type: number;

        /**
         * Creates a new DceCombineSpiritDebris instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceCombineSpiritDebris instance
         */
        public static create(properties?: IDceCombineSpiritDebris): DceCombineSpiritDebris;

        /**
         * Encodes the specified DceCombineSpiritDebris message. Does not implicitly {@link DceCombineSpiritDebris.verify|verify} messages.
         * @param message DceCombineSpiritDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceCombineSpiritDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceCombineSpiritDebris message, length delimited. Does not implicitly {@link DceCombineSpiritDebris.verify|verify} messages.
         * @param message DceCombineSpiritDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceCombineSpiritDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceCombineSpiritDebris message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceCombineSpiritDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceCombineSpiritDebris;

        /**
         * Decodes a DceCombineSpiritDebris message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceCombineSpiritDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceCombineSpiritDebris;

        /**
         * Verifies a DceCombineSpiritDebris message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceCombineSpiritDebris message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceCombineSpiritDebris
         */
        public static fromObject(object: { [k: string]: any }): DceCombineSpiritDebris;

        /**
         * Creates a plain object from a DceCombineSpiritDebris message. Also converts values to other types if specified.
         * @param message DceCombineSpiritDebris
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceCombineSpiritDebris, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceCombineSpiritDebris to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceDecreeShopOpt. */
    interface IDceDecreeShopOpt {

        /** DceDecreeShopOpt type */
        type?: (number|null);

        /** DceDecreeShopOpt index */
        index?: (number|null);
    }

    /** Represents a DceDecreeShopOpt. */
    class DceDecreeShopOpt implements IDceDecreeShopOpt {
public send():void;

        /**
         * Constructs a new DceDecreeShopOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceDecreeShopOpt);

        /** DceDecreeShopOpt type. */
        public type: number;

        /** DceDecreeShopOpt index. */
        public index: number;

        /**
         * Creates a new DceDecreeShopOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceDecreeShopOpt instance
         */
        public static create(properties?: IDceDecreeShopOpt): DceDecreeShopOpt;

        /**
         * Encodes the specified DceDecreeShopOpt message. Does not implicitly {@link DceDecreeShopOpt.verify|verify} messages.
         * @param message DceDecreeShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceDecreeShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceDecreeShopOpt message, length delimited. Does not implicitly {@link DceDecreeShopOpt.verify|verify} messages.
         * @param message DceDecreeShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceDecreeShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceDecreeShopOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceDecreeShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceDecreeShopOpt;

        /**
         * Decodes a DceDecreeShopOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceDecreeShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceDecreeShopOpt;

        /**
         * Verifies a DceDecreeShopOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceDecreeShopOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceDecreeShopOpt
         */
        public static fromObject(object: { [k: string]: any }): DceDecreeShopOpt;

        /**
         * Creates a plain object from a DceDecreeShopOpt message. Also converts values to other types if specified.
         * @param message DceDecreeShopOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceDecreeShopOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceDecreeShopOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceDevilTowerOpt. */
    interface IDceDevilTowerOpt {

        /** DceDevilTowerOpt type */
        type?: (number|null);
    }

    /** Represents a DceDevilTowerOpt. */
    class DceDevilTowerOpt implements IDceDevilTowerOpt {
public send():void;

        /**
         * Constructs a new DceDevilTowerOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceDevilTowerOpt);

        /** DceDevilTowerOpt type. */
        public type: number;

        /**
         * Creates a new DceDevilTowerOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceDevilTowerOpt instance
         */
        public static create(properties?: IDceDevilTowerOpt): DceDevilTowerOpt;

        /**
         * Encodes the specified DceDevilTowerOpt message. Does not implicitly {@link DceDevilTowerOpt.verify|verify} messages.
         * @param message DceDevilTowerOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceDevilTowerOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceDevilTowerOpt message, length delimited. Does not implicitly {@link DceDevilTowerOpt.verify|verify} messages.
         * @param message DceDevilTowerOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceDevilTowerOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceDevilTowerOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceDevilTowerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceDevilTowerOpt;

        /**
         * Decodes a DceDevilTowerOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceDevilTowerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceDevilTowerOpt;

        /**
         * Verifies a DceDevilTowerOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceDevilTowerOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceDevilTowerOpt
         */
        public static fromObject(object: { [k: string]: any }): DceDevilTowerOpt;

        /**
         * Creates a plain object from a DceDevilTowerOpt message. Also converts values to other types if specified.
         * @param message DceDevilTowerOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceDevilTowerOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceDevilTowerOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceDugeonOpt. */
    interface IDceDugeonOpt {

        /** DceDugeonOpt type */
        type?: (number|null);
    }

    /** Represents a DceDugeonOpt. */
    class DceDugeonOpt implements IDceDugeonOpt {
public send():void;

        /**
         * Constructs a new DceDugeonOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceDugeonOpt);

        /** DceDugeonOpt type. */
        public type: number;

        /**
         * Creates a new DceDugeonOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceDugeonOpt instance
         */
        public static create(properties?: IDceDugeonOpt): DceDugeonOpt;

        /**
         * Encodes the specified DceDugeonOpt message. Does not implicitly {@link DceDugeonOpt.verify|verify} messages.
         * @param message DceDugeonOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceDugeonOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceDugeonOpt message, length delimited. Does not implicitly {@link DceDugeonOpt.verify|verify} messages.
         * @param message DceDugeonOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceDugeonOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceDugeonOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceDugeonOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceDugeonOpt;

        /**
         * Decodes a DceDugeonOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceDugeonOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceDugeonOpt;

        /**
         * Verifies a DceDugeonOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceDugeonOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceDugeonOpt
         */
        public static fromObject(object: { [k: string]: any }): DceDugeonOpt;

        /**
         * Creates a plain object from a DceDugeonOpt message. Also converts values to other types if specified.
         * @param message DceDugeonOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceDugeonOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceDugeonOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceEquipmentDebrisList. */
    interface IDceEquipmentDebrisList {
    }

    /** Represents a DceEquipmentDebrisList. */
    class DceEquipmentDebrisList implements IDceEquipmentDebrisList {
public send():void;

        /**
         * Constructs a new DceEquipmentDebrisList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceEquipmentDebrisList);

        /**
         * Creates a new DceEquipmentDebrisList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceEquipmentDebrisList instance
         */
        public static create(properties?: IDceEquipmentDebrisList): DceEquipmentDebrisList;

        /**
         * Encodes the specified DceEquipmentDebrisList message. Does not implicitly {@link DceEquipmentDebrisList.verify|verify} messages.
         * @param message DceEquipmentDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceEquipmentDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceEquipmentDebrisList message, length delimited. Does not implicitly {@link DceEquipmentDebrisList.verify|verify} messages.
         * @param message DceEquipmentDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceEquipmentDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceEquipmentDebrisList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceEquipmentDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceEquipmentDebrisList;

        /**
         * Decodes a DceEquipmentDebrisList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceEquipmentDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceEquipmentDebrisList;

        /**
         * Verifies a DceEquipmentDebrisList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceEquipmentDebrisList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceEquipmentDebrisList
         */
        public static fromObject(object: { [k: string]: any }): DceEquipmentDebrisList;

        /**
         * Creates a plain object from a DceEquipmentDebrisList message. Also converts values to other types if specified.
         * @param message DceEquipmentDebrisList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceEquipmentDebrisList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceEquipmentDebrisList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceEquipmentEnhance. */
    interface IDceEquipmentEnhance {

        /** DceEquipmentEnhance oid */
        oid?: (string|null);
    }

    /** Represents a DceEquipmentEnhance. */
    class DceEquipmentEnhance implements IDceEquipmentEnhance {
public send():void;

        /**
         * Constructs a new DceEquipmentEnhance.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceEquipmentEnhance);

        /** DceEquipmentEnhance oid. */
        public oid: string;

        /**
         * Creates a new DceEquipmentEnhance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceEquipmentEnhance instance
         */
        public static create(properties?: IDceEquipmentEnhance): DceEquipmentEnhance;

        /**
         * Encodes the specified DceEquipmentEnhance message. Does not implicitly {@link DceEquipmentEnhance.verify|verify} messages.
         * @param message DceEquipmentEnhance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceEquipmentEnhance, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceEquipmentEnhance message, length delimited. Does not implicitly {@link DceEquipmentEnhance.verify|verify} messages.
         * @param message DceEquipmentEnhance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceEquipmentEnhance, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceEquipmentEnhance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceEquipmentEnhance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceEquipmentEnhance;

        /**
         * Decodes a DceEquipmentEnhance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceEquipmentEnhance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceEquipmentEnhance;

        /**
         * Verifies a DceEquipmentEnhance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceEquipmentEnhance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceEquipmentEnhance
         */
        public static fromObject(object: { [k: string]: any }): DceEquipmentEnhance;

        /**
         * Creates a plain object from a DceEquipmentEnhance message. Also converts values to other types if specified.
         * @param message DceEquipmentEnhance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceEquipmentEnhance, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceEquipmentEnhance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceEquipmentGearUp. */
    interface IDceEquipmentGearUp {

        /** DceEquipmentGearUp oid */
        oid?: (string|null);

        /** DceEquipmentGearUp pos */
        pos?: (number|null);
    }

    /** Represents a DceEquipmentGearUp. */
    class DceEquipmentGearUp implements IDceEquipmentGearUp {
public send():void;

        /**
         * Constructs a new DceEquipmentGearUp.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceEquipmentGearUp);

        /** DceEquipmentGearUp oid. */
        public oid: string;

        /** DceEquipmentGearUp pos. */
        public pos: number;

        /**
         * Creates a new DceEquipmentGearUp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceEquipmentGearUp instance
         */
        public static create(properties?: IDceEquipmentGearUp): DceEquipmentGearUp;

        /**
         * Encodes the specified DceEquipmentGearUp message. Does not implicitly {@link DceEquipmentGearUp.verify|verify} messages.
         * @param message DceEquipmentGearUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceEquipmentGearUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceEquipmentGearUp message, length delimited. Does not implicitly {@link DceEquipmentGearUp.verify|verify} messages.
         * @param message DceEquipmentGearUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceEquipmentGearUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceEquipmentGearUp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceEquipmentGearUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceEquipmentGearUp;

        /**
         * Decodes a DceEquipmentGearUp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceEquipmentGearUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceEquipmentGearUp;

        /**
         * Verifies a DceEquipmentGearUp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceEquipmentGearUp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceEquipmentGearUp
         */
        public static fromObject(object: { [k: string]: any }): DceEquipmentGearUp;

        /**
         * Creates a plain object from a DceEquipmentGearUp message. Also converts values to other types if specified.
         * @param message DceEquipmentGearUp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceEquipmentGearUp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceEquipmentGearUp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceEquipmentRefine. */
    interface IDceEquipmentRefine {

        /** DceEquipmentRefine oid */
        oid?: (string|null);
    }

    /** Represents a DceEquipmentRefine. */
    class DceEquipmentRefine implements IDceEquipmentRefine {
public send():void;

        /**
         * Constructs a new DceEquipmentRefine.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceEquipmentRefine);

        /** DceEquipmentRefine oid. */
        public oid: string;

        /**
         * Creates a new DceEquipmentRefine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceEquipmentRefine instance
         */
        public static create(properties?: IDceEquipmentRefine): DceEquipmentRefine;

        /**
         * Encodes the specified DceEquipmentRefine message. Does not implicitly {@link DceEquipmentRefine.verify|verify} messages.
         * @param message DceEquipmentRefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceEquipmentRefine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceEquipmentRefine message, length delimited. Does not implicitly {@link DceEquipmentRefine.verify|verify} messages.
         * @param message DceEquipmentRefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceEquipmentRefine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceEquipmentRefine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceEquipmentRefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceEquipmentRefine;

        /**
         * Decodes a DceEquipmentRefine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceEquipmentRefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceEquipmentRefine;

        /**
         * Verifies a DceEquipmentRefine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceEquipmentRefine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceEquipmentRefine
         */
        public static fromObject(object: { [k: string]: any }): DceEquipmentRefine;

        /**
         * Creates a plain object from a DceEquipmentRefine message. Also converts values to other types if specified.
         * @param message DceEquipmentRefine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceEquipmentRefine, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceEquipmentRefine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceHeartbeat. */
    interface IDceHeartbeat {
    }

    /** Represents a DceHeartbeat. */
    class DceHeartbeat implements IDceHeartbeat {
public send():void;

        /**
         * Constructs a new DceHeartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceHeartbeat);

        /**
         * Creates a new DceHeartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceHeartbeat instance
         */
        public static create(properties?: IDceHeartbeat): DceHeartbeat;

        /**
         * Encodes the specified DceHeartbeat message. Does not implicitly {@link DceHeartbeat.verify|verify} messages.
         * @param message DceHeartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceHeartbeat message, length delimited. Does not implicitly {@link DceHeartbeat.verify|verify} messages.
         * @param message DceHeartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceHeartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceHeartbeat;

        /**
         * Decodes a DceHeartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceHeartbeat;

        /**
         * Verifies a DceHeartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceHeartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceHeartbeat
         */
        public static fromObject(object: { [k: string]: any }): DceHeartbeat;

        /**
         * Creates a plain object from a DceHeartbeat message. Also converts values to other types if specified.
         * @param message DceHeartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceHeartbeat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceHeartbeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceInstituteOpt. */
    interface IDceInstituteOpt {

        /** DceInstituteOpt type */
        type?: (number|null);

        /** DceInstituteOpt instituteid */
        instituteid?: (number|null);
    }

    /** Represents a DceInstituteOpt. */
    class DceInstituteOpt implements IDceInstituteOpt {
public send():void;

        /**
         * Constructs a new DceInstituteOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceInstituteOpt);

        /** DceInstituteOpt type. */
        public type: number;

        /** DceInstituteOpt instituteid. */
        public instituteid: number;

        /**
         * Creates a new DceInstituteOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceInstituteOpt instance
         */
        public static create(properties?: IDceInstituteOpt): DceInstituteOpt;

        /**
         * Encodes the specified DceInstituteOpt message. Does not implicitly {@link DceInstituteOpt.verify|verify} messages.
         * @param message DceInstituteOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceInstituteOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceInstituteOpt message, length delimited. Does not implicitly {@link DceInstituteOpt.verify|verify} messages.
         * @param message DceInstituteOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceInstituteOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceInstituteOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceInstituteOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceInstituteOpt;

        /**
         * Decodes a DceInstituteOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceInstituteOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceInstituteOpt;

        /**
         * Verifies a DceInstituteOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceInstituteOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceInstituteOpt
         */
        public static fromObject(object: { [k: string]: any }): DceInstituteOpt;

        /**
         * Creates a plain object from a DceInstituteOpt message. Also converts values to other types if specified.
         * @param message DceInstituteOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceInstituteOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceInstituteOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceMailOpt. */
    interface IDceMailOpt {

        /** DceMailOpt type */
        type?: (number|null);

        /** DceMailOpt mailtype */
        mailtype?: (number|null);

        /** DceMailOpt id */
        id?: (string|null);

        /** DceMailOpt receiver */
        receiver?: (string|null);

        /** DceMailOpt receiveruid */
        receiveruid?: (string|null);

        /** DceMailOpt content */
        content?: (string|null);
    }

    /** Represents a DceMailOpt. */
    class DceMailOpt implements IDceMailOpt {
public send():void;

        /**
         * Constructs a new DceMailOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceMailOpt);

        /** DceMailOpt type. */
        public type: number;

        /** DceMailOpt mailtype. */
        public mailtype: number;

        /** DceMailOpt id. */
        public id: string;

        /** DceMailOpt receiver. */
        public receiver: string;

        /** DceMailOpt receiveruid. */
        public receiveruid: string;

        /** DceMailOpt content. */
        public content: string;

        /**
         * Creates a new DceMailOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceMailOpt instance
         */
        public static create(properties?: IDceMailOpt): DceMailOpt;

        /**
         * Encodes the specified DceMailOpt message. Does not implicitly {@link DceMailOpt.verify|verify} messages.
         * @param message DceMailOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceMailOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceMailOpt message, length delimited. Does not implicitly {@link DceMailOpt.verify|verify} messages.
         * @param message DceMailOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceMailOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceMailOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceMailOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceMailOpt;

        /**
         * Decodes a DceMailOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceMailOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceMailOpt;

        /**
         * Verifies a DceMailOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceMailOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceMailOpt
         */
        public static fromObject(object: { [k: string]: any }): DceMailOpt;

        /**
         * Creates a plain object from a DceMailOpt message. Also converts values to other types if specified.
         * @param message DceMailOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceMailOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceMailOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceResetLeader. */
    interface IDceResetLeader {

        /** DceResetLeader pos */
        pos?: (number|null);
    }

    /** Represents a DceResetLeader. */
    class DceResetLeader implements IDceResetLeader {
public send():void;

        /**
         * Constructs a new DceResetLeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceResetLeader);

        /** DceResetLeader pos. */
        public pos: number;

        /**
         * Creates a new DceResetLeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceResetLeader instance
         */
        public static create(properties?: IDceResetLeader): DceResetLeader;

        /**
         * Encodes the specified DceResetLeader message. Does not implicitly {@link DceResetLeader.verify|verify} messages.
         * @param message DceResetLeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceResetLeader, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceResetLeader message, length delimited. Does not implicitly {@link DceResetLeader.verify|verify} messages.
         * @param message DceResetLeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceResetLeader, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceResetLeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceResetLeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceResetLeader;

        /**
         * Decodes a DceResetLeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceResetLeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceResetLeader;

        /**
         * Verifies a DceResetLeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceResetLeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceResetLeader
         */
        public static fromObject(object: { [k: string]: any }): DceResetLeader;

        /**
         * Creates a plain object from a DceResetLeader message. Also converts values to other types if specified.
         * @param message DceResetLeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceResetLeader, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceResetLeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceShopOpt. */
    interface IDceShopOpt {

        /** DceShopOpt type */
        type?: (number|null);

        /** DceShopOpt shopid */
        shopid?: (number|null);

        /** DceShopOpt count */
        count?: (number|null);
    }

    /** Represents a DceShopOpt. */
    class DceShopOpt implements IDceShopOpt {
public send():void;

        /**
         * Constructs a new DceShopOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceShopOpt);

        /** DceShopOpt type. */
        public type: number;

        /** DceShopOpt shopid. */
        public shopid: number;

        /** DceShopOpt count. */
        public count: number;

        /**
         * Creates a new DceShopOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceShopOpt instance
         */
        public static create(properties?: IDceShopOpt): DceShopOpt;

        /**
         * Encodes the specified DceShopOpt message. Does not implicitly {@link DceShopOpt.verify|verify} messages.
         * @param message DceShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceShopOpt message, length delimited. Does not implicitly {@link DceShopOpt.verify|verify} messages.
         * @param message DceShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceShopOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceShopOpt;

        /**
         * Decodes a DceShopOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceShopOpt;

        /**
         * Verifies a DceShopOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceShopOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceShopOpt
         */
        public static fromObject(object: { [k: string]: any }): DceShopOpt;

        /**
         * Creates a plain object from a DceShopOpt message. Also converts values to other types if specified.
         * @param message DceShopOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceShopOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceShopOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceShowFormationInfo. */
    interface IDceShowFormationInfo {
    }

    /** Represents a DceShowFormationInfo. */
    class DceShowFormationInfo implements IDceShowFormationInfo {
public send():void;

        /**
         * Constructs a new DceShowFormationInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceShowFormationInfo);

        /**
         * Creates a new DceShowFormationInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceShowFormationInfo instance
         */
        public static create(properties?: IDceShowFormationInfo): DceShowFormationInfo;

        /**
         * Encodes the specified DceShowFormationInfo message. Does not implicitly {@link DceShowFormationInfo.verify|verify} messages.
         * @param message DceShowFormationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceShowFormationInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceShowFormationInfo message, length delimited. Does not implicitly {@link DceShowFormationInfo.verify|verify} messages.
         * @param message DceShowFormationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceShowFormationInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceShowFormationInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceShowFormationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceShowFormationInfo;

        /**
         * Decodes a DceShowFormationInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceShowFormationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceShowFormationInfo;

        /**
         * Verifies a DceShowFormationInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceShowFormationInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceShowFormationInfo
         */
        public static fromObject(object: { [k: string]: any }): DceShowFormationInfo;

        /**
         * Creates a plain object from a DceShowFormationInfo message. Also converts values to other types if specified.
         * @param message DceShowFormationInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceShowFormationInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceShowFormationInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceShowSingleSpiritInfo. */
    interface IDceShowSingleSpiritInfo {

        /** DceShowSingleSpiritInfo id */
        id?: (string|null);
    }

    /** Represents a DceShowSingleSpiritInfo. */
    class DceShowSingleSpiritInfo implements IDceShowSingleSpiritInfo {
public send():void;

        /**
         * Constructs a new DceShowSingleSpiritInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceShowSingleSpiritInfo);

        /** DceShowSingleSpiritInfo id. */
        public id: string;

        /**
         * Creates a new DceShowSingleSpiritInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceShowSingleSpiritInfo instance
         */
        public static create(properties?: IDceShowSingleSpiritInfo): DceShowSingleSpiritInfo;

        /**
         * Encodes the specified DceShowSingleSpiritInfo message. Does not implicitly {@link DceShowSingleSpiritInfo.verify|verify} messages.
         * @param message DceShowSingleSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceShowSingleSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceShowSingleSpiritInfo message, length delimited. Does not implicitly {@link DceShowSingleSpiritInfo.verify|verify} messages.
         * @param message DceShowSingleSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceShowSingleSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceShowSingleSpiritInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceShowSingleSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceShowSingleSpiritInfo;

        /**
         * Decodes a DceShowSingleSpiritInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceShowSingleSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceShowSingleSpiritInfo;

        /**
         * Verifies a DceShowSingleSpiritInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceShowSingleSpiritInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceShowSingleSpiritInfo
         */
        public static fromObject(object: { [k: string]: any }): DceShowSingleSpiritInfo;

        /**
         * Creates a plain object from a DceShowSingleSpiritInfo message. Also converts values to other types if specified.
         * @param message DceShowSingleSpiritInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceShowSingleSpiritInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceShowSingleSpiritInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceShowSpiritInfo. */
    interface IDceShowSpiritInfo {

        /** DceShowSpiritInfo msgType */
        msgType?: (number|null);
    }

    /** Represents a DceShowSpiritInfo. */
    class DceShowSpiritInfo implements IDceShowSpiritInfo {
public send():void;

        /**
         * Constructs a new DceShowSpiritInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceShowSpiritInfo);

        /** DceShowSpiritInfo msgType. */
        public msgType: number;

        /**
         * Creates a new DceShowSpiritInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceShowSpiritInfo instance
         */
        public static create(properties?: IDceShowSpiritInfo): DceShowSpiritInfo;

        /**
         * Encodes the specified DceShowSpiritInfo message. Does not implicitly {@link DceShowSpiritInfo.verify|verify} messages.
         * @param message DceShowSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceShowSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceShowSpiritInfo message, length delimited. Does not implicitly {@link DceShowSpiritInfo.verify|verify} messages.
         * @param message DceShowSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceShowSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceShowSpiritInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceShowSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceShowSpiritInfo;

        /**
         * Decodes a DceShowSpiritInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceShowSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceShowSpiritInfo;

        /**
         * Verifies a DceShowSpiritInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceShowSpiritInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceShowSpiritInfo
         */
        public static fromObject(object: { [k: string]: any }): DceShowSpiritInfo;

        /**
         * Creates a plain object from a DceShowSpiritInfo message. Also converts values to other types if specified.
         * @param message DceShowSpiritInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceShowSpiritInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceShowSpiritInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceSpiritDebrisList. */
    interface IDceSpiritDebrisList {
    }

    /** Represents a DceSpiritDebrisList. */
    class DceSpiritDebrisList implements IDceSpiritDebrisList {
public send():void;

        /**
         * Constructs a new DceSpiritDebrisList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceSpiritDebrisList);

        /**
         * Creates a new DceSpiritDebrisList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceSpiritDebrisList instance
         */
        public static create(properties?: IDceSpiritDebrisList): DceSpiritDebrisList;

        /**
         * Encodes the specified DceSpiritDebrisList message. Does not implicitly {@link DceSpiritDebrisList.verify|verify} messages.
         * @param message DceSpiritDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceSpiritDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceSpiritDebrisList message, length delimited. Does not implicitly {@link DceSpiritDebrisList.verify|verify} messages.
         * @param message DceSpiritDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceSpiritDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceSpiritDebrisList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceSpiritDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceSpiritDebrisList;

        /**
         * Decodes a DceSpiritDebrisList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceSpiritDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceSpiritDebrisList;

        /**
         * Verifies a DceSpiritDebrisList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceSpiritDebrisList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceSpiritDebrisList
         */
        public static fromObject(object: { [k: string]: any }): DceSpiritDebrisList;

        /**
         * Creates a plain object from a DceSpiritDebrisList message. Also converts values to other types if specified.
         * @param message DceSpiritDebrisList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceSpiritDebrisList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceSpiritDebrisList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceSpiritDevelop. */
    interface IDceSpiritDevelop {

        /** DceSpiritDevelop id */
        id?: (number|null);

        /** DceSpiritDevelop action */
        action?: (number|null);
    }

    /** Represents a DceSpiritDevelop. */
    class DceSpiritDevelop implements IDceSpiritDevelop {
public send():void;

        /**
         * Constructs a new DceSpiritDevelop.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceSpiritDevelop);

        /** DceSpiritDevelop id. */
        public id: number;

        /** DceSpiritDevelop action. */
        public action: number;

        /**
         * Creates a new DceSpiritDevelop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceSpiritDevelop instance
         */
        public static create(properties?: IDceSpiritDevelop): DceSpiritDevelop;

        /**
         * Encodes the specified DceSpiritDevelop message. Does not implicitly {@link DceSpiritDevelop.verify|verify} messages.
         * @param message DceSpiritDevelop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceSpiritDevelop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceSpiritDevelop message, length delimited. Does not implicitly {@link DceSpiritDevelop.verify|verify} messages.
         * @param message DceSpiritDevelop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceSpiritDevelop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceSpiritDevelop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceSpiritDevelop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceSpiritDevelop;

        /**
         * Decodes a DceSpiritDevelop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceSpiritDevelop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceSpiritDevelop;

        /**
         * Verifies a DceSpiritDevelop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceSpiritDevelop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceSpiritDevelop
         */
        public static fromObject(object: { [k: string]: any }): DceSpiritDevelop;

        /**
         * Creates a plain object from a DceSpiritDevelop message. Also converts values to other types if specified.
         * @param message DceSpiritDevelop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceSpiritDevelop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceSpiritDevelop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceStageAward. */
    interface IDceStageAward {

        /** DceStageAward type */
        type?: (number|null);

        /** DceStageAward chapterid */
        chapterid?: (number|null);

        /** DceStageAward sceneid */
        sceneid?: (number|null);
    }

    /** Represents a DceStageAward. */
    class DceStageAward implements IDceStageAward {
public send():void;

        /**
         * Constructs a new DceStageAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceStageAward);

        /** DceStageAward type. */
        public type: number;

        /** DceStageAward chapterid. */
        public chapterid: number;

        /** DceStageAward sceneid. */
        public sceneid: number;

        /**
         * Creates a new DceStageAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceStageAward instance
         */
        public static create(properties?: IDceStageAward): DceStageAward;

        /**
         * Encodes the specified DceStageAward message. Does not implicitly {@link DceStageAward.verify|verify} messages.
         * @param message DceStageAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceStageAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceStageAward message, length delimited. Does not implicitly {@link DceStageAward.verify|verify} messages.
         * @param message DceStageAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceStageAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceStageAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceStageAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceStageAward;

        /**
         * Decodes a DceStageAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceStageAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceStageAward;

        /**
         * Verifies a DceStageAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceStageAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceStageAward
         */
        public static fromObject(object: { [k: string]: any }): DceStageAward;

        /**
         * Creates a plain object from a DceStageAward message. Also converts values to other types if specified.
         * @param message DceStageAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceStageAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceStageAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceStageExplore. */
    interface IDceStageExplore {

        /** DceStageExplore type */
        type?: (number|null);
    }

    /** Represents a DceStageExplore. */
    class DceStageExplore implements IDceStageExplore {
public send():void;

        /**
         * Constructs a new DceStageExplore.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceStageExplore);

        /** DceStageExplore type. */
        public type: number;

        /**
         * Creates a new DceStageExplore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceStageExplore instance
         */
        public static create(properties?: IDceStageExplore): DceStageExplore;

        /**
         * Encodes the specified DceStageExplore message. Does not implicitly {@link DceStageExplore.verify|verify} messages.
         * @param message DceStageExplore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceStageExplore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceStageExplore message, length delimited. Does not implicitly {@link DceStageExplore.verify|verify} messages.
         * @param message DceStageExplore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceStageExplore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceStageExplore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceStageExplore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceStageExplore;

        /**
         * Decodes a DceStageExplore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceStageExplore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceStageExplore;

        /**
         * Verifies a DceStageExplore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceStageExplore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceStageExplore
         */
        public static fromObject(object: { [k: string]: any }): DceStageExplore;

        /**
         * Creates a plain object from a DceStageExplore message. Also converts values to other types if specified.
         * @param message DceStageExplore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceStageExplore, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceStageExplore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceStageInfo. */
    interface IDceStageInfo {

        /** DceStageInfo type */
        type?: (number|null);

        /** DceStageInfo chapterid */
        chapterid?: (number|null);
    }

    /** Represents a DceStageInfo. */
    class DceStageInfo implements IDceStageInfo {
public send():void;

        /**
         * Constructs a new DceStageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceStageInfo);

        /** DceStageInfo type. */
        public type: number;

        /** DceStageInfo chapterid. */
        public chapterid: number;

        /**
         * Creates a new DceStageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceStageInfo instance
         */
        public static create(properties?: IDceStageInfo): DceStageInfo;

        /**
         * Encodes the specified DceStageInfo message. Does not implicitly {@link DceStageInfo.verify|verify} messages.
         * @param message DceStageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceStageInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceStageInfo message, length delimited. Does not implicitly {@link DceStageInfo.verify|verify} messages.
         * @param message DceStageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceStageInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceStageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceStageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceStageInfo;

        /**
         * Decodes a DceStageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceStageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceStageInfo;

        /**
         * Verifies a DceStageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceStageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceStageInfo
         */
        public static fromObject(object: { [k: string]: any }): DceStageInfo;

        /**
         * Creates a plain object from a DceStageInfo message. Also converts values to other types if specified.
         * @param message DceStageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceStageInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceStageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceStageReset. */
    interface IDceStageReset {

        /** DceStageReset stageid */
        stageid?: (number|null);

        /** DceStageReset type */
        type?: (number|null);
    }

    /** Represents a DceStageReset. */
    class DceStageReset implements IDceStageReset {
public send():void;

        /**
         * Constructs a new DceStageReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceStageReset);

        /** DceStageReset stageid. */
        public stageid: number;

        /** DceStageReset type. */
        public type: number;

        /**
         * Creates a new DceStageReset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceStageReset instance
         */
        public static create(properties?: IDceStageReset): DceStageReset;

        /**
         * Encodes the specified DceStageReset message. Does not implicitly {@link DceStageReset.verify|verify} messages.
         * @param message DceStageReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceStageReset, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceStageReset message, length delimited. Does not implicitly {@link DceStageReset.verify|verify} messages.
         * @param message DceStageReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceStageReset, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceStageReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceStageReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceStageReset;

        /**
         * Decodes a DceStageReset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceStageReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceStageReset;

        /**
         * Verifies a DceStageReset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceStageReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceStageReset
         */
        public static fromObject(object: { [k: string]: any }): DceStageReset;

        /**
         * Creates a plain object from a DceStageReset message. Also converts values to other types if specified.
         * @param message DceStageReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceStageReset, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceStageReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** StorageType enum. */
    enum StorageType {
        INVALID_BAG = 0,
        ITEM_BAG = 1
    }

    /** Properties of a DceStorageList. */
    interface IDceStorageList {

        /** DceStorageList type */
        type?: (StorageType|null);
    }

    /** Represents a DceStorageList. */
    class DceStorageList implements IDceStorageList {
public send():void;

        /**
         * Constructs a new DceStorageList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceStorageList);

        /** DceStorageList type. */
        public type: StorageType;

        /**
         * Creates a new DceStorageList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceStorageList instance
         */
        public static create(properties?: IDceStorageList): DceStorageList;

        /**
         * Encodes the specified DceStorageList message. Does not implicitly {@link DceStorageList.verify|verify} messages.
         * @param message DceStorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceStorageList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceStorageList message, length delimited. Does not implicitly {@link DceStorageList.verify|verify} messages.
         * @param message DceStorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceStorageList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceStorageList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceStorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceStorageList;

        /**
         * Decodes a DceStorageList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceStorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceStorageList;

        /**
         * Verifies a DceStorageList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceStorageList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceStorageList
         */
        public static fromObject(object: { [k: string]: any }): DceStorageList;

        /**
         * Creates a plain object from a DceStorageList message. Also converts values to other types if specified.
         * @param message DceStorageList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceStorageList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceStorageList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceSummon. */
    interface IDceSummon {

        /** DceSummon id */
        id?: (number|null);

        /** DceSummon mode */
        mode?: (number|null);
    }

    /** Represents a DceSummon. */
    class DceSummon implements IDceSummon {
public send():void;

        /**
         * Constructs a new DceSummon.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceSummon);

        /** DceSummon id. */
        public id: number;

        /** DceSummon mode. */
        public mode: number;

        /**
         * Creates a new DceSummon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceSummon instance
         */
        public static create(properties?: IDceSummon): DceSummon;

        /**
         * Encodes the specified DceSummon message. Does not implicitly {@link DceSummon.verify|verify} messages.
         * @param message DceSummon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceSummon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceSummon message, length delimited. Does not implicitly {@link DceSummon.verify|verify} messages.
         * @param message DceSummon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceSummon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceSummon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceSummon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceSummon;

        /**
         * Decodes a DceSummon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceSummon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceSummon;

        /**
         * Verifies a DceSummon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceSummon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceSummon
         */
        public static fromObject(object: { [k: string]: any }): DceSummon;

        /**
         * Creates a plain object from a DceSummon message. Also converts values to other types if specified.
         * @param message DceSummon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceSummon, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceSummon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceSummonInterface. */
    interface IDceSummonInterface {
    }

    /** Represents a DceSummonInterface. */
    class DceSummonInterface implements IDceSummonInterface {
public send():void;

        /**
         * Constructs a new DceSummonInterface.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceSummonInterface);

        /**
         * Creates a new DceSummonInterface instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceSummonInterface instance
         */
        public static create(properties?: IDceSummonInterface): DceSummonInterface;

        /**
         * Encodes the specified DceSummonInterface message. Does not implicitly {@link DceSummonInterface.verify|verify} messages.
         * @param message DceSummonInterface message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceSummonInterface, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceSummonInterface message, length delimited. Does not implicitly {@link DceSummonInterface.verify|verify} messages.
         * @param message DceSummonInterface message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceSummonInterface, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceSummonInterface message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceSummonInterface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceSummonInterface;

        /**
         * Decodes a DceSummonInterface message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceSummonInterface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceSummonInterface;

        /**
         * Verifies a DceSummonInterface message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceSummonInterface message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceSummonInterface
         */
        public static fromObject(object: { [k: string]: any }): DceSummonInterface;

        /**
         * Creates a plain object from a DceSummonInterface message. Also converts values to other types if specified.
         * @param message DceSummonInterface
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceSummonInterface, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceSummonInterface to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceSwitchFormation. */
    interface IDceSwitchFormation {

        /** DceSwitchFormation pos1 */
        pos1?: (number|null);

        /** DceSwitchFormation pos2 */
        pos2?: (number|null);

        /** DceSwitchFormation tid */
        tid?: (number|null);
    }

    /** Represents a DceSwitchFormation. */
    class DceSwitchFormation implements IDceSwitchFormation {
public send():void;

        /**
         * Constructs a new DceSwitchFormation.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceSwitchFormation);

        /** DceSwitchFormation pos1. */
        public pos1: number;

        /** DceSwitchFormation pos2. */
        public pos2: number;

        /** DceSwitchFormation tid. */
        public tid: number;

        /**
         * Creates a new DceSwitchFormation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceSwitchFormation instance
         */
        public static create(properties?: IDceSwitchFormation): DceSwitchFormation;

        /**
         * Encodes the specified DceSwitchFormation message. Does not implicitly {@link DceSwitchFormation.verify|verify} messages.
         * @param message DceSwitchFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceSwitchFormation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceSwitchFormation message, length delimited. Does not implicitly {@link DceSwitchFormation.verify|verify} messages.
         * @param message DceSwitchFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceSwitchFormation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceSwitchFormation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceSwitchFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceSwitchFormation;

        /**
         * Decodes a DceSwitchFormation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceSwitchFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceSwitchFormation;

        /**
         * Verifies a DceSwitchFormation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceSwitchFormation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceSwitchFormation
         */
        public static fromObject(object: { [k: string]: any }): DceSwitchFormation;

        /**
         * Creates a plain object from a DceSwitchFormation message. Also converts values to other types if specified.
         * @param message DceSwitchFormation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceSwitchFormation, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceSwitchFormation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceTownPatrolOpt. */
    interface IDceTownPatrolOpt {

        /** DceTownPatrolOpt type */
        type?: (number|null);

        /** DceTownPatrolOpt param */
        param?: (number|null);

        /** DceTownPatrolOpt hoepos */
        hoepos?: (number[]|null);
    }

    /** Represents a DceTownPatrolOpt. */
    class DceTownPatrolOpt implements IDceTownPatrolOpt {
public send():void;

        /**
         * Constructs a new DceTownPatrolOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceTownPatrolOpt);

        /** DceTownPatrolOpt type. */
        public type: number;

        /** DceTownPatrolOpt param. */
        public param: number;

        /** DceTownPatrolOpt hoepos. */
        public hoepos: number[];

        /**
         * Creates a new DceTownPatrolOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceTownPatrolOpt instance
         */
        public static create(properties?: IDceTownPatrolOpt): DceTownPatrolOpt;

        /**
         * Encodes the specified DceTownPatrolOpt message. Does not implicitly {@link DceTownPatrolOpt.verify|verify} messages.
         * @param message DceTownPatrolOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceTownPatrolOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceTownPatrolOpt message, length delimited. Does not implicitly {@link DceTownPatrolOpt.verify|verify} messages.
         * @param message DceTownPatrolOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceTownPatrolOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceTownPatrolOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceTownPatrolOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceTownPatrolOpt;

        /**
         * Decodes a DceTownPatrolOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceTownPatrolOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceTownPatrolOpt;

        /**
         * Verifies a DceTownPatrolOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceTownPatrolOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceTownPatrolOpt
         */
        public static fromObject(object: { [k: string]: any }): DceTownPatrolOpt;

        /**
         * Creates a plain object from a DceTownPatrolOpt message. Also converts values to other types if specified.
         * @param message DceTownPatrolOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceTownPatrolOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceTownPatrolOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceUseItem. */
    interface IDceUseItem {

        /** DceUseItem tid */
        tid?: (number|null);

        /** DceUseItem amount */
        amount?: (number|null);

        /** DceUseItem param */
        param?: (number|null);

        /** DceUseItem msgType */
        msgType?: (number|null);
    }

    /** Represents a DceUseItem. */
    class DceUseItem implements IDceUseItem {
public send():void;

        /**
         * Constructs a new DceUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceUseItem);

        /** DceUseItem tid. */
        public tid: number;

        /** DceUseItem amount. */
        public amount: number;

        /** DceUseItem param. */
        public param: number;

        /** DceUseItem msgType. */
        public msgType: number;

        /**
         * Creates a new DceUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceUseItem instance
         */
        public static create(properties?: IDceUseItem): DceUseItem;

        /**
         * Encodes the specified DceUseItem message. Does not implicitly {@link DceUseItem.verify|verify} messages.
         * @param message DceUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceUseItem message, length delimited. Does not implicitly {@link DceUseItem.verify|verify} messages.
         * @param message DceUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceUseItem;

        /**
         * Decodes a DceUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceUseItem;

        /**
         * Verifies a DceUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceUseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceUseItem
         */
        public static fromObject(object: { [k: string]: any }): DceUseItem;

        /**
         * Creates a plain object from a DceUseItem message. Also converts values to other types if specified.
         * @param message DceUseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceUseItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceUseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DceUserInfo. */
    interface IDceUserInfo {
    }

    /** Represents a DceUserInfo. */
    class DceUserInfo implements IDceUserInfo {
public send():void;

        /**
         * Constructs a new DceUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDceUserInfo);

        /**
         * Creates a new DceUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DceUserInfo instance
         */
        public static create(properties?: IDceUserInfo): DceUserInfo;

        /**
         * Encodes the specified DceUserInfo message. Does not implicitly {@link DceUserInfo.verify|verify} messages.
         * @param message DceUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDceUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DceUserInfo message, length delimited. Does not implicitly {@link DceUserInfo.verify|verify} messages.
         * @param message DceUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDceUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DceUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DceUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DceUserInfo;

        /**
         * Decodes a DceUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DceUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DceUserInfo;

        /**
         * Verifies a DceUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DceUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DceUserInfo
         */
        public static fromObject(object: { [k: string]: any }): DceUserInfo;

        /**
         * Creates a plain object from a DceUserInfo message. Also converts values to other types if specified.
         * @param message DceUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DceUserInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DceUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseAllEquipmentInfo. */
    interface IDseAllEquipmentInfo {

        /** DseAllEquipmentInfo infos */
        infos?: (IEquipmentInfo[]|null);
    }

    /** Represents a DseAllEquipmentInfo. */
    class DseAllEquipmentInfo implements IDseAllEquipmentInfo {

        /**
         * Constructs a new DseAllEquipmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseAllEquipmentInfo);

        /** DseAllEquipmentInfo infos. */
        public infos: IEquipmentInfo[];

        /**
         * Creates a new DseAllEquipmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseAllEquipmentInfo instance
         */
        public static create(properties?: IDseAllEquipmentInfo): DseAllEquipmentInfo;

        /**
         * Encodes the specified DseAllEquipmentInfo message. Does not implicitly {@link DseAllEquipmentInfo.verify|verify} messages.
         * @param message DseAllEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseAllEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseAllEquipmentInfo message, length delimited. Does not implicitly {@link DseAllEquipmentInfo.verify|verify} messages.
         * @param message DseAllEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseAllEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseAllEquipmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseAllEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseAllEquipmentInfo;

        /**
         * Decodes a DseAllEquipmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseAllEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseAllEquipmentInfo;

        /**
         * Verifies a DseAllEquipmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseAllEquipmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseAllEquipmentInfo
         */
        public static fromObject(object: { [k: string]: any }): DseAllEquipmentInfo;

        /**
         * Creates a plain object from a DseAllEquipmentInfo message. Also converts values to other types if specified.
         * @param message DseAllEquipmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseAllEquipmentInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseAllEquipmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EquipmentInfo. */
    interface IEquipmentInfo {

        /** EquipmentInfo oid */
        oid?: (string|null);

        /** EquipmentInfo tid */
        tid?: (number|null);

        /** EquipmentInfo enhanceLevel */
        enhanceLevel?: (number|null);

        /** EquipmentInfo refineLevle */
        refineLevle?: (number|null);

        /** EquipmentInfo pos */
        pos?: (number|null);

        /** EquipmentInfo prop_value */
        prop_value?: (number|null);
    }

    /** Represents an EquipmentInfo. */
    class EquipmentInfo implements IEquipmentInfo {

        /**
         * Constructs a new EquipmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IEquipmentInfo);

        /** EquipmentInfo oid. */
        public oid: string;

        /** EquipmentInfo tid. */
        public tid: number;

        /** EquipmentInfo enhanceLevel. */
        public enhanceLevel: number;

        /** EquipmentInfo refineLevle. */
        public refineLevle: number;

        /** EquipmentInfo pos. */
        public pos: number;

        /** EquipmentInfo prop_value. */
        public prop_value: number;

        /**
         * Creates a new EquipmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipmentInfo instance
         */
        public static create(properties?: IEquipmentInfo): EquipmentInfo;

        /**
         * Encodes the specified EquipmentInfo message. Does not implicitly {@link EquipmentInfo.verify|verify} messages.
         * @param message EquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EquipmentInfo message, length delimited. Does not implicitly {@link EquipmentInfo.verify|verify} messages.
         * @param message EquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): EquipmentInfo;

        /**
         * Decodes an EquipmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): EquipmentInfo;

        /**
         * Verifies an EquipmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentInfo
         */
        public static fromObject(object: { [k: string]: any }): EquipmentInfo;

        /**
         * Creates a plain object from an EquipmentInfo message. Also converts values to other types if specified.
         * @param message EquipmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EquipmentInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseAllSpiritInfo. */
    interface IDseAllSpiritInfo {

        /** DseAllSpiritInfo soldiers */
        soldiers?: (IDseSingleSpiritInfo[]|null);
    }

    /** Represents a DseAllSpiritInfo. */
    class DseAllSpiritInfo implements IDseAllSpiritInfo {

        /**
         * Constructs a new DseAllSpiritInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseAllSpiritInfo);

        /** DseAllSpiritInfo soldiers. */
        public soldiers: IDseSingleSpiritInfo[];

        /**
         * Creates a new DseAllSpiritInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseAllSpiritInfo instance
         */
        public static create(properties?: IDseAllSpiritInfo): DseAllSpiritInfo;

        /**
         * Encodes the specified DseAllSpiritInfo message. Does not implicitly {@link DseAllSpiritInfo.verify|verify} messages.
         * @param message DseAllSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseAllSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseAllSpiritInfo message, length delimited. Does not implicitly {@link DseAllSpiritInfo.verify|verify} messages.
         * @param message DseAllSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseAllSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseAllSpiritInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseAllSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseAllSpiritInfo;

        /**
         * Decodes a DseAllSpiritInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseAllSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseAllSpiritInfo;

        /**
         * Verifies a DseAllSpiritInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseAllSpiritInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseAllSpiritInfo
         */
        public static fromObject(object: { [k: string]: any }): DseAllSpiritInfo;

        /**
         * Creates a plain object from a DseAllSpiritInfo message. Also converts values to other types if specified.
         * @param message DseAllSpiritInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseAllSpiritInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseAllSpiritInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSingleSpiritInfo. */
    interface IDseSingleSpiritInfo {

        /** DseSingleSpiritInfo tid */
        tid?: (number|null);

        /** DseSingleSpiritInfo maxhp */
        maxhp?: (number|null);

        /** DseSingleSpiritInfo attack */
        attack?: (number|null);

        /** DseSingleSpiritInfo defence */
        defence?: (number|null);

        /** DseSingleSpiritInfo speed */
        speed?: (number|null);

        /** DseSingleSpiritInfo isCaptain */
        isCaptain?: (boolean|null);

        /** DseSingleSpiritInfo level */
        level?: (number|null);

        /** DseSingleSpiritInfo reformed */
        reformed?: (number|null);

        /** DseSingleSpiritInfo breakthrough */
        breakthrough?: (number|null);

        /** DseSingleSpiritInfo upgraded */
        upgraded?: (number|null);

        /** DseSingleSpiritInfo awakened */
        awakened?: (number|null);

        /** DseSingleSpiritInfo talent */
        talent?: (number|null);

        /** DseSingleSpiritInfo power */
        power?: (number|null);

        /** DseSingleSpiritInfo exp */
        exp?: (number|null);

        /** DseSingleSpiritInfo skin */
        skin?: (number|null);

        /** DseSingleSpiritInfo skin_unlocked */
        skin_unlocked?: (number[]|null);
    }

    /** Represents a DseSingleSpiritInfo. */
    class DseSingleSpiritInfo implements IDseSingleSpiritInfo {

        /**
         * Constructs a new DseSingleSpiritInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSingleSpiritInfo);

        /** DseSingleSpiritInfo tid. */
        public tid: number;

        /** DseSingleSpiritInfo maxhp. */
        public maxhp: number;

        /** DseSingleSpiritInfo attack. */
        public attack: number;

        /** DseSingleSpiritInfo defence. */
        public defence: number;

        /** DseSingleSpiritInfo speed. */
        public speed: number;

        /** DseSingleSpiritInfo isCaptain. */
        public isCaptain: boolean;

        /** DseSingleSpiritInfo level. */
        public level: number;

        /** DseSingleSpiritInfo reformed. */
        public reformed: number;

        /** DseSingleSpiritInfo breakthrough. */
        public breakthrough: number;

        /** DseSingleSpiritInfo upgraded. */
        public upgraded: number;

        /** DseSingleSpiritInfo awakened. */
        public awakened: number;

        /** DseSingleSpiritInfo talent. */
        public talent: number;

        /** DseSingleSpiritInfo power. */
        public power: number;

        /** DseSingleSpiritInfo exp. */
        public exp: number;

        /** DseSingleSpiritInfo skin. */
        public skin: number;

        /** DseSingleSpiritInfo skin_unlocked. */
        public skin_unlocked: number[];

        /**
         * Creates a new DseSingleSpiritInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSingleSpiritInfo instance
         */
        public static create(properties?: IDseSingleSpiritInfo): DseSingleSpiritInfo;

        /**
         * Encodes the specified DseSingleSpiritInfo message. Does not implicitly {@link DseSingleSpiritInfo.verify|verify} messages.
         * @param message DseSingleSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSingleSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSingleSpiritInfo message, length delimited. Does not implicitly {@link DseSingleSpiritInfo.verify|verify} messages.
         * @param message DseSingleSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSingleSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSingleSpiritInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSingleSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSingleSpiritInfo;

        /**
         * Decodes a DseSingleSpiritInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSingleSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSingleSpiritInfo;

        /**
         * Verifies a DseSingleSpiritInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSingleSpiritInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSingleSpiritInfo
         */
        public static fromObject(object: { [k: string]: any }): DseSingleSpiritInfo;

        /**
         * Creates a plain object from a DseSingleSpiritInfo message. Also converts values to other types if specified.
         * @param message DseSingleSpiritInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSingleSpiritInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSingleSpiritInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseAuthState. */
    interface IDseAuthState {

        /** DseAuthState pass */
        pass: boolean;

        /** DseAuthState type */
        type: number;

        /** DseAuthState leftMin */
        leftMin: number;

        /** DseAuthState time */
        time: number;

        /** DseAuthState zone */
        zone: number;

        /** DseAuthState uid */
        uid?: (string|null);
    }

    /** Represents a DseAuthState. */
    class DseAuthState implements IDseAuthState {

        /**
         * Constructs a new DseAuthState.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseAuthState);

        /** DseAuthState pass. */
        public pass: boolean;

        /** DseAuthState type. */
        public type: number;

        /** DseAuthState leftMin. */
        public leftMin: number;

        /** DseAuthState time. */
        public time: number;

        /** DseAuthState zone. */
        public zone: number;

        /** DseAuthState uid. */
        public uid: string;

        /**
         * Creates a new DseAuthState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseAuthState instance
         */
        public static create(properties?: IDseAuthState): DseAuthState;

        /**
         * Encodes the specified DseAuthState message. Does not implicitly {@link DseAuthState.verify|verify} messages.
         * @param message DseAuthState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseAuthState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseAuthState message, length delimited. Does not implicitly {@link DseAuthState.verify|verify} messages.
         * @param message DseAuthState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseAuthState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseAuthState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseAuthState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseAuthState;

        /**
         * Decodes a DseAuthState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseAuthState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseAuthState;

        /**
         * Verifies a DseAuthState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseAuthState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseAuthState
         */
        public static fromObject(object: { [k: string]: any }): DseAuthState;

        /**
         * Creates a plain object from a DseAuthState message. Also converts values to other types if specified.
         * @param message DseAuthState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseAuthState, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseAuthState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseBattleOpt. */
    interface IDseBattleOpt {

        /** DseBattleOpt opt_type */
        opt_type?: (number|null);

        /** DseBattleOpt id */
        id?: (string|null);

        /** DseBattleOpt param */
        param?: (number|null);

        /** DseBattleOpt res */
        res?: (number|null);

        /** DseBattleOpt action */
        action?: (IBattleAction[]|null);

        /** DseBattleOpt isover */
        isover?: (boolean|null);

        /** DseBattleOpt battleinfo */
        battleinfo?: (IBattleInfo|null);

        /** DseBattleOpt sendclient */
        sendclient?: (boolean|null);

        /** DseBattleOpt BattleSettle */
        BattleSettle?: (IBattleSettle|null);

        /** DseBattleOpt transparam */
        transparam?: (number|null);

        /** DseBattleOpt satifycon */
        satifycon?: (boolean|null);
    }

    /** Represents a DseBattleOpt. */
    class DseBattleOpt implements IDseBattleOpt {

        /**
         * Constructs a new DseBattleOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseBattleOpt);

        /** DseBattleOpt opt_type. */
        public opt_type: number;

        /** DseBattleOpt id. */
        public id: string;

        /** DseBattleOpt param. */
        public param: number;

        /** DseBattleOpt res. */
        public res: number;

        /** DseBattleOpt action. */
        public action: IBattleAction[];

        /** DseBattleOpt isover. */
        public isover: boolean;

        /** DseBattleOpt battleinfo. */
        public battleinfo?: (IBattleInfo|null);

        /** DseBattleOpt sendclient. */
        public sendclient: boolean;

        /** DseBattleOpt BattleSettle. */
        public BattleSettle?: (IBattleSettle|null);

        /** DseBattleOpt transparam. */
        public transparam: number;

        /** DseBattleOpt satifycon. */
        public satifycon: boolean;

        /**
         * Creates a new DseBattleOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseBattleOpt instance
         */
        public static create(properties?: IDseBattleOpt): DseBattleOpt;

        /**
         * Encodes the specified DseBattleOpt message. Does not implicitly {@link DseBattleOpt.verify|verify} messages.
         * @param message DseBattleOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseBattleOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseBattleOpt message, length delimited. Does not implicitly {@link DseBattleOpt.verify|verify} messages.
         * @param message DseBattleOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseBattleOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseBattleOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseBattleOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseBattleOpt;

        /**
         * Decodes a DseBattleOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseBattleOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseBattleOpt;

        /**
         * Verifies a DseBattleOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseBattleOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseBattleOpt
         */
        public static fromObject(object: { [k: string]: any }): DseBattleOpt;

        /**
         * Creates a plain object from a DseBattleOpt message. Also converts values to other types if specified.
         * @param message DseBattleOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseBattleOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseBattleOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseBattleStart. */
    interface IDseBattleStart {

        /** DseBattleStart targetID */
        targetID?: (string|null);

        /** DseBattleStart battleinfo */
        battleinfo?: (IBattleInfo|null);

        /** DseBattleStart result */
        result?: (number|null);
    }

    /** Represents a DseBattleStart. */
    class DseBattleStart implements IDseBattleStart {

        /**
         * Constructs a new DseBattleStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseBattleStart);

        /** DseBattleStart targetID. */
        public targetID: string;

        /** DseBattleStart battleinfo. */
        public battleinfo?: (IBattleInfo|null);

        /** DseBattleStart result. */
        public result: number;

        /**
         * Creates a new DseBattleStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseBattleStart instance
         */
        public static create(properties?: IDseBattleStart): DseBattleStart;

        /**
         * Encodes the specified DseBattleStart message. Does not implicitly {@link DseBattleStart.verify|verify} messages.
         * @param message DseBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseBattleStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseBattleStart message, length delimited. Does not implicitly {@link DseBattleStart.verify|verify} messages.
         * @param message DseBattleStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseBattleStart, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseBattleStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseBattleStart;

        /**
         * Decodes a DseBattleStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseBattleStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseBattleStart;

        /**
         * Verifies a DseBattleStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseBattleStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseBattleStart
         */
        public static fromObject(object: { [k: string]: any }): DseBattleStart;

        /**
         * Creates a plain object from a DseBattleStart message. Also converts values to other types if specified.
         * @param message DseBattleStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseBattleStart, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseBattleStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseBattleSweep. */
    interface IDseBattleSweep {

        /** DseBattleSweep res */
        res?: (number|null);

        /** DseBattleSweep targetID */
        targetID?: (string|null);

        /** DseBattleSweep type */
        type?: (number|null);

        /** DseBattleSweep BattleSettle */
        BattleSettle?: (IBattleSettle[]|null);
    }

    /** Represents a DseBattleSweep. */
    class DseBattleSweep implements IDseBattleSweep {

        /**
         * Constructs a new DseBattleSweep.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseBattleSweep);

        /** DseBattleSweep res. */
        public res: number;

        /** DseBattleSweep targetID. */
        public targetID: string;

        /** DseBattleSweep type. */
        public type: number;

        /** DseBattleSweep BattleSettle. */
        public BattleSettle: IBattleSettle[];

        /**
         * Creates a new DseBattleSweep instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseBattleSweep instance
         */
        public static create(properties?: IDseBattleSweep): DseBattleSweep;

        /**
         * Encodes the specified DseBattleSweep message. Does not implicitly {@link DseBattleSweep.verify|verify} messages.
         * @param message DseBattleSweep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseBattleSweep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseBattleSweep message, length delimited. Does not implicitly {@link DseBattleSweep.verify|verify} messages.
         * @param message DseBattleSweep message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseBattleSweep, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseBattleSweep message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseBattleSweep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseBattleSweep;

        /**
         * Decodes a DseBattleSweep message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseBattleSweep
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseBattleSweep;

        /**
         * Verifies a DseBattleSweep message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseBattleSweep message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseBattleSweep
         */
        public static fromObject(object: { [k: string]: any }): DseBattleSweep;

        /**
         * Creates a plain object from a DseBattleSweep message. Also converts values to other types if specified.
         * @param message DseBattleSweep
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseBattleSweep, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseBattleSweep to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseChangeSpiritSkin. */
    interface IDseChangeSpiritSkin {

        /** DseChangeSpiritSkin tid */
        tid?: (number|null);

        /** DseChangeSpiritSkin skin_id */
        skin_id?: (number|null);

        /** DseChangeSpiritSkin code */
        code?: (number|null);
    }

    /** Represents a DseChangeSpiritSkin. */
    class DseChangeSpiritSkin implements IDseChangeSpiritSkin {

        /**
         * Constructs a new DseChangeSpiritSkin.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseChangeSpiritSkin);

        /** DseChangeSpiritSkin tid. */
        public tid: number;

        /** DseChangeSpiritSkin skin_id. */
        public skin_id: number;

        /** DseChangeSpiritSkin code. */
        public code: number;

        /**
         * Creates a new DseChangeSpiritSkin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseChangeSpiritSkin instance
         */
        public static create(properties?: IDseChangeSpiritSkin): DseChangeSpiritSkin;

        /**
         * Encodes the specified DseChangeSpiritSkin message. Does not implicitly {@link DseChangeSpiritSkin.verify|verify} messages.
         * @param message DseChangeSpiritSkin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseChangeSpiritSkin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseChangeSpiritSkin message, length delimited. Does not implicitly {@link DseChangeSpiritSkin.verify|verify} messages.
         * @param message DseChangeSpiritSkin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseChangeSpiritSkin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseChangeSpiritSkin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseChangeSpiritSkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseChangeSpiritSkin;

        /**
         * Decodes a DseChangeSpiritSkin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseChangeSpiritSkin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseChangeSpiritSkin;

        /**
         * Verifies a DseChangeSpiritSkin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseChangeSpiritSkin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseChangeSpiritSkin
         */
        public static fromObject(object: { [k: string]: any }): DseChangeSpiritSkin;

        /**
         * Creates a plain object from a DseChangeSpiritSkin message. Also converts values to other types if specified.
         * @param message DseChangeSpiritSkin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseChangeSpiritSkin, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseChangeSpiritSkin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseCombineEquipmentDebris. */
    interface IDseCombineEquipmentDebris {

        /** DseCombineEquipmentDebris id */
        id?: (number[]|null);

        /** DseCombineEquipmentDebris code */
        code?: (number|null);
    }

    /** Represents a DseCombineEquipmentDebris. */
    class DseCombineEquipmentDebris implements IDseCombineEquipmentDebris {

        /**
         * Constructs a new DseCombineEquipmentDebris.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseCombineEquipmentDebris);

        /** DseCombineEquipmentDebris id. */
        public id: number[];

        /** DseCombineEquipmentDebris code. */
        public code: number;

        /**
         * Creates a new DseCombineEquipmentDebris instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseCombineEquipmentDebris instance
         */
        public static create(properties?: IDseCombineEquipmentDebris): DseCombineEquipmentDebris;

        /**
         * Encodes the specified DseCombineEquipmentDebris message. Does not implicitly {@link DseCombineEquipmentDebris.verify|verify} messages.
         * @param message DseCombineEquipmentDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseCombineEquipmentDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseCombineEquipmentDebris message, length delimited. Does not implicitly {@link DseCombineEquipmentDebris.verify|verify} messages.
         * @param message DseCombineEquipmentDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseCombineEquipmentDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseCombineEquipmentDebris message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseCombineEquipmentDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseCombineEquipmentDebris;

        /**
         * Decodes a DseCombineEquipmentDebris message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseCombineEquipmentDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseCombineEquipmentDebris;

        /**
         * Verifies a DseCombineEquipmentDebris message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseCombineEquipmentDebris message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseCombineEquipmentDebris
         */
        public static fromObject(object: { [k: string]: any }): DseCombineEquipmentDebris;

        /**
         * Creates a plain object from a DseCombineEquipmentDebris message. Also converts values to other types if specified.
         * @param message DseCombineEquipmentDebris
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseCombineEquipmentDebris, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseCombineEquipmentDebris to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseCombineProto. */
    interface IDseCombineProto {

        /** DseCombineProto res */
        res?: (number|null);
    }

    /** Represents a DseCombineProto. */
    class DseCombineProto implements IDseCombineProto {

        /**
         * Constructs a new DseCombineProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseCombineProto);

        /** DseCombineProto res. */
        public res: number;

        /**
         * Creates a new DseCombineProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseCombineProto instance
         */
        public static create(properties?: IDseCombineProto): DseCombineProto;

        /**
         * Encodes the specified DseCombineProto message. Does not implicitly {@link DseCombineProto.verify|verify} messages.
         * @param message DseCombineProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseCombineProto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseCombineProto message, length delimited. Does not implicitly {@link DseCombineProto.verify|verify} messages.
         * @param message DseCombineProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseCombineProto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseCombineProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseCombineProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseCombineProto;

        /**
         * Decodes a DseCombineProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseCombineProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseCombineProto;

        /**
         * Verifies a DseCombineProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseCombineProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseCombineProto
         */
        public static fromObject(object: { [k: string]: any }): DseCombineProto;

        /**
         * Creates a plain object from a DseCombineProto message. Also converts values to other types if specified.
         * @param message DseCombineProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseCombineProto, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseCombineProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseCombineSpiritDebris. */
    interface IDseCombineSpiritDebris {

        /** DseCombineSpiritDebris id */
        id?: (number[]|null);

        /** DseCombineSpiritDebris code */
        code?: (number|null);

        /** DseCombineSpiritDebris type */
        type?: (number|null);
    }

    /** Represents a DseCombineSpiritDebris. */
    class DseCombineSpiritDebris implements IDseCombineSpiritDebris {

        /**
         * Constructs a new DseCombineSpiritDebris.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseCombineSpiritDebris);

        /** DseCombineSpiritDebris id. */
        public id: number[];

        /** DseCombineSpiritDebris code. */
        public code: number;

        /** DseCombineSpiritDebris type. */
        public type: number;

        /**
         * Creates a new DseCombineSpiritDebris instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseCombineSpiritDebris instance
         */
        public static create(properties?: IDseCombineSpiritDebris): DseCombineSpiritDebris;

        /**
         * Encodes the specified DseCombineSpiritDebris message. Does not implicitly {@link DseCombineSpiritDebris.verify|verify} messages.
         * @param message DseCombineSpiritDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseCombineSpiritDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseCombineSpiritDebris message, length delimited. Does not implicitly {@link DseCombineSpiritDebris.verify|verify} messages.
         * @param message DseCombineSpiritDebris message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseCombineSpiritDebris, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseCombineSpiritDebris message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseCombineSpiritDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseCombineSpiritDebris;

        /**
         * Decodes a DseCombineSpiritDebris message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseCombineSpiritDebris
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseCombineSpiritDebris;

        /**
         * Verifies a DseCombineSpiritDebris message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseCombineSpiritDebris message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseCombineSpiritDebris
         */
        public static fromObject(object: { [k: string]: any }): DseCombineSpiritDebris;

        /**
         * Creates a plain object from a DseCombineSpiritDebris message. Also converts values to other types if specified.
         * @param message DseCombineSpiritDebris
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseCombineSpiritDebris, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseCombineSpiritDebris to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DecreeShop. */
    interface IDecreeShop {

        /** DecreeShop freetimes */
        freetimes?: (number|null);

        /** DecreeShop lastrefreshtime */
        lastrefreshtime?: (string|null);

        /** DecreeShop remainrefreshtimes */
        remainrefreshtimes?: (number|null);

        /** DecreeShop shoplist */
        shoplist?: (IShopUnit[]|null);
    }

    /** Represents a DecreeShop. */
    class DecreeShop implements IDecreeShop {

        /**
         * Constructs a new DecreeShop.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDecreeShop);

        /** DecreeShop freetimes. */
        public freetimes: number;

        /** DecreeShop lastrefreshtime. */
        public lastrefreshtime: string;

        /** DecreeShop remainrefreshtimes. */
        public remainrefreshtimes: number;

        /** DecreeShop shoplist. */
        public shoplist: IShopUnit[];

        /**
         * Creates a new DecreeShop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecreeShop instance
         */
        public static create(properties?: IDecreeShop): DecreeShop;

        /**
         * Encodes the specified DecreeShop message. Does not implicitly {@link DecreeShop.verify|verify} messages.
         * @param message DecreeShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDecreeShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DecreeShop message, length delimited. Does not implicitly {@link DecreeShop.verify|verify} messages.
         * @param message DecreeShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDecreeShop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DecreeShop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DecreeShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DecreeShop;

        /**
         * Decodes a DecreeShop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DecreeShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DecreeShop;

        /**
         * Verifies a DecreeShop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DecreeShop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DecreeShop
         */
        public static fromObject(object: { [k: string]: any }): DecreeShop;

        /**
         * Creates a plain object from a DecreeShop message. Also converts values to other types if specified.
         * @param message DecreeShop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DecreeShop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DecreeShop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseDecreeShopOpt. */
    interface IDseDecreeShopOpt {

        /** DseDecreeShopOpt type */
        type?: (number|null);

        /** DseDecreeShopOpt index */
        index?: (number|null);

        /** DseDecreeShopOpt res */
        res?: (number|null);

        /** DseDecreeShopOpt decreeshop */
        decreeshop?: (IDecreeShop|null);
    }

    /** Represents a DseDecreeShopOpt. */
    class DseDecreeShopOpt implements IDseDecreeShopOpt {

        /**
         * Constructs a new DseDecreeShopOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseDecreeShopOpt);

        /** DseDecreeShopOpt type. */
        public type: number;

        /** DseDecreeShopOpt index. */
        public index: number;

        /** DseDecreeShopOpt res. */
        public res: number;

        /** DseDecreeShopOpt decreeshop. */
        public decreeshop?: (IDecreeShop|null);

        /**
         * Creates a new DseDecreeShopOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseDecreeShopOpt instance
         */
        public static create(properties?: IDseDecreeShopOpt): DseDecreeShopOpt;

        /**
         * Encodes the specified DseDecreeShopOpt message. Does not implicitly {@link DseDecreeShopOpt.verify|verify} messages.
         * @param message DseDecreeShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseDecreeShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseDecreeShopOpt message, length delimited. Does not implicitly {@link DseDecreeShopOpt.verify|verify} messages.
         * @param message DseDecreeShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseDecreeShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseDecreeShopOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseDecreeShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseDecreeShopOpt;

        /**
         * Decodes a DseDecreeShopOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseDecreeShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseDecreeShopOpt;

        /**
         * Verifies a DseDecreeShopOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseDecreeShopOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseDecreeShopOpt
         */
        public static fromObject(object: { [k: string]: any }): DseDecreeShopOpt;

        /**
         * Creates a plain object from a DseDecreeShopOpt message. Also converts values to other types if specified.
         * @param message DseDecreeShopOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseDecreeShopOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseDecreeShopOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopUnit. */
    interface IShopUnit {

        /** ShopUnit shopid */
        shopid?: (number|null);

        /** ShopUnit count */
        count?: (number|null);
    }

    /** Represents a ShopUnit. */
    class ShopUnit implements IShopUnit {

        /**
         * Constructs a new ShopUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: IShopUnit);

        /** ShopUnit shopid. */
        public shopid: number;

        /** ShopUnit count. */
        public count: number;

        /**
         * Creates a new ShopUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopUnit instance
         */
        public static create(properties?: IShopUnit): ShopUnit;

        /**
         * Encodes the specified ShopUnit message. Does not implicitly {@link ShopUnit.verify|verify} messages.
         * @param message ShopUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IShopUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ShopUnit message, length delimited. Does not implicitly {@link ShopUnit.verify|verify} messages.
         * @param message ShopUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IShopUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ShopUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ShopUnit;

        /**
         * Decodes a ShopUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ShopUnit;

        /**
         * Verifies a ShopUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopUnit
         */
        public static fromObject(object: { [k: string]: any }): ShopUnit;

        /**
         * Creates a plain object from a ShopUnit message. Also converts values to other types if specified.
         * @param message ShopUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ShopUnit, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DevilTowerData. */
    interface IDevilTowerData {

        /** DevilTowerData curlayer */
        curlayer?: (number|null);

        /** DevilTowerData maxlayer */
        maxlayer?: (number|null);

        /** DevilTowerData losetimes */
        losetimes?: (number|null);

        /** DevilTowerData buychallenge */
        buychallenge?: (number|null);

        /** DevilTowerData buyreset */
        buyreset?: (number|null);

        /** DevilTowerData sweepstart */
        sweepstart?: (string|null);
    }

    /** Represents a DevilTowerData. */
    class DevilTowerData implements IDevilTowerData {

        /**
         * Constructs a new DevilTowerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDevilTowerData);

        /** DevilTowerData curlayer. */
        public curlayer: number;

        /** DevilTowerData maxlayer. */
        public maxlayer: number;

        /** DevilTowerData losetimes. */
        public losetimes: number;

        /** DevilTowerData buychallenge. */
        public buychallenge: number;

        /** DevilTowerData buyreset. */
        public buyreset: number;

        /** DevilTowerData sweepstart. */
        public sweepstart: string;

        /**
         * Creates a new DevilTowerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DevilTowerData instance
         */
        public static create(properties?: IDevilTowerData): DevilTowerData;

        /**
         * Encodes the specified DevilTowerData message. Does not implicitly {@link DevilTowerData.verify|verify} messages.
         * @param message DevilTowerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDevilTowerData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DevilTowerData message, length delimited. Does not implicitly {@link DevilTowerData.verify|verify} messages.
         * @param message DevilTowerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDevilTowerData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DevilTowerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DevilTowerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DevilTowerData;

        /**
         * Decodes a DevilTowerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DevilTowerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DevilTowerData;

        /**
         * Verifies a DevilTowerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DevilTowerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DevilTowerData
         */
        public static fromObject(object: { [k: string]: any }): DevilTowerData;

        /**
         * Creates a plain object from a DevilTowerData message. Also converts values to other types if specified.
         * @param message DevilTowerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DevilTowerData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DevilTowerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseDevilTowerOpt. */
    interface IDseDevilTowerOpt {

        /** DseDevilTowerOpt type */
        type?: (number|null);

        /** DseDevilTowerOpt res */
        res?: (number|null);

        /** DseDevilTowerOpt deviltower */
        deviltower?: (IDevilTowerData|null);
    }

    /** Represents a DseDevilTowerOpt. */
    class DseDevilTowerOpt implements IDseDevilTowerOpt {

        /**
         * Constructs a new DseDevilTowerOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseDevilTowerOpt);

        /** DseDevilTowerOpt type. */
        public type: number;

        /** DseDevilTowerOpt res. */
        public res: number;

        /** DseDevilTowerOpt deviltower. */
        public deviltower?: (IDevilTowerData|null);

        /**
         * Creates a new DseDevilTowerOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseDevilTowerOpt instance
         */
        public static create(properties?: IDseDevilTowerOpt): DseDevilTowerOpt;

        /**
         * Encodes the specified DseDevilTowerOpt message. Does not implicitly {@link DseDevilTowerOpt.verify|verify} messages.
         * @param message DseDevilTowerOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseDevilTowerOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseDevilTowerOpt message, length delimited. Does not implicitly {@link DseDevilTowerOpt.verify|verify} messages.
         * @param message DseDevilTowerOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseDevilTowerOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseDevilTowerOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseDevilTowerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseDevilTowerOpt;

        /**
         * Decodes a DseDevilTowerOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseDevilTowerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseDevilTowerOpt;

        /**
         * Verifies a DseDevilTowerOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseDevilTowerOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseDevilTowerOpt
         */
        public static fromObject(object: { [k: string]: any }): DseDevilTowerOpt;

        /**
         * Creates a plain object from a DseDevilTowerOpt message. Also converts values to other types if specified.
         * @param message DseDevilTowerOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseDevilTowerOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseDevilTowerOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DugeonItem. */
    interface IDugeonItem {

        /** DugeonItem process */
        process?: (number|null);

        /** DugeonItem remaintimes */
        remaintimes?: (number|null);

        /** DugeonItem totaltimes */
        totaltimes?: (number|null);

        /** DugeonItem stageids */
        stageids?: (number[]|null);
    }

    /** Represents a DugeonItem. */
    class DugeonItem implements IDugeonItem {

        /**
         * Constructs a new DugeonItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDugeonItem);

        /** DugeonItem process. */
        public process: number;

        /** DugeonItem remaintimes. */
        public remaintimes: number;

        /** DugeonItem totaltimes. */
        public totaltimes: number;

        /** DugeonItem stageids. */
        public stageids: number[];

        /**
         * Creates a new DugeonItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DugeonItem instance
         */
        public static create(properties?: IDugeonItem): DugeonItem;

        /**
         * Encodes the specified DugeonItem message. Does not implicitly {@link DugeonItem.verify|verify} messages.
         * @param message DugeonItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDugeonItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DugeonItem message, length delimited. Does not implicitly {@link DugeonItem.verify|verify} messages.
         * @param message DugeonItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDugeonItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DugeonItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DugeonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DugeonItem;

        /**
         * Decodes a DugeonItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DugeonItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DugeonItem;

        /**
         * Verifies a DugeonItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DugeonItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DugeonItem
         */
        public static fromObject(object: { [k: string]: any }): DugeonItem;

        /**
         * Creates a plain object from a DugeonItem message. Also converts values to other types if specified.
         * @param message DugeonItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DugeonItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DugeonItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DugeonData. */
    interface IDugeonData {

        /** DugeonData alldugeon */
        alldugeon?: (IDugeonItem[]|null);
    }

    /** Represents a DugeonData. */
    class DugeonData implements IDugeonData {

        /**
         * Constructs a new DugeonData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDugeonData);

        /** DugeonData alldugeon. */
        public alldugeon: IDugeonItem[];

        /**
         * Creates a new DugeonData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DugeonData instance
         */
        public static create(properties?: IDugeonData): DugeonData;

        /**
         * Encodes the specified DugeonData message. Does not implicitly {@link DugeonData.verify|verify} messages.
         * @param message DugeonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDugeonData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DugeonData message, length delimited. Does not implicitly {@link DugeonData.verify|verify} messages.
         * @param message DugeonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDugeonData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DugeonData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DugeonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DugeonData;

        /**
         * Decodes a DugeonData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DugeonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DugeonData;

        /**
         * Verifies a DugeonData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DugeonData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DugeonData
         */
        public static fromObject(object: { [k: string]: any }): DugeonData;

        /**
         * Creates a plain object from a DugeonData message. Also converts values to other types if specified.
         * @param message DugeonData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DugeonData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DugeonData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseDugeonOpt. */
    interface IDseDugeonOpt {

        /** DseDugeonOpt res */
        res?: (number|null);

        /** DseDugeonOpt type */
        type?: (number|null);

        /** DseDugeonOpt dugeondata */
        dugeondata?: (IDugeonData|null);
    }

    /** Represents a DseDugeonOpt. */
    class DseDugeonOpt implements IDseDugeonOpt {

        /**
         * Constructs a new DseDugeonOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseDugeonOpt);

        /** DseDugeonOpt res. */
        public res: number;

        /** DseDugeonOpt type. */
        public type: number;

        /** DseDugeonOpt dugeondata. */
        public dugeondata?: (IDugeonData|null);

        /**
         * Creates a new DseDugeonOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseDugeonOpt instance
         */
        public static create(properties?: IDseDugeonOpt): DseDugeonOpt;

        /**
         * Encodes the specified DseDugeonOpt message. Does not implicitly {@link DseDugeonOpt.verify|verify} messages.
         * @param message DseDugeonOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseDugeonOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseDugeonOpt message, length delimited. Does not implicitly {@link DseDugeonOpt.verify|verify} messages.
         * @param message DseDugeonOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseDugeonOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseDugeonOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseDugeonOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseDugeonOpt;

        /**
         * Decodes a DseDugeonOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseDugeonOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseDugeonOpt;

        /**
         * Verifies a DseDugeonOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseDugeonOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseDugeonOpt
         */
        public static fromObject(object: { [k: string]: any }): DseDugeonOpt;

        /**
         * Creates a plain object from a DseDugeonOpt message. Also converts values to other types if specified.
         * @param message DseDugeonOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseDugeonOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseDugeonOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseEquipmentDebrisList. */
    interface IDseEquipmentDebrisList {

        /** DseEquipmentDebrisList items */
        items?: (IMItem[]|null);
    }

    /** Represents a DseEquipmentDebrisList. */
    class DseEquipmentDebrisList implements IDseEquipmentDebrisList {

        /**
         * Constructs a new DseEquipmentDebrisList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseEquipmentDebrisList);

        /** DseEquipmentDebrisList items. */
        public items: IMItem[];

        /**
         * Creates a new DseEquipmentDebrisList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseEquipmentDebrisList instance
         */
        public static create(properties?: IDseEquipmentDebrisList): DseEquipmentDebrisList;

        /**
         * Encodes the specified DseEquipmentDebrisList message. Does not implicitly {@link DseEquipmentDebrisList.verify|verify} messages.
         * @param message DseEquipmentDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseEquipmentDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseEquipmentDebrisList message, length delimited. Does not implicitly {@link DseEquipmentDebrisList.verify|verify} messages.
         * @param message DseEquipmentDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseEquipmentDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseEquipmentDebrisList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseEquipmentDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseEquipmentDebrisList;

        /**
         * Decodes a DseEquipmentDebrisList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseEquipmentDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseEquipmentDebrisList;

        /**
         * Verifies a DseEquipmentDebrisList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseEquipmentDebrisList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseEquipmentDebrisList
         */
        public static fromObject(object: { [k: string]: any }): DseEquipmentDebrisList;

        /**
         * Creates a plain object from a DseEquipmentDebrisList message. Also converts values to other types if specified.
         * @param message DseEquipmentDebrisList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseEquipmentDebrisList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseEquipmentDebrisList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MItem. */
    interface IMItem {

        /** MItem tid */
        tid?: (number|null);

        /** MItem amount */
        amount?: (number|null);
    }

    /** Represents a MItem. */
    class MItem implements IMItem {

        /**
         * Constructs a new MItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: IMItem);

        /** MItem tid. */
        public tid: number;

        /** MItem amount. */
        public amount: number;

        /**
         * Creates a new MItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MItem instance
         */
        public static create(properties?: IMItem): MItem;

        /**
         * Encodes the specified MItem message. Does not implicitly {@link MItem.verify|verify} messages.
         * @param message MItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IMItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MItem message, length delimited. Does not implicitly {@link MItem.verify|verify} messages.
         * @param message MItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IMItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): MItem;

        /**
         * Decodes a MItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): MItem;

        /**
         * Verifies a MItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MItem
         */
        public static fromObject(object: { [k: string]: any }): MItem;

        /**
         * Creates a plain object from a MItem message. Also converts values to other types if specified.
         * @param message MItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseEquipmentEnhance. */
    interface IDseEquipmentEnhance {

        /** DseEquipmentEnhance oid */
        oid?: (string|null);

        /** DseEquipmentEnhance code */
        code?: (number|null);
    }

    /** Represents a DseEquipmentEnhance. */
    class DseEquipmentEnhance implements IDseEquipmentEnhance {

        /**
         * Constructs a new DseEquipmentEnhance.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseEquipmentEnhance);

        /** DseEquipmentEnhance oid. */
        public oid: string;

        /** DseEquipmentEnhance code. */
        public code: number;

        /**
         * Creates a new DseEquipmentEnhance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseEquipmentEnhance instance
         */
        public static create(properties?: IDseEquipmentEnhance): DseEquipmentEnhance;

        /**
         * Encodes the specified DseEquipmentEnhance message. Does not implicitly {@link DseEquipmentEnhance.verify|verify} messages.
         * @param message DseEquipmentEnhance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseEquipmentEnhance, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseEquipmentEnhance message, length delimited. Does not implicitly {@link DseEquipmentEnhance.verify|verify} messages.
         * @param message DseEquipmentEnhance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseEquipmentEnhance, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseEquipmentEnhance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseEquipmentEnhance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseEquipmentEnhance;

        /**
         * Decodes a DseEquipmentEnhance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseEquipmentEnhance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseEquipmentEnhance;

        /**
         * Verifies a DseEquipmentEnhance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseEquipmentEnhance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseEquipmentEnhance
         */
        public static fromObject(object: { [k: string]: any }): DseEquipmentEnhance;

        /**
         * Creates a plain object from a DseEquipmentEnhance message. Also converts values to other types if specified.
         * @param message DseEquipmentEnhance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseEquipmentEnhance, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseEquipmentEnhance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseEquipmentGearUp. */
    interface IDseEquipmentGearUp {

        /** DseEquipmentGearUp oid */
        oid?: (string|null);

        /** DseEquipmentGearUp pos */
        pos?: (number|null);

        /** DseEquipmentGearUp code */
        code?: (number|null);
    }

    /** Represents a DseEquipmentGearUp. */
    class DseEquipmentGearUp implements IDseEquipmentGearUp {

        /**
         * Constructs a new DseEquipmentGearUp.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseEquipmentGearUp);

        /** DseEquipmentGearUp oid. */
        public oid: string;

        /** DseEquipmentGearUp pos. */
        public pos: number;

        /** DseEquipmentGearUp code. */
        public code: number;

        /**
         * Creates a new DseEquipmentGearUp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseEquipmentGearUp instance
         */
        public static create(properties?: IDseEquipmentGearUp): DseEquipmentGearUp;

        /**
         * Encodes the specified DseEquipmentGearUp message. Does not implicitly {@link DseEquipmentGearUp.verify|verify} messages.
         * @param message DseEquipmentGearUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseEquipmentGearUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseEquipmentGearUp message, length delimited. Does not implicitly {@link DseEquipmentGearUp.verify|verify} messages.
         * @param message DseEquipmentGearUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseEquipmentGearUp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseEquipmentGearUp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseEquipmentGearUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseEquipmentGearUp;

        /**
         * Decodes a DseEquipmentGearUp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseEquipmentGearUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseEquipmentGearUp;

        /**
         * Verifies a DseEquipmentGearUp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseEquipmentGearUp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseEquipmentGearUp
         */
        public static fromObject(object: { [k: string]: any }): DseEquipmentGearUp;

        /**
         * Creates a plain object from a DseEquipmentGearUp message. Also converts values to other types if specified.
         * @param message DseEquipmentGearUp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseEquipmentGearUp, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseEquipmentGearUp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseEquipmentRefine. */
    interface IDseEquipmentRefine {

        /** DseEquipmentRefine oid */
        oid?: (string|null);

        /** DseEquipmentRefine code */
        code?: (number|null);
    }

    /** Represents a DseEquipmentRefine. */
    class DseEquipmentRefine implements IDseEquipmentRefine {

        /**
         * Constructs a new DseEquipmentRefine.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseEquipmentRefine);

        /** DseEquipmentRefine oid. */
        public oid: string;

        /** DseEquipmentRefine code. */
        public code: number;

        /**
         * Creates a new DseEquipmentRefine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseEquipmentRefine instance
         */
        public static create(properties?: IDseEquipmentRefine): DseEquipmentRefine;

        /**
         * Encodes the specified DseEquipmentRefine message. Does not implicitly {@link DseEquipmentRefine.verify|verify} messages.
         * @param message DseEquipmentRefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseEquipmentRefine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseEquipmentRefine message, length delimited. Does not implicitly {@link DseEquipmentRefine.verify|verify} messages.
         * @param message DseEquipmentRefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseEquipmentRefine, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseEquipmentRefine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseEquipmentRefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseEquipmentRefine;

        /**
         * Decodes a DseEquipmentRefine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseEquipmentRefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseEquipmentRefine;

        /**
         * Verifies a DseEquipmentRefine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseEquipmentRefine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseEquipmentRefine
         */
        public static fromObject(object: { [k: string]: any }): DseEquipmentRefine;

        /**
         * Creates a plain object from a DseEquipmentRefine message. Also converts values to other types if specified.
         * @param message DseEquipmentRefine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseEquipmentRefine, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseEquipmentRefine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SingleSoldier. */
    interface ISingleSoldier {

        /** SingleSoldier pos */
        pos?: (number|null);

        /** SingleSoldier tid */
        tid?: (number|null);

        /** SingleSoldier equips */
        equips?: (IEquipmentInfoLite[]|null);
    }

    /** Represents a SingleSoldier. */
    class SingleSoldier implements ISingleSoldier {

        /**
         * Constructs a new SingleSoldier.
         * @param [properties] Properties to set
         */
        constructor(properties?: ISingleSoldier);

        /** SingleSoldier pos. */
        public pos: number;

        /** SingleSoldier tid. */
        public tid: number;

        /** SingleSoldier equips. */
        public equips: IEquipmentInfoLite[];

        /**
         * Creates a new SingleSoldier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingleSoldier instance
         */
        public static create(properties?: ISingleSoldier): SingleSoldier;

        /**
         * Encodes the specified SingleSoldier message. Does not implicitly {@link SingleSoldier.verify|verify} messages.
         * @param message SingleSoldier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ISingleSoldier, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SingleSoldier message, length delimited. Does not implicitly {@link SingleSoldier.verify|verify} messages.
         * @param message SingleSoldier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ISingleSoldier, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SingleSoldier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingleSoldier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): SingleSoldier;

        /**
         * Decodes a SingleSoldier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingleSoldier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): SingleSoldier;

        /**
         * Verifies a SingleSoldier message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingleSoldier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingleSoldier
         */
        public static fromObject(object: { [k: string]: any }): SingleSoldier;

        /**
         * Creates a plain object from a SingleSoldier message. Also converts values to other types if specified.
         * @param message SingleSoldier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SingleSoldier, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingleSoldier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseFormationInfo. */
    interface IDseFormationInfo {

        /** DseFormationInfo forms */
        forms?: (ISingleSoldier[]|null);

        /** DseFormationInfo captain_pos */
        captain_pos?: (number|null);
    }

    /** Represents a DseFormationInfo. */
    class DseFormationInfo implements IDseFormationInfo {

        /**
         * Constructs a new DseFormationInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseFormationInfo);

        /** DseFormationInfo forms. */
        public forms: ISingleSoldier[];

        /** DseFormationInfo captain_pos. */
        public captain_pos: number;

        /**
         * Creates a new DseFormationInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseFormationInfo instance
         */
        public static create(properties?: IDseFormationInfo): DseFormationInfo;

        /**
         * Encodes the specified DseFormationInfo message. Does not implicitly {@link DseFormationInfo.verify|verify} messages.
         * @param message DseFormationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseFormationInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseFormationInfo message, length delimited. Does not implicitly {@link DseFormationInfo.verify|verify} messages.
         * @param message DseFormationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseFormationInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseFormationInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseFormationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseFormationInfo;

        /**
         * Decodes a DseFormationInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseFormationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseFormationInfo;

        /**
         * Verifies a DseFormationInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseFormationInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseFormationInfo
         */
        public static fromObject(object: { [k: string]: any }): DseFormationInfo;

        /**
         * Creates a plain object from a DseFormationInfo message. Also converts values to other types if specified.
         * @param message DseFormationInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseFormationInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseFormationInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** EquipPos enum. */
    enum EquipPos {
        WEAPON = 1,
        HEAD = 2,
        CHEST = 3,
        BOOT = 4
    }

    /** Properties of an EquipmentInfoLite. */
    interface IEquipmentInfoLite {

        /** EquipmentInfoLite oid */
        oid?: (string|null);

        /** EquipmentInfoLite pos */
        pos?: (EquipPos|null);
    }

    /** Represents an EquipmentInfoLite. */
    class EquipmentInfoLite implements IEquipmentInfoLite {

        /**
         * Constructs a new EquipmentInfoLite.
         * @param [properties] Properties to set
         */
        constructor(properties?: IEquipmentInfoLite);

        /** EquipmentInfoLite oid. */
        public oid: string;

        /** EquipmentInfoLite pos. */
        public pos: EquipPos;

        /**
         * Creates a new EquipmentInfoLite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EquipmentInfoLite instance
         */
        public static create(properties?: IEquipmentInfoLite): EquipmentInfoLite;

        /**
         * Encodes the specified EquipmentInfoLite message. Does not implicitly {@link EquipmentInfoLite.verify|verify} messages.
         * @param message EquipmentInfoLite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IEquipmentInfoLite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EquipmentInfoLite message, length delimited. Does not implicitly {@link EquipmentInfoLite.verify|verify} messages.
         * @param message EquipmentInfoLite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IEquipmentInfoLite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EquipmentInfoLite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EquipmentInfoLite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): EquipmentInfoLite;

        /**
         * Decodes an EquipmentInfoLite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EquipmentInfoLite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): EquipmentInfoLite;

        /**
         * Verifies an EquipmentInfoLite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EquipmentInfoLite message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EquipmentInfoLite
         */
        public static fromObject(object: { [k: string]: any }): EquipmentInfoLite;

        /**
         * Creates a plain object from an EquipmentInfoLite message. Also converts values to other types if specified.
         * @param message EquipmentInfoLite
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: EquipmentInfoLite, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EquipmentInfoLite to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseHeartbeat. */
    interface IDseHeartbeat {

        /** DseHeartbeat time */
        time?: (number|null);
    }

    /** Represents a DseHeartbeat. */
    class DseHeartbeat implements IDseHeartbeat {

        /**
         * Constructs a new DseHeartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseHeartbeat);

        /** DseHeartbeat time. */
        public time: number;

        /**
         * Creates a new DseHeartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseHeartbeat instance
         */
        public static create(properties?: IDseHeartbeat): DseHeartbeat;

        /**
         * Encodes the specified DseHeartbeat message. Does not implicitly {@link DseHeartbeat.verify|verify} messages.
         * @param message DseHeartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseHeartbeat message, length delimited. Does not implicitly {@link DseHeartbeat.verify|verify} messages.
         * @param message DseHeartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseHeartbeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseHeartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseHeartbeat;

        /**
         * Decodes a DseHeartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseHeartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseHeartbeat;

        /**
         * Verifies a DseHeartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseHeartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseHeartbeat
         */
        public static fromObject(object: { [k: string]: any }): DseHeartbeat;

        /**
         * Creates a plain object from a DseHeartbeat message. Also converts values to other types if specified.
         * @param message DseHeartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseHeartbeat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseHeartbeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InstituteItem. */
    interface IInstituteItem {

        /** InstituteItem id */
        id?: (number|null);

        /** InstituteItem level */
        level?: (number|null);
    }

    /** Represents an InstituteItem. */
    class InstituteItem implements IInstituteItem {

        /**
         * Constructs a new InstituteItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: IInstituteItem);

        /** InstituteItem id. */
        public id: number;

        /** InstituteItem level. */
        public level: number;

        /**
         * Creates a new InstituteItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InstituteItem instance
         */
        public static create(properties?: IInstituteItem): InstituteItem;

        /**
         * Encodes the specified InstituteItem message. Does not implicitly {@link InstituteItem.verify|verify} messages.
         * @param message InstituteItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IInstituteItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InstituteItem message, length delimited. Does not implicitly {@link InstituteItem.verify|verify} messages.
         * @param message InstituteItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IInstituteItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InstituteItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstituteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): InstituteItem;

        /**
         * Decodes an InstituteItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InstituteItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): InstituteItem;

        /**
         * Verifies an InstituteItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InstituteItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstituteItem
         */
        public static fromObject(object: { [k: string]: any }): InstituteItem;

        /**
         * Creates a plain object from an InstituteItem message. Also converts values to other types if specified.
         * @param message InstituteItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InstituteItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InstituteItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InstituteList. */
    interface IInstituteList {

        /** InstituteList institutelist */
        institutelist?: (IInstituteItem[]|null);
    }

    /** Represents an InstituteList. */
    class InstituteList implements IInstituteList {

        /**
         * Constructs a new InstituteList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IInstituteList);

        /** InstituteList institutelist. */
        public institutelist: IInstituteItem[];

        /**
         * Creates a new InstituteList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InstituteList instance
         */
        public static create(properties?: IInstituteList): InstituteList;

        /**
         * Encodes the specified InstituteList message. Does not implicitly {@link InstituteList.verify|verify} messages.
         * @param message InstituteList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IInstituteList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InstituteList message, length delimited. Does not implicitly {@link InstituteList.verify|verify} messages.
         * @param message InstituteList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IInstituteList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InstituteList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstituteList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): InstituteList;

        /**
         * Decodes an InstituteList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InstituteList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): InstituteList;

        /**
         * Verifies an InstituteList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InstituteList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstituteList
         */
        public static fromObject(object: { [k: string]: any }): InstituteList;

        /**
         * Creates a plain object from an InstituteList message. Also converts values to other types if specified.
         * @param message InstituteList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InstituteList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InstituteList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InstituteData. */
    interface IInstituteData {

        /** InstituteData allinstitute */
        allinstitute?: (IInstituteList[]|null);

        /** InstituteData instituteid */
        instituteid?: (number|null);

        /** InstituteData finishtime */
        finishtime?: (string|null);

        /** InstituteData freesec */
        freesec?: (number|null);
    }

    /** Represents an InstituteData. */
    class InstituteData implements IInstituteData {

        /**
         * Constructs a new InstituteData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IInstituteData);

        /** InstituteData allinstitute. */
        public allinstitute: IInstituteList[];

        /** InstituteData instituteid. */
        public instituteid: number;

        /** InstituteData finishtime. */
        public finishtime: string;

        /** InstituteData freesec. */
        public freesec: number;

        /**
         * Creates a new InstituteData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InstituteData instance
         */
        public static create(properties?: IInstituteData): InstituteData;

        /**
         * Encodes the specified InstituteData message. Does not implicitly {@link InstituteData.verify|verify} messages.
         * @param message InstituteData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IInstituteData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified InstituteData message, length delimited. Does not implicitly {@link InstituteData.verify|verify} messages.
         * @param message InstituteData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IInstituteData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an InstituteData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InstituteData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): InstituteData;

        /**
         * Decodes an InstituteData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InstituteData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): InstituteData;

        /**
         * Verifies an InstituteData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InstituteData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InstituteData
         */
        public static fromObject(object: { [k: string]: any }): InstituteData;

        /**
         * Creates a plain object from an InstituteData message. Also converts values to other types if specified.
         * @param message InstituteData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: InstituteData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InstituteData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseInstituteOpt. */
    interface IDseInstituteOpt {

        /** DseInstituteOpt type */
        type?: (number|null);

        /** DseInstituteOpt instituteid */
        instituteid?: (number|null);

        /** DseInstituteOpt institute */
        institute?: (IInstituteData|null);

        /** DseInstituteOpt res */
        res?: (number|null);
    }

    /** Represents a DseInstituteOpt. */
    class DseInstituteOpt implements IDseInstituteOpt {

        /**
         * Constructs a new DseInstituteOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseInstituteOpt);

        /** DseInstituteOpt type. */
        public type: number;

        /** DseInstituteOpt instituteid. */
        public instituteid: number;

        /** DseInstituteOpt institute. */
        public institute?: (IInstituteData|null);

        /** DseInstituteOpt res. */
        public res: number;

        /**
         * Creates a new DseInstituteOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseInstituteOpt instance
         */
        public static create(properties?: IDseInstituteOpt): DseInstituteOpt;

        /**
         * Encodes the specified DseInstituteOpt message. Does not implicitly {@link DseInstituteOpt.verify|verify} messages.
         * @param message DseInstituteOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseInstituteOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseInstituteOpt message, length delimited. Does not implicitly {@link DseInstituteOpt.verify|verify} messages.
         * @param message DseInstituteOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseInstituteOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseInstituteOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseInstituteOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseInstituteOpt;

        /**
         * Decodes a DseInstituteOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseInstituteOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseInstituteOpt;

        /**
         * Verifies a DseInstituteOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseInstituteOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseInstituteOpt
         */
        public static fromObject(object: { [k: string]: any }): DseInstituteOpt;

        /**
         * Creates a plain object from a DseInstituteOpt message. Also converts values to other types if specified.
         * @param message DseInstituteOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseInstituteOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseInstituteOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ItemSourceType enum. */
    enum ItemSourceType {
        ITEM_SOURCE_NORMAL = 0,
        ITEM_SOURCE_TREASURE_CASE = 1,
        ITEM_SOURCE_GIFT = 2,
        ITEM_SOURCE_MULTI_DROP_CASE = 3,
        ITEM_SOURCE_PICK_GIFT = 4
    }

    /** Properties of a DseItemChange. */
    interface IDseItemChange {

        /** DseItemChange list */
        list?: (IMDropList|null);

        /** DseItemChange source */
        source?: (ItemSourceType|null);
    }

    /** Represents a DseItemChange. */
    class DseItemChange implements IDseItemChange {

        /**
         * Constructs a new DseItemChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseItemChange);

        /** DseItemChange list. */
        public list?: (IMDropList|null);

        /** DseItemChange source. */
        public source: ItemSourceType;

        /**
         * Creates a new DseItemChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseItemChange instance
         */
        public static create(properties?: IDseItemChange): DseItemChange;

        /**
         * Encodes the specified DseItemChange message. Does not implicitly {@link DseItemChange.verify|verify} messages.
         * @param message DseItemChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseItemChange, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseItemChange message, length delimited. Does not implicitly {@link DseItemChange.verify|verify} messages.
         * @param message DseItemChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseItemChange, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseItemChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseItemChange;

        /**
         * Decodes a DseItemChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseItemChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseItemChange;

        /**
         * Verifies a DseItemChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseItemChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseItemChange
         */
        public static fromObject(object: { [k: string]: any }): DseItemChange;

        /**
         * Creates a plain object from a DseItemChange message. Also converts values to other types if specified.
         * @param message DseItemChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseItemChange, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseItemChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ParamUnit. */
    interface IParamUnit {

        /** ParamUnit type */
        type?: (number|null);

        /** ParamUnit param */
        param?: (string|null);
    }

    /** Represents a ParamUnit. */
    class ParamUnit implements IParamUnit {

        /**
         * Constructs a new ParamUnit.
         * @param [properties] Properties to set
         */
        constructor(properties?: IParamUnit);

        /** ParamUnit type. */
        public type: number;

        /** ParamUnit param. */
        public param: string;

        /**
         * Creates a new ParamUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamUnit instance
         */
        public static create(properties?: IParamUnit): ParamUnit;

        /**
         * Encodes the specified ParamUnit message. Does not implicitly {@link ParamUnit.verify|verify} messages.
         * @param message ParamUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IParamUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ParamUnit message, length delimited. Does not implicitly {@link ParamUnit.verify|verify} messages.
         * @param message ParamUnit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IParamUnit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ParamUnit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ParamUnit;

        /**
         * Decodes a ParamUnit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ParamUnit;

        /**
         * Verifies a ParamUnit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamUnit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamUnit
         */
        public static fromObject(object: { [k: string]: any }): ParamUnit;

        /**
         * Creates a plain object from a ParamUnit message. Also converts values to other types if specified.
         * @param message ParamUnit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ParamUnit, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailData. */
    interface IMailData {

        /** MailData id */
        id?: (string|null);

        /** MailData createtime */
        createtime?: (string|null);

        /** MailData title */
        title?: (string|null);

        /** MailData content */
        content?: (string|null);

        /** MailData name */
        name?: (string|null);

        /** MailData uid */
        uid?: (string|null);

        /** MailData paramlist */
        paramlist?: (IParamUnit[]|null);

        /** MailData reward */
        reward?: (IMDropList|null);

        /** MailData isget */
        isget?: (boolean|null);

        /** MailData isread */
        isread?: (boolean|null);
    }

    /** Represents a MailData. */
    class MailData implements IMailData {

        /**
         * Constructs a new MailData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IMailData);

        /** MailData id. */
        public id: string;

        /** MailData createtime. */
        public createtime: string;

        /** MailData title. */
        public title: string;

        /** MailData content. */
        public content: string;

        /** MailData name. */
        public name: string;

        /** MailData uid. */
        public uid: string;

        /** MailData paramlist. */
        public paramlist: IParamUnit[];

        /** MailData reward. */
        public reward?: (IMDropList|null);

        /** MailData isget. */
        public isget: boolean;

        /** MailData isread. */
        public isread: boolean;

        /**
         * Creates a new MailData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailData instance
         */
        public static create(properties?: IMailData): MailData;

        /**
         * Encodes the specified MailData message. Does not implicitly {@link MailData.verify|verify} messages.
         * @param message MailData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IMailData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailData message, length delimited. Does not implicitly {@link MailData.verify|verify} messages.
         * @param message MailData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IMailData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): MailData;

        /**
         * Decodes a MailData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): MailData;

        /**
         * Verifies a MailData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailData
         */
        public static fromObject(object: { [k: string]: any }): MailData;

        /**
         * Creates a plain object from a MailData message. Also converts values to other types if specified.
         * @param message MailData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MailData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseMailOpt. */
    interface IDseMailOpt {

        /** DseMailOpt res */
        res?: (number|null);

        /** DseMailOpt type */
        type?: (number|null);

        /** DseMailOpt mailtype */
        mailtype?: (number|null);

        /** DseMailOpt maillist */
        maillist?: (IMailData[]|null);

        /** DseMailOpt newcounts */
        newcounts?: (number[]|null);
    }

    /** Represents a DseMailOpt. */
    class DseMailOpt implements IDseMailOpt {

        /**
         * Constructs a new DseMailOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseMailOpt);

        /** DseMailOpt res. */
        public res: number;

        /** DseMailOpt type. */
        public type: number;

        /** DseMailOpt mailtype. */
        public mailtype: number;

        /** DseMailOpt maillist. */
        public maillist: IMailData[];

        /** DseMailOpt newcounts. */
        public newcounts: number[];

        /**
         * Creates a new DseMailOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseMailOpt instance
         */
        public static create(properties?: IDseMailOpt): DseMailOpt;

        /**
         * Encodes the specified DseMailOpt message. Does not implicitly {@link DseMailOpt.verify|verify} messages.
         * @param message DseMailOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseMailOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseMailOpt message, length delimited. Does not implicitly {@link DseMailOpt.verify|verify} messages.
         * @param message DseMailOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseMailOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseMailOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseMailOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseMailOpt;

        /**
         * Decodes a DseMailOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseMailOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseMailOpt;

        /**
         * Verifies a DseMailOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseMailOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseMailOpt
         */
        public static fromObject(object: { [k: string]: any }): DseMailOpt;

        /**
         * Creates a plain object from a DseMailOpt message. Also converts values to other types if specified.
         * @param message DseMailOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseMailOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseMailOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseMainScreenReady. */
    interface IDseMainScreenReady {
    }

    /** Represents a DseMainScreenReady. */
    class DseMainScreenReady implements IDseMainScreenReady {

        /**
         * Constructs a new DseMainScreenReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseMainScreenReady);

        /**
         * Creates a new DseMainScreenReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseMainScreenReady instance
         */
        public static create(properties?: IDseMainScreenReady): DseMainScreenReady;

        /**
         * Encodes the specified DseMainScreenReady message. Does not implicitly {@link DseMainScreenReady.verify|verify} messages.
         * @param message DseMainScreenReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseMainScreenReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseMainScreenReady message, length delimited. Does not implicitly {@link DseMainScreenReady.verify|verify} messages.
         * @param message DseMainScreenReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseMainScreenReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseMainScreenReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseMainScreenReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseMainScreenReady;

        /**
         * Decodes a DseMainScreenReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseMainScreenReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseMainScreenReady;

        /**
         * Verifies a DseMainScreenReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseMainScreenReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseMainScreenReady
         */
        public static fromObject(object: { [k: string]: any }): DseMainScreenReady;

        /**
         * Creates a plain object from a DseMainScreenReady message. Also converts values to other types if specified.
         * @param message DseMainScreenReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseMainScreenReady, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseMainScreenReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseReformInfo. */
    interface IDseReformInfo {

        /** DseReformInfo spiritid */
        spiritid?: (number|null);

        /** DseReformInfo endtime */
        endtime?: (string|null);

        /** DseReformInfo interval */
        interval?: (number|null);

        /** DseReformInfo costnum */
        costnum?: (number|null);
    }

    /** Represents a DseReformInfo. */
    class DseReformInfo implements IDseReformInfo {

        /**
         * Constructs a new DseReformInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseReformInfo);

        /** DseReformInfo spiritid. */
        public spiritid: number;

        /** DseReformInfo endtime. */
        public endtime: string;

        /** DseReformInfo interval. */
        public interval: number;

        /** DseReformInfo costnum. */
        public costnum: number;

        /**
         * Creates a new DseReformInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseReformInfo instance
         */
        public static create(properties?: IDseReformInfo): DseReformInfo;

        /**
         * Encodes the specified DseReformInfo message. Does not implicitly {@link DseReformInfo.verify|verify} messages.
         * @param message DseReformInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseReformInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseReformInfo message, length delimited. Does not implicitly {@link DseReformInfo.verify|verify} messages.
         * @param message DseReformInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseReformInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseReformInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseReformInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseReformInfo;

        /**
         * Decodes a DseReformInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseReformInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseReformInfo;

        /**
         * Verifies a DseReformInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseReformInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseReformInfo
         */
        public static fromObject(object: { [k: string]: any }): DseReformInfo;

        /**
         * Creates a plain object from a DseReformInfo message. Also converts values to other types if specified.
         * @param message DseReformInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseReformInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseReformInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseResetLeaderResult. */
    interface IDseResetLeaderResult {

        /** DseResetLeaderResult result */
        result?: (number|null);
    }

    /** Represents a DseResetLeaderResult. */
    class DseResetLeaderResult implements IDseResetLeaderResult {

        /**
         * Constructs a new DseResetLeaderResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseResetLeaderResult);

        /** DseResetLeaderResult result. */
        public result: number;

        /**
         * Creates a new DseResetLeaderResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseResetLeaderResult instance
         */
        public static create(properties?: IDseResetLeaderResult): DseResetLeaderResult;

        /**
         * Encodes the specified DseResetLeaderResult message. Does not implicitly {@link DseResetLeaderResult.verify|verify} messages.
         * @param message DseResetLeaderResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseResetLeaderResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseResetLeaderResult message, length delimited. Does not implicitly {@link DseResetLeaderResult.verify|verify} messages.
         * @param message DseResetLeaderResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseResetLeaderResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseResetLeaderResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseResetLeaderResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseResetLeaderResult;

        /**
         * Decodes a DseResetLeaderResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseResetLeaderResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseResetLeaderResult;

        /**
         * Verifies a DseResetLeaderResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseResetLeaderResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseResetLeaderResult
         */
        public static fromObject(object: { [k: string]: any }): DseResetLeaderResult;

        /**
         * Creates a plain object from a DseResetLeaderResult message. Also converts values to other types if specified.
         * @param message DseResetLeaderResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseResetLeaderResult, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseResetLeaderResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseShopOpt. */
    interface IDseShopOpt {

        /** DseShopOpt type */
        type?: (number|null);

        /** DseShopOpt shopid */
        shopid?: (number|null);

        /** DseShopOpt count */
        count?: (number|null);

        /** DseShopOpt res */
        res?: (number|null);

        /** DseShopOpt buylist */
        buylist?: (IShopUnit[]|null);
    }

    /** Represents a DseShopOpt. */
    class DseShopOpt implements IDseShopOpt {

        /**
         * Constructs a new DseShopOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseShopOpt);

        /** DseShopOpt type. */
        public type: number;

        /** DseShopOpt shopid. */
        public shopid: number;

        /** DseShopOpt count. */
        public count: number;

        /** DseShopOpt res. */
        public res: number;

        /** DseShopOpt buylist. */
        public buylist: IShopUnit[];

        /**
         * Creates a new DseShopOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseShopOpt instance
         */
        public static create(properties?: IDseShopOpt): DseShopOpt;

        /**
         * Encodes the specified DseShopOpt message. Does not implicitly {@link DseShopOpt.verify|verify} messages.
         * @param message DseShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseShopOpt message, length delimited. Does not implicitly {@link DseShopOpt.verify|verify} messages.
         * @param message DseShopOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseShopOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseShopOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseShopOpt;

        /**
         * Decodes a DseShopOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseShopOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseShopOpt;

        /**
         * Verifies a DseShopOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseShopOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseShopOpt
         */
        public static fromObject(object: { [k: string]: any }): DseShopOpt;

        /**
         * Creates a plain object from a DseShopOpt message. Also converts values to other types if specified.
         * @param message DseShopOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseShopOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseShopOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSpiritDebrisList. */
    interface IDseSpiritDebrisList {

        /** DseSpiritDebrisList items */
        items?: (IMItem[]|null);
    }

    /** Represents a DseSpiritDebrisList. */
    class DseSpiritDebrisList implements IDseSpiritDebrisList {

        /**
         * Constructs a new DseSpiritDebrisList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSpiritDebrisList);

        /** DseSpiritDebrisList items. */
        public items: IMItem[];

        /**
         * Creates a new DseSpiritDebrisList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSpiritDebrisList instance
         */
        public static create(properties?: IDseSpiritDebrisList): DseSpiritDebrisList;

        /**
         * Encodes the specified DseSpiritDebrisList message. Does not implicitly {@link DseSpiritDebrisList.verify|verify} messages.
         * @param message DseSpiritDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSpiritDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSpiritDebrisList message, length delimited. Does not implicitly {@link DseSpiritDebrisList.verify|verify} messages.
         * @param message DseSpiritDebrisList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSpiritDebrisList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSpiritDebrisList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSpiritDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSpiritDebrisList;

        /**
         * Decodes a DseSpiritDebrisList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSpiritDebrisList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSpiritDebrisList;

        /**
         * Verifies a DseSpiritDebrisList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSpiritDebrisList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSpiritDebrisList
         */
        public static fromObject(object: { [k: string]: any }): DseSpiritDebrisList;

        /**
         * Creates a plain object from a DseSpiritDebrisList message. Also converts values to other types if specified.
         * @param message DseSpiritDebrisList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSpiritDebrisList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSpiritDebrisList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSpiritDevelop. */
    interface IDseSpiritDevelop {

        /** DseSpiritDevelop id */
        id?: (number|null);

        /** DseSpiritDevelop action */
        action?: (number|null);

        /** DseSpiritDevelop code */
        code?: (number|null);
    }

    /** Represents a DseSpiritDevelop. */
    class DseSpiritDevelop implements IDseSpiritDevelop {

        /**
         * Constructs a new DseSpiritDevelop.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSpiritDevelop);

        /** DseSpiritDevelop id. */
        public id: number;

        /** DseSpiritDevelop action. */
        public action: number;

        /** DseSpiritDevelop code. */
        public code: number;

        /**
         * Creates a new DseSpiritDevelop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSpiritDevelop instance
         */
        public static create(properties?: IDseSpiritDevelop): DseSpiritDevelop;

        /**
         * Encodes the specified DseSpiritDevelop message. Does not implicitly {@link DseSpiritDevelop.verify|verify} messages.
         * @param message DseSpiritDevelop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSpiritDevelop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSpiritDevelop message, length delimited. Does not implicitly {@link DseSpiritDevelop.verify|verify} messages.
         * @param message DseSpiritDevelop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSpiritDevelop, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSpiritDevelop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSpiritDevelop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSpiritDevelop;

        /**
         * Decodes a DseSpiritDevelop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSpiritDevelop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSpiritDevelop;

        /**
         * Verifies a DseSpiritDevelop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSpiritDevelop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSpiritDevelop
         */
        public static fromObject(object: { [k: string]: any }): DseSpiritDevelop;

        /**
         * Creates a plain object from a DseSpiritDevelop message. Also converts values to other types if specified.
         * @param message DseSpiritDevelop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSpiritDevelop, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSpiritDevelop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseStageAward. */
    interface IDseStageAward {

        /** DseStageAward type */
        type?: (number|null);

        /** DseStageAward chapterid */
        chapterid?: (number|null);

        /** DseStageAward sceneid */
        sceneid?: (number|null);

        /** DseStageAward res */
        res?: (number|null);
    }

    /** Represents a DseStageAward. */
    class DseStageAward implements IDseStageAward {

        /**
         * Constructs a new DseStageAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseStageAward);

        /** DseStageAward type. */
        public type: number;

        /** DseStageAward chapterid. */
        public chapterid: number;

        /** DseStageAward sceneid. */
        public sceneid: number;

        /** DseStageAward res. */
        public res: number;

        /**
         * Creates a new DseStageAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseStageAward instance
         */
        public static create(properties?: IDseStageAward): DseStageAward;

        /**
         * Encodes the specified DseStageAward message. Does not implicitly {@link DseStageAward.verify|verify} messages.
         * @param message DseStageAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseStageAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseStageAward message, length delimited. Does not implicitly {@link DseStageAward.verify|verify} messages.
         * @param message DseStageAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseStageAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseStageAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseStageAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseStageAward;

        /**
         * Decodes a DseStageAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseStageAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseStageAward;

        /**
         * Verifies a DseStageAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseStageAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseStageAward
         */
        public static fromObject(object: { [k: string]: any }): DseStageAward;

        /**
         * Creates a plain object from a DseStageAward message. Also converts values to other types if specified.
         * @param message DseStageAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseStageAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseStageAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExploreData. */
    interface IExploreData {

        /** ExploreData starttime */
        starttime?: (string|null);

        /** ExploreData maxendtime */
        maxendtime?: (string|null);

        /** ExploreData totalgold */
        totalgold?: (number|null);

        /** ExploreData totalexp */
        totalexp?: (number|null);

        /** ExploreData interval */
        interval?: (number|null);

        /** ExploreData goldonce */
        goldonce?: (number|null);

        /** ExploreData exponce */
        exponce?: (number|null);

        /** ExploreData havedrop */
        havedrop?: (boolean|null);
    }

    /** Represents an ExploreData. */
    class ExploreData implements IExploreData {

        /**
         * Constructs a new ExploreData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IExploreData);

        /** ExploreData starttime. */
        public starttime: string;

        /** ExploreData maxendtime. */
        public maxendtime: string;

        /** ExploreData totalgold. */
        public totalgold: number;

        /** ExploreData totalexp. */
        public totalexp: number;

        /** ExploreData interval. */
        public interval: number;

        /** ExploreData goldonce. */
        public goldonce: number;

        /** ExploreData exponce. */
        public exponce: number;

        /** ExploreData havedrop. */
        public havedrop: boolean;

        /**
         * Creates a new ExploreData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExploreData instance
         */
        public static create(properties?: IExploreData): ExploreData;

        /**
         * Encodes the specified ExploreData message. Does not implicitly {@link ExploreData.verify|verify} messages.
         * @param message ExploreData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IExploreData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ExploreData message, length delimited. Does not implicitly {@link ExploreData.verify|verify} messages.
         * @param message ExploreData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IExploreData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExploreData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExploreData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ExploreData;

        /**
         * Decodes an ExploreData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExploreData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ExploreData;

        /**
         * Verifies an ExploreData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExploreData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExploreData
         */
        public static fromObject(object: { [k: string]: any }): ExploreData;

        /**
         * Creates a plain object from an ExploreData message. Also converts values to other types if specified.
         * @param message ExploreData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ExploreData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExploreData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseStageExplore. */
    interface IDseStageExplore {

        /** DseStageExplore type */
        type?: (number|null);

        /** DseStageExplore res */
        res?: (number|null);

        /** DseStageExplore info */
        info?: (IExploreData|null);

        /** DseStageExplore gold */
        gold?: (number|null);

        /** DseStageExplore exp */
        exp?: (number|null);

        /** DseStageExplore droplist */
        droplist?: (IMDropList|null);
    }

    /** Represents a DseStageExplore. */
    class DseStageExplore implements IDseStageExplore {

        /**
         * Constructs a new DseStageExplore.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseStageExplore);

        /** DseStageExplore type. */
        public type: number;

        /** DseStageExplore res. */
        public res: number;

        /** DseStageExplore info. */
        public info?: (IExploreData|null);

        /** DseStageExplore gold. */
        public gold: number;

        /** DseStageExplore exp. */
        public exp: number;

        /** DseStageExplore droplist. */
        public droplist?: (IMDropList|null);

        /**
         * Creates a new DseStageExplore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseStageExplore instance
         */
        public static create(properties?: IDseStageExplore): DseStageExplore;

        /**
         * Encodes the specified DseStageExplore message. Does not implicitly {@link DseStageExplore.verify|verify} messages.
         * @param message DseStageExplore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseStageExplore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseStageExplore message, length delimited. Does not implicitly {@link DseStageExplore.verify|verify} messages.
         * @param message DseStageExplore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseStageExplore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseStageExplore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseStageExplore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseStageExplore;

        /**
         * Decodes a DseStageExplore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseStageExplore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseStageExplore;

        /**
         * Verifies a DseStageExplore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseStageExplore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseStageExplore
         */
        public static fromObject(object: { [k: string]: any }): DseStageExplore;

        /**
         * Creates a plain object from a DseStageExplore message. Also converts values to other types if specified.
         * @param message DseStageExplore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseStageExplore, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseStageExplore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChapterInfo. */
    interface IChapterInfo {

        /** ChapterInfo chapterid */
        chapterid?: (number|null);

        /** ChapterInfo nextstageid */
        nextstageid?: (number|null);

        /** ChapterInfo isaward */
        isaward?: (boolean|null);

        /** ChapterInfo scenelist */
        scenelist?: (IChildInfo[]|null);

        /** ChapterInfo lastjuniorstageid */
        lastjuniorstageid?: (number|null);
    }

    /** Represents a ChapterInfo. */
    class ChapterInfo implements IChapterInfo {

        /**
         * Constructs a new ChapterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IChapterInfo);

        /** ChapterInfo chapterid. */
        public chapterid: number;

        /** ChapterInfo nextstageid. */
        public nextstageid: number;

        /** ChapterInfo isaward. */
        public isaward: boolean;

        /** ChapterInfo scenelist. */
        public scenelist: IChildInfo[];

        /** ChapterInfo lastjuniorstageid. */
        public lastjuniorstageid: number;

        /**
         * Creates a new ChapterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChapterInfo instance
         */
        public static create(properties?: IChapterInfo): ChapterInfo;

        /**
         * Encodes the specified ChapterInfo message. Does not implicitly {@link ChapterInfo.verify|verify} messages.
         * @param message ChapterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IChapterInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChapterInfo message, length delimited. Does not implicitly {@link ChapterInfo.verify|verify} messages.
         * @param message ChapterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IChapterInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChapterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChapterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ChapterInfo;

        /**
         * Decodes a ChapterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChapterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ChapterInfo;

        /**
         * Verifies a ChapterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChapterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChapterInfo
         */
        public static fromObject(object: { [k: string]: any }): ChapterInfo;

        /**
         * Creates a plain object from a ChapterInfo message. Also converts values to other types if specified.
         * @param message ChapterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChapterInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChapterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChildInfo. */
    interface IChildInfo {

        /** ChildInfo sceneid */
        sceneid?: (number|null);

        /** ChildInfo scenestar */
        scenestar?: (number|null);

        /** ChildInfo isaward */
        isaward?: (boolean|null);

        /** ChildInfo stagelist */
        stagelist?: (IStageData[]|null);
    }

    /** Represents a ChildInfo. */
    class ChildInfo implements IChildInfo {

        /**
         * Constructs a new ChildInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IChildInfo);

        /** ChildInfo sceneid. */
        public sceneid: number;

        /** ChildInfo scenestar. */
        public scenestar: number;

        /** ChildInfo isaward. */
        public isaward: boolean;

        /** ChildInfo stagelist. */
        public stagelist: IStageData[];

        /**
         * Creates a new ChildInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChildInfo instance
         */
        public static create(properties?: IChildInfo): ChildInfo;

        /**
         * Encodes the specified ChildInfo message. Does not implicitly {@link ChildInfo.verify|verify} messages.
         * @param message ChildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IChildInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChildInfo message, length delimited. Does not implicitly {@link ChildInfo.verify|verify} messages.
         * @param message ChildInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IChildInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChildInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ChildInfo;

        /**
         * Decodes a ChildInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ChildInfo;

        /**
         * Verifies a ChildInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChildInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChildInfo
         */
        public static fromObject(object: { [k: string]: any }): ChildInfo;

        /**
         * Creates a plain object from a ChildInfo message. Also converts values to other types if specified.
         * @param message ChildInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ChildInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChildInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseStageInfo. */
    interface IDseStageInfo {

        /** DseStageInfo type */
        type?: (number|null);

        /** DseStageInfo chapterinfo */
        chapterinfo?: (IChapterInfo|null);
    }

    /** Represents a DseStageInfo. */
    class DseStageInfo implements IDseStageInfo {

        /**
         * Constructs a new DseStageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseStageInfo);

        /** DseStageInfo type. */
        public type: number;

        /** DseStageInfo chapterinfo. */
        public chapterinfo?: (IChapterInfo|null);

        /**
         * Creates a new DseStageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseStageInfo instance
         */
        public static create(properties?: IDseStageInfo): DseStageInfo;

        /**
         * Encodes the specified DseStageInfo message. Does not implicitly {@link DseStageInfo.verify|verify} messages.
         * @param message DseStageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseStageInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseStageInfo message, length delimited. Does not implicitly {@link DseStageInfo.verify|verify} messages.
         * @param message DseStageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseStageInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseStageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseStageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseStageInfo;

        /**
         * Decodes a DseStageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseStageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseStageInfo;

        /**
         * Verifies a DseStageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseStageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseStageInfo
         */
        public static fromObject(object: { [k: string]: any }): DseStageInfo;

        /**
         * Creates a plain object from a DseStageInfo message. Also converts values to other types if specified.
         * @param message DseStageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseStageInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseStageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StageData. */
    interface IStageData {

        /** StageData stageid */
        stageid?: (number|null);

        /** StageData star */
        star?: (number|null);

        /** StageData todaytimes */
        todaytimes?: (number|null);

        /** StageData todaybuy */
        todaybuy?: (number|null);
    }

    /** Represents a StageData. */
    class StageData implements IStageData {

        /**
         * Constructs a new StageData.
         * @param [properties] Properties to set
         */
        constructor(properties?: IStageData);

        /** StageData stageid. */
        public stageid: number;

        /** StageData star. */
        public star: number;

        /** StageData todaytimes. */
        public todaytimes: number;

        /** StageData todaybuy. */
        public todaybuy: number;

        /**
         * Creates a new StageData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StageData instance
         */
        public static create(properties?: IStageData): StageData;

        /**
         * Encodes the specified StageData message. Does not implicitly {@link StageData.verify|verify} messages.
         * @param message StageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IStageData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StageData message, length delimited. Does not implicitly {@link StageData.verify|verify} messages.
         * @param message StageData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IStageData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StageData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): StageData;

        /**
         * Decodes a StageData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): StageData;

        /**
         * Verifies a StageData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StageData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StageData
         */
        public static fromObject(object: { [k: string]: any }): StageData;

        /**
         * Creates a plain object from a StageData message. Also converts values to other types if specified.
         * @param message StageData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: StageData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StageData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseStageReset. */
    interface IDseStageReset {

        /** DseStageReset res */
        res?: (number|null);
    }

    /** Represents a DseStageReset. */
    class DseStageReset implements IDseStageReset {

        /**
         * Constructs a new DseStageReset.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseStageReset);

        /** DseStageReset res. */
        public res: number;

        /**
         * Creates a new DseStageReset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseStageReset instance
         */
        public static create(properties?: IDseStageReset): DseStageReset;

        /**
         * Encodes the specified DseStageReset message. Does not implicitly {@link DseStageReset.verify|verify} messages.
         * @param message DseStageReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseStageReset, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseStageReset message, length delimited. Does not implicitly {@link DseStageReset.verify|verify} messages.
         * @param message DseStageReset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseStageReset, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseStageReset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseStageReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseStageReset;

        /**
         * Decodes a DseStageReset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseStageReset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseStageReset;

        /**
         * Verifies a DseStageReset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseStageReset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseStageReset
         */
        public static fromObject(object: { [k: string]: any }): DseStageReset;

        /**
         * Creates a plain object from a DseStageReset message. Also converts values to other types if specified.
         * @param message DseStageReset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseStageReset, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseStageReset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseStorageList. */
    interface IDseStorageList {

        /** DseStorageList type */
        type?: (StorageType|null);

        /** DseStorageList items */
        items?: (IMItem[]|null);
    }

    /** Represents a DseStorageList. */
    class DseStorageList implements IDseStorageList {

        /**
         * Constructs a new DseStorageList.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseStorageList);

        /** DseStorageList type. */
        public type: StorageType;

        /** DseStorageList items. */
        public items: IMItem[];

        /**
         * Creates a new DseStorageList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseStorageList instance
         */
        public static create(properties?: IDseStorageList): DseStorageList;

        /**
         * Encodes the specified DseStorageList message. Does not implicitly {@link DseStorageList.verify|verify} messages.
         * @param message DseStorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseStorageList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseStorageList message, length delimited. Does not implicitly {@link DseStorageList.verify|verify} messages.
         * @param message DseStorageList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseStorageList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseStorageList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseStorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseStorageList;

        /**
         * Decodes a DseStorageList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseStorageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseStorageList;

        /**
         * Verifies a DseStorageList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseStorageList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseStorageList
         */
        public static fromObject(object: { [k: string]: any }): DseStorageList;

        /**
         * Creates a plain object from a DseStorageList message. Also converts values to other types if specified.
         * @param message DseStorageList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseStorageList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseStorageList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSummon. */
    interface IDseSummon {

        /** DseSummon id */
        id?: (number|null);

        /** DseSummon mode */
        mode?: (number|null);

        /** DseSummon code */
        code?: (number|null);

        /** DseSummon list */
        list?: (IMDropList|null);
    }

    /** Represents a DseSummon. */
    class DseSummon implements IDseSummon {

        /**
         * Constructs a new DseSummon.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSummon);

        /** DseSummon id. */
        public id: number;

        /** DseSummon mode. */
        public mode: number;

        /** DseSummon code. */
        public code: number;

        /** DseSummon list. */
        public list?: (IMDropList|null);

        /**
         * Creates a new DseSummon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSummon instance
         */
        public static create(properties?: IDseSummon): DseSummon;

        /**
         * Encodes the specified DseSummon message. Does not implicitly {@link DseSummon.verify|verify} messages.
         * @param message DseSummon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSummon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSummon message, length delimited. Does not implicitly {@link DseSummon.verify|verify} messages.
         * @param message DseSummon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSummon, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSummon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSummon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSummon;

        /**
         * Decodes a DseSummon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSummon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSummon;

        /**
         * Verifies a DseSummon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSummon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSummon
         */
        public static fromObject(object: { [k: string]: any }): DseSummon;

        /**
         * Creates a plain object from a DseSummon message. Also converts values to other types if specified.
         * @param message DseSummon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSummon, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSummon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SummonPool. */
    interface ISummonPool {

        /** SummonPool id */
        id?: (number|null);

        /** SummonPool free_used */
        free_used?: (number|null);

        /** SummonPool next_free */
        next_free?: (string|null);
    }

    /** Represents a SummonPool. */
    class SummonPool implements ISummonPool {

        /**
         * Constructs a new SummonPool.
         * @param [properties] Properties to set
         */
        constructor(properties?: ISummonPool);

        /** SummonPool id. */
        public id: number;

        /** SummonPool free_used. */
        public free_used: number;

        /** SummonPool next_free. */
        public next_free: string;

        /**
         * Creates a new SummonPool instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SummonPool instance
         */
        public static create(properties?: ISummonPool): SummonPool;

        /**
         * Encodes the specified SummonPool message. Does not implicitly {@link SummonPool.verify|verify} messages.
         * @param message SummonPool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ISummonPool, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SummonPool message, length delimited. Does not implicitly {@link SummonPool.verify|verify} messages.
         * @param message SummonPool message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ISummonPool, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SummonPool message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SummonPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): SummonPool;

        /**
         * Decodes a SummonPool message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SummonPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): SummonPool;

        /**
         * Verifies a SummonPool message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SummonPool message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SummonPool
         */
        public static fromObject(object: { [k: string]: any }): SummonPool;

        /**
         * Creates a plain object from a SummonPool message. Also converts values to other types if specified.
         * @param message SummonPool
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SummonPool, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SummonPool to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSummonInterface. */
    interface IDseSummonInterface {

        /** DseSummonInterface pools */
        pools?: (ISummonPool[]|null);
    }

    /** Represents a DseSummonInterface. */
    class DseSummonInterface implements IDseSummonInterface {

        /**
         * Constructs a new DseSummonInterface.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSummonInterface);

        /** DseSummonInterface pools. */
        public pools: ISummonPool[];

        /**
         * Creates a new DseSummonInterface instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSummonInterface instance
         */
        public static create(properties?: IDseSummonInterface): DseSummonInterface;

        /**
         * Encodes the specified DseSummonInterface message. Does not implicitly {@link DseSummonInterface.verify|verify} messages.
         * @param message DseSummonInterface message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSummonInterface, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSummonInterface message, length delimited. Does not implicitly {@link DseSummonInterface.verify|verify} messages.
         * @param message DseSummonInterface message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSummonInterface, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSummonInterface message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSummonInterface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSummonInterface;

        /**
         * Decodes a DseSummonInterface message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSummonInterface
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSummonInterface;

        /**
         * Verifies a DseSummonInterface message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSummonInterface message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSummonInterface
         */
        public static fromObject(object: { [k: string]: any }): DseSummonInterface;

        /**
         * Creates a plain object from a DseSummonInterface message. Also converts values to other types if specified.
         * @param message DseSummonInterface
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSummonInterface, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSummonInterface to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseSwitchFormation. */
    interface IDseSwitchFormation {

        /** DseSwitchFormation code */
        code?: (number|null);
    }

    /** Represents a DseSwitchFormation. */
    class DseSwitchFormation implements IDseSwitchFormation {

        /**
         * Constructs a new DseSwitchFormation.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseSwitchFormation);

        /** DseSwitchFormation code. */
        public code: number;

        /**
         * Creates a new DseSwitchFormation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseSwitchFormation instance
         */
        public static create(properties?: IDseSwitchFormation): DseSwitchFormation;

        /**
         * Encodes the specified DseSwitchFormation message. Does not implicitly {@link DseSwitchFormation.verify|verify} messages.
         * @param message DseSwitchFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseSwitchFormation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseSwitchFormation message, length delimited. Does not implicitly {@link DseSwitchFormation.verify|verify} messages.
         * @param message DseSwitchFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseSwitchFormation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseSwitchFormation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseSwitchFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseSwitchFormation;

        /**
         * Decodes a DseSwitchFormation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseSwitchFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseSwitchFormation;

        /**
         * Verifies a DseSwitchFormation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseSwitchFormation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseSwitchFormation
         */
        public static fromObject(object: { [k: string]: any }): DseSwitchFormation;

        /**
         * Creates a plain object from a DseSwitchFormation message. Also converts values to other types if specified.
         * @param message DseSwitchFormation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseSwitchFormation, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseSwitchFormation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TownPatrolInfo. */
    interface ITownPatrolInfo {

        /** TownPatrolInfo pos */
        pos?: (number|null);

        /** TownPatrolInfo patrolspells */
        patrolspells?: (number|null);

        /** TownPatrolInfo lastrecovertime */
        lastrecovertime?: (string|null);

        /** TownPatrolInfo isbuy */
        isbuy?: (boolean|null);

        /** TownPatrolInfo slatelist */
        slatelist?: (number[]|null);

        /** TownPatrolInfo canguess */
        canguess?: (boolean|null);

        /** TownPatrolInfo canhoeing */
        canhoeing?: (boolean|null);

        /** TownPatrolInfo finishtimes */
        finishtimes?: (number|null);

        /** TownPatrolInfo finishreward */
        finishreward?: (number[]|null);
    }

    /** Represents a TownPatrolInfo. */
    class TownPatrolInfo implements ITownPatrolInfo {

        /**
         * Constructs a new TownPatrolInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: ITownPatrolInfo);

        /** TownPatrolInfo pos. */
        public pos: number;

        /** TownPatrolInfo patrolspells. */
        public patrolspells: number;

        /** TownPatrolInfo lastrecovertime. */
        public lastrecovertime: string;

        /** TownPatrolInfo isbuy. */
        public isbuy: boolean;

        /** TownPatrolInfo slatelist. */
        public slatelist: number[];

        /** TownPatrolInfo canguess. */
        public canguess: boolean;

        /** TownPatrolInfo canhoeing. */
        public canhoeing: boolean;

        /** TownPatrolInfo finishtimes. */
        public finishtimes: number;

        /** TownPatrolInfo finishreward. */
        public finishreward: number[];

        /**
         * Creates a new TownPatrolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TownPatrolInfo instance
         */
        public static create(properties?: ITownPatrolInfo): TownPatrolInfo;

        /**
         * Encodes the specified TownPatrolInfo message. Does not implicitly {@link TownPatrolInfo.verify|verify} messages.
         * @param message TownPatrolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ITownPatrolInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TownPatrolInfo message, length delimited. Does not implicitly {@link TownPatrolInfo.verify|verify} messages.
         * @param message TownPatrolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ITownPatrolInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TownPatrolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TownPatrolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): TownPatrolInfo;

        /**
         * Decodes a TownPatrolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TownPatrolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): TownPatrolInfo;

        /**
         * Verifies a TownPatrolInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TownPatrolInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TownPatrolInfo
         */
        public static fromObject(object: { [k: string]: any }): TownPatrolInfo;

        /**
         * Creates a plain object from a TownPatrolInfo message. Also converts values to other types if specified.
         * @param message TownPatrolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TownPatrolInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TownPatrolInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TownPatrolOneMove. */
    interface ITownPatrolOneMove {

        /** TownPatrolOneMove slatenum */
        slatenum?: (number|null);

        /** TownPatrolOneMove eventtype */
        eventtype?: (number|null);

        /** TownPatrolOneMove droplist */
        droplist?: (IMDropList|null);

        /** TownPatrolOneMove farmland */
        farmland?: (IMDropList|null);

        /** TownPatrolOneMove getgold */
        getgold?: (number|null);
    }

    /** Represents a TownPatrolOneMove. */
    class TownPatrolOneMove implements ITownPatrolOneMove {

        /**
         * Constructs a new TownPatrolOneMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: ITownPatrolOneMove);

        /** TownPatrolOneMove slatenum. */
        public slatenum: number;

        /** TownPatrolOneMove eventtype. */
        public eventtype: number;

        /** TownPatrolOneMove droplist. */
        public droplist?: (IMDropList|null);

        /** TownPatrolOneMove farmland. */
        public farmland?: (IMDropList|null);

        /** TownPatrolOneMove getgold. */
        public getgold: number;

        /**
         * Creates a new TownPatrolOneMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TownPatrolOneMove instance
         */
        public static create(properties?: ITownPatrolOneMove): TownPatrolOneMove;

        /**
         * Encodes the specified TownPatrolOneMove message. Does not implicitly {@link TownPatrolOneMove.verify|verify} messages.
         * @param message TownPatrolOneMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ITownPatrolOneMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TownPatrolOneMove message, length delimited. Does not implicitly {@link TownPatrolOneMove.verify|verify} messages.
         * @param message TownPatrolOneMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ITownPatrolOneMove, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TownPatrolOneMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TownPatrolOneMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): TownPatrolOneMove;

        /**
         * Decodes a TownPatrolOneMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TownPatrolOneMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): TownPatrolOneMove;

        /**
         * Verifies a TownPatrolOneMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TownPatrolOneMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TownPatrolOneMove
         */
        public static fromObject(object: { [k: string]: any }): TownPatrolOneMove;

        /**
         * Creates a plain object from a TownPatrolOneMove message. Also converts values to other types if specified.
         * @param message TownPatrolOneMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: TownPatrolOneMove, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TownPatrolOneMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseTownPatrolOpt. */
    interface IDseTownPatrolOpt {

        /** DseTownPatrolOpt type */
        type?: (number|null);

        /** DseTownPatrolOpt res */
        res?: (number|null);

        /** DseTownPatrolOpt param */
        param?: (number|null);

        /** DseTownPatrolOpt guessres */
        guessres?: (number|null);

        /** DseTownPatrolOpt optiondroplist */
        optiondroplist?: (IMDropList|null);

        /** DseTownPatrolOpt movelist */
        movelist?: (ITownPatrolOneMove[]|null);

        /** DseTownPatrolOpt patrolinfo */
        patrolinfo?: (ITownPatrolInfo|null);
    }

    /** Represents a DseTownPatrolOpt. */
    class DseTownPatrolOpt implements IDseTownPatrolOpt {

        /**
         * Constructs a new DseTownPatrolOpt.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseTownPatrolOpt);

        /** DseTownPatrolOpt type. */
        public type: number;

        /** DseTownPatrolOpt res. */
        public res: number;

        /** DseTownPatrolOpt param. */
        public param: number;

        /** DseTownPatrolOpt guessres. */
        public guessres: number;

        /** DseTownPatrolOpt optiondroplist. */
        public optiondroplist?: (IMDropList|null);

        /** DseTownPatrolOpt movelist. */
        public movelist: ITownPatrolOneMove[];

        /** DseTownPatrolOpt patrolinfo. */
        public patrolinfo?: (ITownPatrolInfo|null);

        /**
         * Creates a new DseTownPatrolOpt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseTownPatrolOpt instance
         */
        public static create(properties?: IDseTownPatrolOpt): DseTownPatrolOpt;

        /**
         * Encodes the specified DseTownPatrolOpt message. Does not implicitly {@link DseTownPatrolOpt.verify|verify} messages.
         * @param message DseTownPatrolOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseTownPatrolOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseTownPatrolOpt message, length delimited. Does not implicitly {@link DseTownPatrolOpt.verify|verify} messages.
         * @param message DseTownPatrolOpt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseTownPatrolOpt, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseTownPatrolOpt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseTownPatrolOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseTownPatrolOpt;

        /**
         * Decodes a DseTownPatrolOpt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseTownPatrolOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseTownPatrolOpt;

        /**
         * Verifies a DseTownPatrolOpt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseTownPatrolOpt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseTownPatrolOpt
         */
        public static fromObject(object: { [k: string]: any }): DseTownPatrolOpt;

        /**
         * Creates a plain object from a DseTownPatrolOpt message. Also converts values to other types if specified.
         * @param message DseTownPatrolOpt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseTownPatrolOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseTownPatrolOpt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseUpdateEquipmentInfo. */
    interface IDseUpdateEquipmentInfo {

        /** DseUpdateEquipmentInfo infos */
        infos?: (IEquipmentInfo[]|null);
    }

    /** Represents a DseUpdateEquipmentInfo. */
    class DseUpdateEquipmentInfo implements IDseUpdateEquipmentInfo {

        /**
         * Constructs a new DseUpdateEquipmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseUpdateEquipmentInfo);

        /** DseUpdateEquipmentInfo infos. */
        public infos: IEquipmentInfo[];

        /**
         * Creates a new DseUpdateEquipmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseUpdateEquipmentInfo instance
         */
        public static create(properties?: IDseUpdateEquipmentInfo): DseUpdateEquipmentInfo;

        /**
         * Encodes the specified DseUpdateEquipmentInfo message. Does not implicitly {@link DseUpdateEquipmentInfo.verify|verify} messages.
         * @param message DseUpdateEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseUpdateEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseUpdateEquipmentInfo message, length delimited. Does not implicitly {@link DseUpdateEquipmentInfo.verify|verify} messages.
         * @param message DseUpdateEquipmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseUpdateEquipmentInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseUpdateEquipmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseUpdateEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseUpdateEquipmentInfo;

        /**
         * Decodes a DseUpdateEquipmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseUpdateEquipmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseUpdateEquipmentInfo;

        /**
         * Verifies a DseUpdateEquipmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseUpdateEquipmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseUpdateEquipmentInfo
         */
        public static fromObject(object: { [k: string]: any }): DseUpdateEquipmentInfo;

        /**
         * Creates a plain object from a DseUpdateEquipmentInfo message. Also converts values to other types if specified.
         * @param message DseUpdateEquipmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseUpdateEquipmentInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseUpdateEquipmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseUpdateSpiritInfo. */
    interface IDseUpdateSpiritInfo {

        /** DseUpdateSpiritInfo soldiers */
        soldiers?: (IDseSingleSpiritInfo[]|null);
    }

    /** Represents a DseUpdateSpiritInfo. */
    class DseUpdateSpiritInfo implements IDseUpdateSpiritInfo {

        /**
         * Constructs a new DseUpdateSpiritInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseUpdateSpiritInfo);

        /** DseUpdateSpiritInfo soldiers. */
        public soldiers: IDseSingleSpiritInfo[];

        /**
         * Creates a new DseUpdateSpiritInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseUpdateSpiritInfo instance
         */
        public static create(properties?: IDseUpdateSpiritInfo): DseUpdateSpiritInfo;

        /**
         * Encodes the specified DseUpdateSpiritInfo message. Does not implicitly {@link DseUpdateSpiritInfo.verify|verify} messages.
         * @param message DseUpdateSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseUpdateSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseUpdateSpiritInfo message, length delimited. Does not implicitly {@link DseUpdateSpiritInfo.verify|verify} messages.
         * @param message DseUpdateSpiritInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseUpdateSpiritInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseUpdateSpiritInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseUpdateSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseUpdateSpiritInfo;

        /**
         * Decodes a DseUpdateSpiritInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseUpdateSpiritInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseUpdateSpiritInfo;

        /**
         * Verifies a DseUpdateSpiritInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseUpdateSpiritInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseUpdateSpiritInfo
         */
        public static fromObject(object: { [k: string]: any }): DseUpdateSpiritInfo;

        /**
         * Creates a plain object from a DseUpdateSpiritInfo message. Also converts values to other types if specified.
         * @param message DseUpdateSpiritInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseUpdateSpiritInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseUpdateSpiritInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseUpdateStage. */
    interface IDseUpdateStage {

        /** DseUpdateStage type */
        type?: (number|null);

        /** DseUpdateStage stagelist */
        stagelist?: (IStageData[]|null);
    }

    /** Represents a DseUpdateStage. */
    class DseUpdateStage implements IDseUpdateStage {

        /**
         * Constructs a new DseUpdateStage.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseUpdateStage);

        /** DseUpdateStage type. */
        public type: number;

        /** DseUpdateStage stagelist. */
        public stagelist: IStageData[];

        /**
         * Creates a new DseUpdateStage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseUpdateStage instance
         */
        public static create(properties?: IDseUpdateStage): DseUpdateStage;

        /**
         * Encodes the specified DseUpdateStage message. Does not implicitly {@link DseUpdateStage.verify|verify} messages.
         * @param message DseUpdateStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseUpdateStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseUpdateStage message, length delimited. Does not implicitly {@link DseUpdateStage.verify|verify} messages.
         * @param message DseUpdateStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseUpdateStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseUpdateStage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseUpdateStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseUpdateStage;

        /**
         * Decodes a DseUpdateStage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseUpdateStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseUpdateStage;

        /**
         * Verifies a DseUpdateStage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseUpdateStage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseUpdateStage
         */
        public static fromObject(object: { [k: string]: any }): DseUpdateStage;

        /**
         * Creates a plain object from a DseUpdateStage message. Also converts values to other types if specified.
         * @param message DseUpdateStage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseUpdateStage, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseUpdateStage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseUseItem. */
    interface IDseUseItem {

        /** DseUseItem tid */
        tid?: (number|null);

        /** DseUseItem amount */
        amount?: (number|null);

        /** DseUseItem code */
        code?: (number|null);

        /** DseUseItem list */
        list?: (IMDropList|null);

        /** DseUseItem msgType */
        msgType?: (number|null);
    }

    /** Represents a DseUseItem. */
    class DseUseItem implements IDseUseItem {

        /**
         * Constructs a new DseUseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseUseItem);

        /** DseUseItem tid. */
        public tid: number;

        /** DseUseItem amount. */
        public amount: number;

        /** DseUseItem code. */
        public code: number;

        /** DseUseItem list. */
        public list?: (IMDropList|null);

        /** DseUseItem msgType. */
        public msgType: number;

        /**
         * Creates a new DseUseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseUseItem instance
         */
        public static create(properties?: IDseUseItem): DseUseItem;

        /**
         * Encodes the specified DseUseItem message. Does not implicitly {@link DseUseItem.verify|verify} messages.
         * @param message DseUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseUseItem message, length delimited. Does not implicitly {@link DseUseItem.verify|verify} messages.
         * @param message DseUseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseUseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseUseItem;

        /**
         * Decodes a DseUseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseUseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseUseItem;

        /**
         * Verifies a DseUseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseUseItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseUseItem
         */
        public static fromObject(object: { [k: string]: any }): DseUseItem;

        /**
         * Creates a plain object from a DseUseItem message. Also converts values to other types if specified.
         * @param message DseUseItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseUseItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseUseItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerBaseInfo. */
    interface IPlayerBaseInfo {

        /** PlayerBaseInfo name */
        name?: (string|null);

        /** PlayerBaseInfo level */
        level?: (number|null);

        /** PlayerBaseInfo exp */
        exp?: (number|null);

        /** PlayerBaseInfo vipLevel */
        vipLevel?: (number|null);

        /** PlayerBaseInfo totalbuy */
        totalbuy?: (number|null);

        /** PlayerBaseInfo head */
        head?: (number|null);

        /** PlayerBaseInfo power */
        power?: (number|null);

        /** PlayerBaseInfo sweeptimes */
        sweeptimes?: (number|null);

        /** PlayerBaseInfo screenspirits */
        screenspirits?: (number|null);
    }

    /** Represents a PlayerBaseInfo. */
    class PlayerBaseInfo implements IPlayerBaseInfo {

        /**
         * Constructs a new PlayerBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IPlayerBaseInfo);

        /** PlayerBaseInfo name. */
        public name: string;

        /** PlayerBaseInfo level. */
        public level: number;

        /** PlayerBaseInfo exp. */
        public exp: number;

        /** PlayerBaseInfo vipLevel. */
        public vipLevel: number;

        /** PlayerBaseInfo totalbuy. */
        public totalbuy: number;

        /** PlayerBaseInfo head. */
        public head: number;

        /** PlayerBaseInfo power. */
        public power: number;

        /** PlayerBaseInfo sweeptimes. */
        public sweeptimes: number;

        /** PlayerBaseInfo screenspirits. */
        public screenspirits: number;

        /**
         * Creates a new PlayerBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerBaseInfo instance
         */
        public static create(properties?: IPlayerBaseInfo): PlayerBaseInfo;

        /**
         * Encodes the specified PlayerBaseInfo message. Does not implicitly {@link PlayerBaseInfo.verify|verify} messages.
         * @param message PlayerBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IPlayerBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerBaseInfo message, length delimited. Does not implicitly {@link PlayerBaseInfo.verify|verify} messages.
         * @param message PlayerBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IPlayerBaseInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PlayerBaseInfo;

        /**
         * Decodes a PlayerBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PlayerBaseInfo;

        /**
         * Verifies a PlayerBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): PlayerBaseInfo;

        /**
         * Creates a plain object from a PlayerBaseInfo message. Also converts values to other types if specified.
         * @param message PlayerBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerBaseInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerCurrency. */
    interface IPlayerCurrency {

        /** PlayerCurrency rechargecash */
        rechargecash?: (number|null);

        /** PlayerCurrency cash */
        cash?: (number|null);

        /** PlayerCurrency vitality */
        vitality?: (number|null);

        /** PlayerCurrency gold */
        gold?: (string|null);

        /** PlayerCurrency friendship */
        friendship?: (number|null);

        /** PlayerCurrency decree */
        decree?: (number|null);

        /** PlayerCurrency refine_point */
        refine_point?: (number|null);
    }

    /** Represents a PlayerCurrency. */
    class PlayerCurrency implements IPlayerCurrency {

        /**
         * Constructs a new PlayerCurrency.
         * @param [properties] Properties to set
         */
        constructor(properties?: IPlayerCurrency);

        /** PlayerCurrency rechargecash. */
        public rechargecash: number;

        /** PlayerCurrency cash. */
        public cash: number;

        /** PlayerCurrency vitality. */
        public vitality: number;

        /** PlayerCurrency gold. */
        public gold: string;

        /** PlayerCurrency friendship. */
        public friendship: number;

        /** PlayerCurrency decree. */
        public decree: number;

        /** PlayerCurrency refine_point. */
        public refine_point: number;

        /**
         * Creates a new PlayerCurrency instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerCurrency instance
         */
        public static create(properties?: IPlayerCurrency): PlayerCurrency;

        /**
         * Encodes the specified PlayerCurrency message. Does not implicitly {@link PlayerCurrency.verify|verify} messages.
         * @param message PlayerCurrency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IPlayerCurrency, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerCurrency message, length delimited. Does not implicitly {@link PlayerCurrency.verify|verify} messages.
         * @param message PlayerCurrency message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IPlayerCurrency, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerCurrency message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerCurrency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PlayerCurrency;

        /**
         * Decodes a PlayerCurrency message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerCurrency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PlayerCurrency;

        /**
         * Verifies a PlayerCurrency message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerCurrency message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerCurrency
         */
        public static fromObject(object: { [k: string]: any }): PlayerCurrency;

        /**
         * Creates a plain object from a PlayerCurrency message. Also converts values to other types if specified.
         * @param message PlayerCurrency
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PlayerCurrency, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerCurrency to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MainAnnoncement. */
    interface IMainAnnoncement {
    }

    /** Represents a MainAnnoncement. */
    class MainAnnoncement implements IMainAnnoncement {

        /**
         * Constructs a new MainAnnoncement.
         * @param [properties] Properties to set
         */
        constructor(properties?: IMainAnnoncement);

        /**
         * Creates a new MainAnnoncement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MainAnnoncement instance
         */
        public static create(properties?: IMainAnnoncement): MainAnnoncement;

        /**
         * Encodes the specified MainAnnoncement message. Does not implicitly {@link MainAnnoncement.verify|verify} messages.
         * @param message MainAnnoncement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IMainAnnoncement, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MainAnnoncement message, length delimited. Does not implicitly {@link MainAnnoncement.verify|verify} messages.
         * @param message MainAnnoncement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IMainAnnoncement, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MainAnnoncement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MainAnnoncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): MainAnnoncement;

        /**
         * Decodes a MainAnnoncement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MainAnnoncement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): MainAnnoncement;

        /**
         * Verifies a MainAnnoncement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MainAnnoncement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MainAnnoncement
         */
        public static fromObject(object: { [k: string]: any }): MainAnnoncement;

        /**
         * Creates a plain object from a MainAnnoncement message. Also converts values to other types if specified.
         * @param message MainAnnoncement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MainAnnoncement, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MainAnnoncement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DseUserInfo. */
    interface IDseUserInfo {

        /** DseUserInfo info */
        info?: (IPlayerBaseInfo|null);

        /** DseUserInfo currency */
        currency?: (IPlayerCurrency|null);

        /** DseUserInfo announce */
        announce?: (IMainAnnoncement|null);
    }

    /** Represents a DseUserInfo. */
    class DseUserInfo implements IDseUserInfo {

        /**
         * Constructs a new DseUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: IDseUserInfo);

        /** DseUserInfo info. */
        public info?: (IPlayerBaseInfo|null);

        /** DseUserInfo currency. */
        public currency?: (IPlayerCurrency|null);

        /** DseUserInfo announce. */
        public announce?: (IMainAnnoncement|null);

        /**
         * Creates a new DseUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DseUserInfo instance
         */
        public static create(properties?: IDseUserInfo): DseUserInfo;

        /**
         * Encodes the specified DseUserInfo message. Does not implicitly {@link DseUserInfo.verify|verify} messages.
         * @param message DseUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: IDseUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DseUserInfo message, length delimited. Does not implicitly {@link DseUserInfo.verify|verify} messages.
         * @param message DseUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: IDseUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DseUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DseUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DseUserInfo;

        /**
         * Decodes a DseUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DseUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DseUserInfo;

        /**
         * Verifies a DseUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DseUserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DseUserInfo
         */
        public static fromObject(object: { [k: string]: any }): DseUserInfo;

        /**
         * Creates a plain object from a DseUserInfo message. Also converts values to other types if specified.
         * @param message DseUserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DseUserInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DseUserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MsgHead enum. */
    enum MsgHead {
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
        DceDugeonOpt = 2083,
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
        DseDugeonOpt = 554
    }
}