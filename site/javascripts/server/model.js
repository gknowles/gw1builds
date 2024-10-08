/*
Copyright Glen Knowles 2024.
Distributed under the Boost Software License, Version 1.0.

model.js - gw1builds server
*/

/****************************************************************************
*
*   User
*
***/

class MockUser {
    static GUEST = 0
    static MEMBER = 1
    static EDITOR = 2
    static ADMIN = 3

    static Roles = {
        'guest': MockUser.GUEST,
        'member': MockUser.MEMBER,
        'editor': MockUser.EDITOR,
        'admin': MockUser.ADMIN,
    }

    id = 0;
    rev = 1;
    name;
    createdAt;
    loginAt;
    role = MockUser.GUEST;
    email;
}


/****************************************************************************
*
*   Group
*
***/

class MockGroup {
    id = 0;
    rev = 1;
    name;
    createdAt;
    groupUsers = []     // roles indexed by user ids
    groupEvents = []    // array of MockGroupEvents
}

class MockGroupUser {
    joinedAt;
    updatedAt;
    role = MEMBER;
}

class MockGroupEvent {
    createdAt;
    event = "";
}


/****************************************************************************
*
*   Toon
*
***/

class MockToon {
    id = 0;
    rev = 1;
    name;
    level;
    attrBonusPts;
    primaryCode;
    secondaryCode;
    headgearAttrCode;
    desc;

    attrs = [];
    items = [];
    skills = [];
}

class MockToonAttr {
    code;
    value;
    rune;
}

class MockToonItem {
    where;
    base;
    color;
    mod1;
    mod2;
    mod3;
}

class MockToonSkill {
    code;
    slot;
    alternate;
}


/****************************************************************************
*
*   Build
*
***/

class MockBuild {
    id = 0;
    rev = 1;
    ownerId;
    viewerId;
    name;
    createAt;
    updatedAt;
    size;
    desc;
    isTeam;
    isPve = false;
    buildType;

    toons = []; // indexed by toon id
}

class MockBuildToon {
    slot;
    alternate;
}
