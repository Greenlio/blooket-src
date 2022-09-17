(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        "1jhB": function(e, t, a) {
            var s = a("jASO");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, i);
            s.locals && (e.exports = s.locals)
        },
        "2g0G": function(e, t, a) {
            "use strict";
            var s = a("LHn/"),
                i = {};
            i.meadow = {
                name: "Sunny Meadow",
                img: s.a.defense.basicMap,
                tile: s.a.defense.grassTile,
                particleColor: "#2ecc71",
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [2, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 1, 1, 5],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
                    [4, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                    [2, 1, 1, 1, 1, 0, 0, 0, 1, 2],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, i.desert = {
                name: "Lost Desert",
                img: s.a.defense.sandMap,
                tile: s.a.defense.sandTile,
                particleColor: "#daba72",
                tiles: [
                    [0, 2, 0, 0, 2, 0, 0, 0, 0, 0],
                    [4, 1, 1, 1, 0, 0, 1, 1, 1, 2],
                    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
                    [0, 0, 2, 1, 1, 1, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 2, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 2, 0, 0, 0, 0, 0, 2, 0],
                    [2, 1, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 1, 0, 2, 0],
                    [0, 1, 1, 1, 0, 0, 1, 1, 1, 5],
                    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0]
                ]
            }, i.mine = {
                name: "Abandoned Mine",
                img: s.a.defense.mineMap,
                tile: s.a.defense.stoneTile,
                particleColor: "#89a4a6",
                tiles: [
                    [0, 2, 0, 4, 0, 5, 2, 0, 0, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 2, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                    [2, 1, 1, 1, 0, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 2, 1, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 2, 0],
                    [0, 2, 0, 1, 0, 1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
                    [0, 1, 0, 2, 0, 0, 0, 1, 0, 0],
                    [2, 1, 1, 1, 1, 1, 1, 1, 0, 2],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0]
                ]
            }, t.a = i
        },
        Eb3v: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__header___2zcdQ-camelCase{font-family:Nunito,sans-serif;font-size:44px;font-weight:700;margin:15px 5%;color:#3a3a3a}.styles__wideContainer___Ulh4C-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:90%;margin:5px auto}.styles__dropHolder___-ooT2-camelCase{width:34%;min-height:280px;flex:1;padding:15px 15px 22px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__dropContainer___368Bu-camelCase{height:100%;width:100%;border:2px dashed #666;box-sizing:border-box;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-content:center}.styles__activeDropContainer___3MiKb-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropHeader___PH8wO-camelCase{font-size:32px;font-weight:700;margin:5px auto}.styles__dropHeader___PH8wO-camelCase,.styles__dropText___2pIPc-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__dropText___2pIPc-camelCase{font-size:20px;margin:10px auto 15px;padding:0 20px}.styles__uploadButtonContainer___1VVhA-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__uploadButton___2Ukj--camelCase{margin:10px 15px;box-shadow:0 0 4px rgba(0,0,0,.15)}.styles__uploadButtonInside___3akbb-camelCase{width:110px;height:40px;display:flex;flex-direction:row;align-items:center;color:#3a3a3a}.styles__uploadIcon___2lU9o-camelCase{font-size:24px;padding-left:10px;width:28px;text-align:center}.styles__uploadText___1ihq5-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:15px;line-height:20px}.styles__imgContainer___2INQH-camelCase{width:100%;height:280px;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#333;border-radius:5px;overflow:hidden}.styles__coverImage___YXUxS-camelCase{max-width:100%;max-height:100%;margin:auto;-o-object-fit:contain;object-fit:contain}.styles__removeImageContainer___1tyj8-camelCase{width:100%;height:40px;margin-top:-40px;background-color:rgba(0,0,0,.6);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.styles__removeImageButton___3H-UO-camelCase{display:flex;flex-direction:row;align-self:flex-start;height:40px;width:135px;margin-left:30px;margin-top:-40px;cursor:pointer;outline:none;z-index:3}.styles__removeImageIcon___108Yb-camelCase{font-size:26px;color:#fff;line-height:40px;width:30px;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__removeImageText___2t5Ue-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:24px;color:#fff;line-height:40px}.styles__upperRightContainer___2B7fN-camelCase{display:flex;flex-direction:column;padding:10px 15px;flex-grow:1;margin-left:3%;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__titleHeader___2P9Do-camelCase{font-size:34px}.styles__descHeader___3hvo5-camelCase,.styles__titleHeader___2P9Do-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a}.styles__descHeader___3hvo5-camelCase{font-size:24px}.styles__input___3o2VJ-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 0 20px;padding:4px 15px;width:calc(100% - 34px);height:40px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___3o2VJ-camelCase:focus{border-color:#0bc2cf}.styles__descInput___2KAcC-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:10px 0;padding:10px 15px;width:calc(100% - 34px);height:100px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;resize:none}.styles__descInput___2KAcC-camelCase:focus{border-color:#0bc2cf}.styles__inputFilled___14_Ke-camelCase{border-color:#3a3a3a}.styles__inputError___2DIDG-camelCase{border-color:#ce1313}.styles__categoryContainer___SPS2t-camelCase{width:48.5%;box-sizing:border-box;margin:15px 0;padding:10px 15px 17px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px}.styles__categoryHeader___1j3f2-camelCase{font-size:24px;font-weight:700}.styles__categoryDesc___35ndo-camelCase,.styles__categoryHeader___1j3f2-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__categoryDesc___35ndo-camelCase{font-size:18px;opacity:.8}.styles__privacyRow___1Alas-camelCase{margin:10px 0;width:100%}.styles__privacyCheckbox___1EvU4-camelCase,.styles__privacyRow___1Alas-camelCase{display:flex;flex-direction:row;align-items:center}.styles__privacyCheckbox___1EvU4-camelCase{width:60px;height:25px;border-radius:5px;background-color:rgba(0,0,0,.1);position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__privacyCheckboxChecked___G4Gwd-camelCase{background-color:#0bc2cf}.styles__privacyCheckboxSquare___lmt_S-camelCase{height:20px;width:20px;background-color:#fff;box-shadow:inset 0 -3px rgba(0,0,0,.2);border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(calc(-50% - 15px),-50%);transition:.2s}.styles__privacyCheckboxChecked___G4Gwd-camelCase>.styles__privacyCheckboxSquare___lmt_S-camelCase{transform:translate(calc(-50% + 15px),-50%)}.styles__privacyText___19pqj-camelCase{font-size:20px;font-weight:700;margin:0 10px}.styles__privacyTextDesc___1j5Gm-camelCase{font-size:12px}.styles__methodContainer___1ADyH-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:100%;margin:5px 0;background-color:rgba(0,0,0,.1);border-radius:5px;padding:7px 0}.styles__methodButton___1HxjD-camelCase{box-shadow:0 0 4px rgba(0,0,0,.15);margin:7px 5px}.styles__methodButtonInside___nfBO4-camelCase{width:180px;height:40px;display:flex;flex-direction:row;align-items:center;justify-content:center;color:#3a3a3a}.styles__methodSelected___1XsGp-camelCase{color:#fff}.styles__methodIcon___-y7BW-camelCase{font-size:24px;padding-left:0;width:30px;text-align:center}.styles__methodHeader___ZRYGR-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:18px;line-height:20px;margin-left:10px}.styles__quizletImage___38sJo-camelCase{width:30px;height:30px;filter:grayscale(90%)}.styles__quizletImageSelected___1dqYG-camelCase{filter:none}.styles__bottomRow___1N743-camelCase{display:flex;flex-direction:row;justify-content:flex-end;align-items:center;width:90%;margin:5px auto}.styles__buttonWrapper___AVKOZ-camelCase{width:150px}.styles__buttonWrapper___AVKOZ-camelCase,.styles__createButton___1VF39-camelCase{display:flex;justify-content:center;align-items:center}.styles__createButton___1VF39-camelCase{font-family:Titan One,sans-serif;text-shadow:0 1.5px rgba(0,0,0,.2);color:#fff;font-size:28px;width:140px;height:50px}.styles__buttonFilled___2Vx8C-camelCase{color:#fff;background-color:#0bc2cf}.styles__buttonError___14Ma8-camelCase{color:#fff;background-color:#ce1313}.styles__errorContainer___3bgcc-camelCase{background-color:#cf180b;border-radius:7px;box-sizing:border-box;padding:5px 10px 12px;box-shadow:inset 0 -7px rgba(0,0,0,.2);margin-right:15px;display:flex;flex-direction:row;align-items:center;color:#fff;font-size:18px}.styles__errorIcon___32yDg-camelCase{font-size:20px;margin-right:10px}@media only screen and (max-width:1050px){.styles__wideContainer___Ulh4C-camelCase{flex-direction:column}.styles__dropHolder___-ooT2-camelCase{width:calc(100% - 30px);min-height:240px;flex:0}.styles__dropContainer___368Bu-camelCase{min-height:277px}.styles__uploadButtonContainer___1VVhA-camelCase{margin:0 auto 15px}.styles__upperRightContainer___2B7fN-camelCase{margin:20px 0 10px}.styles__descInput___2KAcC-camelCase,.styles__input___3o2VJ-camelCase{width:calc(100% - 34px)}.styles__descInput___2KAcC-camelCase{height:102px}.styles__categoryContainer___SPS2t-camelCase{width:100%;margin:10px 0}.styles__bottomRow___1N743-camelCase{margin-top:10px;justify-content:center}}", ""]), t.locals = {
                header: "styles__header___2zcdQ-camelCase",
                wideContainer: "styles__wideContainer___Ulh4C-camelCase",
                dropHolder: "styles__dropHolder___-ooT2-camelCase",
                dropContainer: "styles__dropContainer___368Bu-camelCase",
                activeDropContainer: "styles__activeDropContainer___3MiKb-camelCase",
                dropHeader: "styles__dropHeader___PH8wO-camelCase",
                dropText: "styles__dropText___2pIPc-camelCase",
                uploadButtonContainer: "styles__uploadButtonContainer___1VVhA-camelCase",
                uploadButton: "styles__uploadButton___2Ukj--camelCase",
                uploadButtonInside: "styles__uploadButtonInside___3akbb-camelCase",
                uploadIcon: "styles__uploadIcon___2lU9o-camelCase",
                uploadText: "styles__uploadText___1ihq5-camelCase",
                imgContainer: "styles__imgContainer___2INQH-camelCase",
                coverImage: "styles__coverImage___YXUxS-camelCase",
                removeImageContainer: "styles__removeImageContainer___1tyj8-camelCase",
                removeImageButton: "styles__removeImageButton___3H-UO-camelCase",
                removeImageIcon: "styles__removeImageIcon___108Yb-camelCase",
                removeImageText: "styles__removeImageText___2t5Ue-camelCase",
                upperRightContainer: "styles__upperRightContainer___2B7fN-camelCase",
                titleHeader: "styles__titleHeader___2P9Do-camelCase",
                descHeader: "styles__descHeader___3hvo5-camelCase",
                input: "styles__input___3o2VJ-camelCase",
                descInput: "styles__descInput___2KAcC-camelCase",
                inputFilled: "styles__inputFilled___14_Ke-camelCase",
                inputError: "styles__inputError___2DIDG-camelCase",
                categoryContainer: "styles__categoryContainer___SPS2t-camelCase",
                categoryHeader: "styles__categoryHeader___1j3f2-camelCase",
                categoryDesc: "styles__categoryDesc___35ndo-camelCase",
                privacyRow: "styles__privacyRow___1Alas-camelCase",
                privacyCheckbox: "styles__privacyCheckbox___1EvU4-camelCase",
                privacyCheckboxChecked: "styles__privacyCheckboxChecked___G4Gwd-camelCase",
                privacyCheckboxSquare: "styles__privacyCheckboxSquare___lmt_S-camelCase",
                privacyText: "styles__privacyText___19pqj-camelCase",
                privacyTextDesc: "styles__privacyTextDesc___1j5Gm-camelCase",
                methodContainer: "styles__methodContainer___1ADyH-camelCase",
                methodButton: "styles__methodButton___1HxjD-camelCase",
                methodButtonInside: "styles__methodButtonInside___nfBO4-camelCase",
                methodSelected: "styles__methodSelected___1XsGp-camelCase",
                methodIcon: "styles__methodIcon___-y7BW-camelCase",
                methodHeader: "styles__methodHeader___ZRYGR-camelCase",
                quizletImage: "styles__quizletImage___38sJo-camelCase",
                quizletImageSelected: "styles__quizletImageSelected___1dqYG-camelCase",
                bottomRow: "styles__bottomRow___1N743-camelCase",
                buttonWrapper: "styles__buttonWrapper___AVKOZ-camelCase",
                createButton: "styles__createButton___1VF39-camelCase",
                buttonFilled: "styles__buttonFilled___2Vx8C-camelCase",
                buttonError: "styles__buttonError___14Ma8-camelCase",
                errorContainer: "styles__errorContainer___3bgcc-camelCase",
                errorIcon: "styles__errorIcon___32yDg-camelCase"
            }
        },
        IhNm: function(e, t, a) {
            var s = a("XPYX");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, i);
            s.locals && (e.exports = s.locals)
        },
        MaNU: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__bodyContainer___kRuqX-camelCase{display:flex;flex-direction:row;justify-content:space-between}.styles__sketchHolder___15Fa1-camelCase{flex:1;margin:20px;overflow:hidden;position:relative}.styles__sketchCanvas___K6zVV-camelCase{top:0;right:0;bottom:0;left:0;display:block;margin:auto;position:absolute}.styles__leftSide___2K4Ki-camelCase{width:220px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column;transition:.3s}.styles__infoRow___3BSi_-camelCase{display:flex;flex-direction:row;align-items:flex-end;width:90%;margin:0 auto 10px}.styles__infoBlook___1lBMO-camelCase{width:30%;margin-right:10px}.styles__infoTitle___15r5O-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:26px;line-height:29px;color:#3a3a3a}.styles__smallInfoRow___iWKIE-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px auto}.styles__descText___2l3O2-camelCase,.styles__smallInfoRow___iWKIE-camelCase{width:90%;font-family:Nunito,sans-serif;font-size:20px;color:#3a3a3a}.styles__descText___2l3O2-camelCase{margin:20px auto}.styles__sellButton___E98jm-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:30px;border-radius:6px;margin:15px auto;background-color:#c43a35;color:#fff;font-size:18px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__sellButton___E98jm-camelCase:hover{transform:scale(.96)}.styles__upgradesText___1JNzl-camelCase{margin:7px auto 12px;font-size:26px;text-align:center;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__upgradeContainer___3GnZ0-camelCase{border:3px solid #a7a7a7;border-radius:6px;width:calc(90% - 16px);padding:3px 8px;margin:14px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;flex-direction:column;position:relative;font-size:"Nunito",sans-serif;color:#3a3a3a;transition:.2s}.styles__upgradeContainer___3GnZ0-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__upgradeRow___3YkGd-camelCase{display:flex;flex-direction:row;width:100%;margin:4px 0}.styles__upgradeIcon___FvfJf-camelCase{border-radius:6px;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;color:#fff;font-size:28px}.styles__upgradeBlook___8ymUf-camelCase,.styles__upgradeIcon___FvfJf-camelCase{width:45px;height:51.75px;margin-right:10px}.styles__upgradeTitle___1ropY-camelCase{width:calc(100% - 55px);font-size:24px;line-height:26px;font-weight:700}.styles__upgradeDesc___78gJJ-camelCase{font-size:16px;line-height:18.5px;margin:2px 0}.styles__rightSide___8bN9Y-camelCase{width:280px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:-6px 0 8px rgba(0,0,0,.2);flex-direction:column}.styles__buyButton___3IzHu-camelCase,.styles__rightSide___8bN9Y-camelCase{outline:none;display:flex}.styles__buyButton___3IzHu-camelCase{position:absolute;top:10px;right:290px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__buyButton___3IzHu-camelCase:hover{transform:scale(.95)}.styles__healthRow___3z-8e-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;padding:0 5px;margin:5px auto;font-size:22px;height:25px}.styles__healthBarHolder___1OE5V-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__healthBar___3Diky-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left;transition:.2s}.styles__healthText___2LH5z-camelCase{font-size:24px;margin:0 4px 3px 8px;width:55px}.styles__dmgText___M8nxF-camelCase,.styles__healthText___2LH5z-camelCase{font-family:Titan One,sans-serif;color:#3a3a3a;text-align:right}.styles__dmgText___M8nxF-camelCase{font-size:26px;margin-right:7px}.styles__healthIcon___1NESo-camelCase{font-size:18px;color:#3a3a3a;line-height:25px}.styles__roundText___1hxMe-camelCase{width:80%;margin:0 auto;font-size:26px;height:30px;text-align:right;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__shopContainer___MZZd7-camelCase{margin:10px auto;width:95%;display:flex;flex-flow:row wrap;justify-content:space-between}.styles__towerShopContainer___270Ea-camelCase{border:3px solid #a7a7a7;border-radius:6px;margin:7px 3px;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transform:scale(1);transition:.2s}.styles__towerShopContainer___270Ea-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__towerShopSelected___3NaES-camelCase{border-color:#0bc2cf}.styles__towerShopFaded___3LAz6-camelCase{opacity:.5;cursor:auto}.styles__towerShopFaded___3LAz6-camelCase:hover{transform:scale(1);border-color:#a7a7a7}.styles__shopBlook___3gMB5-camelCase{height:85%;margin:auto}.styles__shopPrice___12vgL-camelCase{right:-5px;bottom:-11px;height:22px;font-size:16px;padding:0 5px;background-color:#0bc2cf;border-radius:4px;font-family:Nunito,sans-serif}.styles__shopLockedContainer___32xCb-camelCase,.styles__shopPrice___12vgL-camelCase{position:absolute;color:#fff;display:flex;align-items:center;justify-content:center}.styles__shopLockedContainer___32xCb-camelCase{width:calc(100% + 6px);height:calc(100% + 6px);border-radius:6px;cursor:auto;background-color:rgba(0,0,0,.8);flex-direction:column;font-size:14px;font-weight:700;text-shadow:2px 2px 8px grey}.styles__shopLockedIcon___Rt7mS-camelCase{margin-bottom:3px;font-size:32px}.styles__mainButton___3lYPo-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:50px;border-radius:6px;margin:auto auto 15px;background-color:#c43a35;color:#fff;font-size:26px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__mainButton___3lYPo-camelCase:hover{transform:scale(.96)}.styles__questionContainer___R0s6G-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:8}.styles__modalContainer___2S2Kx-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__modalText___3hOQB-camelCase{font-family:Titan One,sans-serif;font-size:45px;line-height:48px;margin:20px auto 15px;color:#fff;text-shadow:2px 2px 8px grey}.styles__modalButtonRow___Icy-d-camelCase{display:flex;flex-direction:row}.styles__modalButton___3J0_3-camelCase{padding:5px 12px;margin:15px auto 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:24px;color:#5f5f5f;font-family:Nunito,sans-serif;transition:all .2s}.styles__modalButton___3J0_3-camelCase:hover{transform:scale(.96)}.styles__modalFadeIn___m0Mpv-camelCase{opacity:0;-webkit-animation:styles__fadeIn___2AbvZ-camelCase .4s linear .5s forwards;animation:styles__fadeIn___2AbvZ-camelCase .4s linear .5s forwards}.styles__gameOverContainer___3o79S-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___kgMG9-camelCase{font-family:Titan One,sans-serif;font-size:11vw;opacity:0;-webkit-animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1s forwards;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___15a9l-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;-webkit-animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___2AbvZ-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2AbvZ-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__modalContainer___2S2Kx-camelCase{width:310px}}.styles__mBottomContainer___3Mtmc-camelCase,.styles__mBottomSpacer___3sQBr-camelCase,.styles__mBuyButton___2z2V9-camelCase,.styles__mCloseTower___14cDR-camelCase,.styles__mHealthIcon___1QbHT-camelCase,.styles__mHealthRow___Q5Z05-camelCase,.styles__mHealthText___2QjA7-camelCase,.styles__mMainButton___ETJ12-camelCase,.styles__mModal___1XF_X-camelCase,.styles__mNoBuy___2q9Cl-camelCase,.styles__mOpenButton___1jFO2-camelCase,.styles__mRoundText___3uGec-camelCase,.styles__mTopContainer___1W3YD-camelCase,.styles__mTowerSelected___2Qcdh-camelCase{display:none}@media only screen and (max-width:800px){.styles__leftSide___2K4Ki-camelCase,.styles__rightSide___8bN9Y-camelCase{display:none}.styles__bodyContainer___kRuqX-camelCase,.styles__mBottomContainer___3Mtmc-camelCase{flex-direction:column}.styles__mBottomContainer___3Mtmc-camelCase{position:absolute;bottom:0;left:0;background-color:#fff;box-shadow:0 -6px 8px rgba(0,0,0,.2);display:flex;min-height:60px;max-height:calc(100% - 55px);overflow-y:auto;width:100%}.styles__mBottomSpacer___3sQBr-camelCase{display:block;height:60px}.styles__mOpenButton___1jFO2-camelCase{width:100%;height:50px;justify-content:center;color:#3a3a3a;font-size:26px;font-weight:700;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__mHealthRow___Q5Z05-camelCase,.styles__mOpenButton___1jFO2-camelCase{position:relative;display:flex;flex-direction:row;align-items:center}.styles__mHealthRow___Q5Z05-camelCase{margin:auto 8px auto auto}.styles__mHealthText___2QjA7-camelCase{font-size:26px;font-weight:700;display:block}.styles__mHealthIcon___1QbHT-camelCase{font-size:24px;margin-left:7px;display:block;margin-right:2px}.styles__mTopContainer___1W3YD-camelCase{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.styles__mRoundText___3uGec-camelCase{font-family:Titan One,sans-serif;font-size:32px;color:#3a3a3a;margin-left:10px;display:block}.styles__mMainButton___ETJ12-camelCase{margin-right:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding:2px 10px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mMainButton___ETJ12-camelCase:hover{transform:scale(.95)}.styles__mBuyButton___2z2V9-camelCase{background-color:#4bc22e;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mBuyButton___2z2V9-camelCase:hover{transform:scale(.95)}.styles__mNoBuy___2q9Cl-camelCase{display:flex;align-items:center;justify-content:center;height:60px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:26px;width:90%;margin:0 auto}.styles__mModal___1XF_X-camelCase{display:block}.styles__mTowerSelected___2Qcdh-camelCase{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;padding-top:7px;max-width:300px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__infoBlook___1lBMO-camelCase{width:20%}.styles__mCloseTower___14cDR-camelCase{display:flex;align-items:center;justify-content:center;position:absolute;height:40px;width:40px;top:-15px;right:-15px;background-color:#f33;color:#fff;font-size:26px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__mCloseTower___14cDR-camelCase:hover{transform:scale(.95)}.styles__descText___2l3O2-camelCase,.styles__upgradeTitle___1ropY-camelCase{text-align:left}.styles__sellContainer___2SCEE-camelCase{display:flex;flex-direction:row;width:90%;margin:0 auto}.styles__sellButton___E98jm-camelCase{width:45%;margin:auto 5% auto 0;font-size:16px}.styles__statInfoContainer___2FLMO-camelCase{display:flex;flex-direction:column;width:50%}.styles__smallInfoRow___iWKIE-camelCase{width:100%;margin:1px auto;font-size:12px}.styles__gameOverText___kgMG9-camelCase{font-size:15vw}.styles__gameOverTextSmall___15a9l-camelCase{font-size:5vw}}', ""]), t.locals = {
                bodyContainer: "styles__bodyContainer___kRuqX-camelCase",
                sketchHolder: "styles__sketchHolder___15Fa1-camelCase",
                sketchCanvas: "styles__sketchCanvas___K6zVV-camelCase",
                leftSide: "styles__leftSide___2K4Ki-camelCase",
                infoRow: "styles__infoRow___3BSi_-camelCase",
                infoBlook: "styles__infoBlook___1lBMO-camelCase",
                infoTitle: "styles__infoTitle___15r5O-camelCase",
                smallInfoRow: "styles__smallInfoRow___iWKIE-camelCase",
                descText: "styles__descText___2l3O2-camelCase",
                sellButton: "styles__sellButton___E98jm-camelCase",
                upgradesText: "styles__upgradesText___1JNzl-camelCase",
                upgradeContainer: "styles__upgradeContainer___3GnZ0-camelCase",
                upgradeRow: "styles__upgradeRow___3YkGd-camelCase",
                upgradeIcon: "styles__upgradeIcon___FvfJf-camelCase",
                upgradeBlook: "styles__upgradeBlook___8ymUf-camelCase",
                upgradeTitle: "styles__upgradeTitle___1ropY-camelCase",
                upgradeDesc: "styles__upgradeDesc___78gJJ-camelCase",
                rightSide: "styles__rightSide___8bN9Y-camelCase",
                buyButton: "styles__buyButton___3IzHu-camelCase",
                healthRow: "styles__healthRow___3z-8e-camelCase",
                healthBarHolder: "styles__healthBarHolder___1OE5V-camelCase",
                healthBar: "styles__healthBar___3Diky-camelCase",
                healthText: "styles__healthText___2LH5z-camelCase",
                dmgText: "styles__dmgText___M8nxF-camelCase",
                healthIcon: "styles__healthIcon___1NESo-camelCase",
                roundText: "styles__roundText___1hxMe-camelCase",
                shopContainer: "styles__shopContainer___MZZd7-camelCase",
                towerShopContainer: "styles__towerShopContainer___270Ea-camelCase",
                towerShopSelected: "styles__towerShopSelected___3NaES-camelCase",
                towerShopFaded: "styles__towerShopFaded___3LAz6-camelCase",
                shopBlook: "styles__shopBlook___3gMB5-camelCase",
                shopPrice: "styles__shopPrice___12vgL-camelCase",
                shopLockedContainer: "styles__shopLockedContainer___32xCb-camelCase",
                shopLockedIcon: "styles__shopLockedIcon___Rt7mS-camelCase",
                mainButton: "styles__mainButton___3lYPo-camelCase",
                questionContainer: "styles__questionContainer___R0s6G-camelCase",
                modalContainer: "styles__modalContainer___2S2Kx-camelCase",
                modalText: "styles__modalText___3hOQB-camelCase",
                modalButtonRow: "styles__modalButtonRow___Icy-d-camelCase",
                modalButton: "styles__modalButton___3J0_3-camelCase",
                modalFadeIn: "styles__modalFadeIn___m0Mpv-camelCase",
                fadeIn: "styles__fadeIn___2AbvZ-camelCase",
                gameOverContainer: "styles__gameOverContainer___3o79S-camelCase",
                gameOverText: "styles__gameOverText___kgMG9-camelCase",
                gameOverTextSmall: "styles__gameOverTextSmall___15a9l-camelCase",
                mBottomContainer: "styles__mBottomContainer___3Mtmc-camelCase",
                mBottomSpacer: "styles__mBottomSpacer___3sQBr-camelCase",
                mBuyButton: "styles__mBuyButton___2z2V9-camelCase",
                mCloseTower: "styles__mCloseTower___14cDR-camelCase",
                mHealthIcon: "styles__mHealthIcon___1QbHT-camelCase",
                mHealthRow: "styles__mHealthRow___Q5Z05-camelCase",
                mHealthText: "styles__mHealthText___2QjA7-camelCase",
                mMainButton: "styles__mMainButton___ETJ12-camelCase",
                mModal: "styles__mModal___1XF_X-camelCase",
                mNoBuy: "styles__mNoBuy___2q9Cl-camelCase",
                mOpenButton: "styles__mOpenButton___1jFO2-camelCase",
                mRoundText: "styles__mRoundText___3uGec-camelCase",
                mTopContainer: "styles__mTopContainer___1W3YD-camelCase",
                mTowerSelected: "styles__mTowerSelected___2Qcdh-camelCase",
                sellContainer: "styles__sellContainer___2SCEE-camelCase",
                statInfoContainer: "styles__statInfoContainer___2FLMO-camelCase"
            }
        },
        Rycs: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__stageText___21Ml7-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden;display:flex;flex-direction:row;align-items:center}.styles__stageIcon___3V2ZX-camelCase{font-size:24px;margin-left:7px}", ""]), t.locals = {
                stageText: "styles__stageText___21Ml7-camelCase",
                stageIcon: "styles__stageIcon___3V2ZX-camelCase"
            }
        },
        Uba3: function(e, t, a) {
            var s = a("Eb3v");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, i);
            s.locals && (e.exports = s.locals)
        },
        VmLb: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                i = a.n(s),
                o = a("ANjH"),
                n = a("/MKj"),
                r = a("17x9"),
                l = a.n(r),
                c = a("Ty5D"),
                h = a("H1WH"),
                u = a("TSYQ"),
                d = a.n(u),
                p = a("ZrUs"),
                f = a("XvWQ"),
                m = a.n(f),
                g = a("Xst1"),
                y = a.n(g),
                _ = a("oQ+7"),
                v = a("XTAU"),
                w = a("E8Bj"),
                b = a("2ZNs"),
                x = a("pQbs"),
                k = a("dLfW"),
                C = a("sfIM"),
                S = a("74sb"),
                E = a("+fLB"),
                O = a("qnYv");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                R = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    i = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    n = s.toStringTag || "@@toStringTag";

                function r(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, s) {
                    var i = t && t.prototype instanceof u ? t : u,
                        o = Object.create(i.prototype),
                        n = new k(s || []);
                    return o._invoke = function(e, t, a) {
                        var s = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (a.method = i, a.arg = o;;) {
                                var n = a.delegate;
                                if (n) {
                                    var r = w(n, a);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === s) throw s = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                s = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (s = a.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, n), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && a.call(g, i) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(i, o) {
                        function n() {
                            return new t((function(s, n) {
                                ! function s(i, o, n, r) {
                                    var l = c(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == T(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, n, r)
                                        }), (function(e) {
                                            s("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return s("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(i, o, s, n)
                            }))
                        }
                        return s = s ? s.then(n, n) : n()
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var i = s.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(v.prototype), r(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, s, i, o) {
                    void 0 === o && (o = Promise);
                    var n = new v(l(t, a, s, i), o);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, _(y), r(y, n, "Generator"), r(y, i, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return a.value = s, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function s(a, s) {
                            return n.type = "throw", n.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                n = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var r = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var i = this.tryEntries[s];
                            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var i = s.arg;
                                    x(a)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function N(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(a), !0).forEach((function(t) {
                        I(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function I(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function M(e, t, a, s, i, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void a(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(s, i)
            }

            function B(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function P(e, t) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = q(e);
                    if (t) {
                        var i = q(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return D(this, a)
                }
            }

            function D(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return L(e)
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = function(e, t) {
                    return t ? i.a.createElement("div", {
                        className: m.a.stageText
                    }, Object(S.v)(e.dmg), i.a.createElement("i", {
                        className: d()(m.a.stageIcon, "fas fa-splotch")
                    })) : i.a.createElement("div", {
                        className: m.a.stageText
                    }, "Round ".concat(e.round))
                },
                A = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && P(e, t)
                    }(l, e);
                    var t, a, s, o, n, r = z(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            message: "",
                            name: "",
                            nameUsed: "",
                            round: 0,
                            isLive: !1,
                            dmg: 0,
                            isBlocked: !1
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(L(t)), t.renderStats = t.renderStats.bind(L(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (o = R().mark((function e() {
                            var t, a, s, i, o, n, r, l, c = this;
                            return R().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if ((t = e.sent) || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "final" === this.props.defense.stage) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (this.isSolo = !this.props.defense.isLive, this.isHw = Boolean(this.props.defense.resultId), this.isSolo || this.isHw || this.props.firebase.setVal({
                                                id: this.props.client.hostId,
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: j({}, this.props.defense.corrects),
                                                    i: j({}, this.props.defense.incorrects)
                                                }
                                            }), this.isHw && O.a.put("/api/results", {
                                                id: this.props.defense.resultId,
                                                data: {
                                                    corrects: this.props.defense.corrects,
                                                    incorrects: this.props.defense.incorrects,
                                                    round: Number(this.props.defense.round),
                                                    alive: !1
                                                }
                                            }).catch((function(e) {
                                                return console.error(e)
                                            })), a = 0, s = 0, Object.values(this.props.defense.corrects).forEach((function(e) {
                                                a += e, s += e
                                            })), Object.values(this.props.defense.incorrects).forEach((function(e) {
                                                s += e
                                            })), i = this.props.client && this.props.client.blook ? this.props.client.blook : Object(S.p)(C.b), o = this.props.client && this.props.client.name ? this.props.client.name : "You", (n = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                                                name: o,
                                                blook: i,
                                                place: Math.max(1, 30 - (this.props.defense.round - 1)),
                                                round: this.props.defense.round - 1,
                                                dmg: this.props.defense.dmg
                                            }]).sort((function(e, t) {
                                                return e.place - t.place
                                            })), -1 !== (r = n.map((function(e) {
                                                return e.name
                                            })).indexOf(o))) {
                                            e.next = 22;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), e.abrupt("return");
                                    case 22:
                                        l = n[r].place, this.stats = {
                                            place: l,
                                            round: this.props.defense.round - 1,
                                            dmg: n[r].dmg,
                                            correctAnswers: a,
                                            blookUsed: i,
                                            nameUsed: o,
                                            playersDefeated: this.props.defense.isLive ? this.props.client.standing.length - l : 0
                                        }, this.props.defense.isLive ? this.readyTimeout = setTimeout((function() {
                                            c.setState({
                                                numCorrect: a,
                                                numQuestions: s,
                                                round: c.props.defense.round - 1,
                                                nameUsed: o,
                                                ready: !0,
                                                standings: n,
                                                isLive: !0,
                                                dmg: n[r].dmg
                                            })
                                        }), 4750) : this.setState({
                                            numCorrect: a,
                                            numQuestions: s,
                                            round: this.props.defense.round - 1,
                                            message: Object(k.a)((l - 1) / 30),
                                            nameUsed: o,
                                            ready: !this.props.defense.defenseId || this.state.ready,
                                            standings: n,
                                            dmg: this.props.defense.dmg
                                        }), t && (this.saveStats(t.name, (function() {})), O.a.put("/api/users/plan").then((function(e) {
                                            c.here && c.setState({
                                                ready: !c.props.defense.isLive || c.state.ready,
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || c.props.client && c.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        })), this.props.defense.defenseId && O.a.delete("/api/defenses", {
                                            params: {
                                                name: t.name,
                                                id: this.props.defense.defenseId
                                            }
                                        }).catch((function(e) {
                                            console.error(e)
                                        })));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(a, s) {
                                var i = o.apply(e, t);

                                function n(e) {
                                    M(i, a, s, n, r, "next", e)
                                }

                                function r(e) {
                                    M(i, a, s, n, r, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteClient(), clearTimeout(this.readyTimeout), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            this.isSolo ? O.a.put("/api/users/defensestats/solo", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then(t).catch((function(e) {
                                return console.error(e)
                            })) : O.a.put("/api/users/defensestats/live", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers,
                                playersDefeated: this.stats.playersDefeated
                            }).then(t).catch((function(e) {
                                return console.error(e)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return i.a.createElement(x.a, {
                                title: "Damage",
                                stat: Object(S.o)(this.state.dmg)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.defense || "final" !== this.props.defense.stage || !this.props.defense.questions || !this.props.defense.questions[0]) return i.a.createElement(c.a, {
                                to: "/play"
                            });
                            var e = this.props.client && this.props.client.hwId;
                            return i.a.createElement("div", {
                                className: h.isMobile ? y.a.mBody : y.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, i.a.createElement(v.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), i.a.createElement(_.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? this.state.isLive ? i.a.createElement(b.a, {
                                standings: this.state.standings,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.props.client.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return F(e, !0)
                                },
                                renderStats: this.renderStats,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : i.a.createElement(b.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return F(e, !1)
                                },
                                renderStats: this.renderStats,
                                customMessage: this.state.message,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null, this.state.isBlocked ? i.a.createElement("div", {
                                className: y.a.blockedText
                            }, "You were blocked from this game.") : null)
                        }
                    }]) && B(t.prototype, a), s && B(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(i.a.Component);
            A.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                firebase: l.a.object,
                deleteClient: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(w.c)(Object(c.g)(Object(n.b)((function(e) {
                return {
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: p.a
                }, e)
            }))(Object(E.d)(A))))
        },
        XPYX: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__mainContainer___zAX5c-camelCase{display:flex;flex-direction:column;margin:25px auto;width:90%;min-width:400px;max-width:800px}.styles__mainHeader___1R_BT-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;color:#3a3a3a}.styles__testContainer___2OJWp-camelCase{border-radius:5px;background-color:#fff;margin:10px auto;width:100%;box-sizing:border-box;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);min-width:400px;display:flex;flex-direction:row;align-items:center}.styles__text___3354--camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif;margin:10px 0 20px}.styles__testIcon___bQNeY-camelCase{font-size:40px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;margin:auto 15px;color:#0bc2cf}.styles__spin___usdoa-camelCase{-webkit-animation:styles__spin___usdoa-camelCase 2s linear infinite;animation:styles__spin___usdoa-camelCase 2s linear infinite}@-webkit-keyframes styles__spin___usdoa-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes styles__spin___usdoa-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__testInfo___21vVC-camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif}.styles__testTitle___2BEGm-camelCase{font-weight:700;font-size:22px}@media only screen and (max-width:600px){.styles__mainContainer___zAX5c-camelCase{min-width:320px;margin:auto}.styles__testContainer___2OJWp-camelCase{min-width:290px;padding:15px 15px 20px}}", ""]), t.locals = {
                mainContainer: "styles__mainContainer___zAX5c-camelCase",
                mainHeader: "styles__mainHeader___1R_BT-camelCase",
                testContainer: "styles__testContainer___2OJWp-camelCase",
                text: "styles__text___3354--camelCase",
                testIcon: "styles__testIcon___bQNeY-camelCase",
                spin: "styles__spin___usdoa-camelCase",
                testInfo: "styles__testInfo___21vVC-camelCase",
                testTitle: "styles__testTitle___2BEGm-camelCase"
            }
        },
        XvWQ: function(e, t, a) {
            var s = a("Rycs");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, i);
            s.locals && (e.exports = s.locals)
        },
        YUq3: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                i = a.n(s),
                o = a("ANjH"),
                n = a("/MKj"),
                r = a("Ty5D"),
                l = a("H1WH"),
                c = a("TSYQ"),
                h = a.n(c),
                u = a("Xst1"),
                d = a.n(u),
                p = a("IhNm"),
                f = a.n(p),
                m = a("oQ+7"),
                g = a("XTAU"),
                y = a("+fLB"),
                _ = a("dOT4"),
                v = a("qnYv");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function x(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function k(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (a = a.call(e); !(n = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return C(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return C(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function S(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = N(e);
                    if (t) {
                        var i = N(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return T(this, a)
                }
            }

            function T(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var j = [{
                    id: "blooket-firewall",
                    title: "Firewall check on *.blooket.com",
                    desc: "Used to join games, view images, and access the site",
                    test: function() {
                        return new Promise((function(e, t) {
                            v.a.get("/api/firewall-check").then(e).catch((function(e) {
                                console.log(e), t()
                            }))
                        }))
                    }
                }, {
                    id: "firebase-firewall",
                    title: "Firewall check on *.firebaseio.com",
                    desc: "Used to connect to and play live games",
                    test: function(e) {
                        return new Promise((function(t, a) {
                            try {
                                e.props.firebase.testFirewall((function(e) {
                                    if (e) return t();
                                    a()
                                }))
                            } catch (e) {
                                console.log(e), a()
                            }
                        }))
                    }
                }, {
                    id: "ip-filter",
                    title: "Blooket Network Access",
                    desc: "Used to check whether your network has permission to access ours",
                    test: function() {
                        return new Promise((function(e, t) {
                            v.a.get("/api/ip-check").then(e).catch((function(e) {
                                console.log(e), t()
                            }))
                        }))
                    }
                }, {
                    id: "localstorage",
                    title: "LocalStorage Access",
                    desc: "Used to track login access",
                    test: function() {
                        return new Promise((function(e, t) {
                            if (window && window.localStorage && window.localStorage.setItem && window.localStorage.getItem) {
                                if (window.localStorage.setItem("TEST-KEY", "test"), "test" !== window.localStorage.getItem("TEST-KEY")) return void t();
                                e()
                            } else t()
                        }))
                    }
                }, {
                    id: "websocket",
                    title: "Browser WebSocket connection",
                    desc: "Used to participate in live games",
                    test: function() {
                        return new Promise((function(e, t) {
                            "WebSocket" in window || "MozWebSocket" in window ? e() : t()
                        }))
                    }
                }, {
                    id: "unsplash",
                    title: "Firewall check on images.unsplash.com",
                    desc: "Used to view Unsplash.com images",
                    test: function() {
                        return new Promise((function(e, t) {
                            _.a.get("https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NjkzOH0").then(e).catch(t)
                        }))
                    }
                }, {
                    id: "fontawesome",
                    title: "Firewall check on *.fontawesome.com",
                    desc: "Used to view icons",
                    test: function() {
                        return new Promise((function(e, t) {
                            _.a.get("https://kit.fontawesome.com/984809ea42.js").then(e).catch(t)
                        }))
                    }
                }],
                I = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && E(e, t)
                    }(n, e);
                    var t, a, s, o = O(n);

                    function n(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), (t = o.call(this, e)).state = {
                            tests: {}
                        }, t.checkTest = t.checkTest.bind(R(t)), t
                    }
                    return t = n, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = [];
                            j.forEach((function(e) {
                                t[e.id] = {
                                    title: e.title,
                                    desc: e.desc,
                                    test: e.test,
                                    status: "loading"
                                }
                            })), this.setState({
                                tests: t
                            }, (function() {
                                Object.entries(e.state.tests).forEach((function(t) {
                                    var a = k(t, 2),
                                        s = a[0];
                                    a[1].test(e).then((function() {
                                        e.checkTest(s, "passed")
                                    })).catch((function() {
                                        e.checkTest(s, "failed")
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "checkTest",
                        value: function(e, t) {
                            var a = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? b(Object(a), !0).forEach((function(t) {
                                        x(e, t, a[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                                    }))
                                }
                                return e
                            }({}, this.state.tests);
                            a[e].status = t, this.setState({
                                tests: a,
                                allPassed: Object.values(a).filter((function(e) {
                                    return "passed" === e.status
                                })).length === j.length
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return i.a.createElement("div", {
                                className: l.isMobile ? d.a.mBody : d.a.body
                            }, i.a.createElement(g.a, {
                                title: "Debug | Blooket",
                                desc: "Debug common Blooket issues by making sure you can connect to all pages."
                            }), i.a.createElement(m.a, null), i.a.createElement("div", {
                                className: d.a.regularBody
                            }, i.a.createElement("div", {
                                className: f.a.mainContainer
                            }, i.a.createElement("div", {
                                className: f.a.mainHeader
                            }, "Debug Page"), i.a.createElement("div", {
                                className: f.a.text
                            }, "\n                This page can be used to debug Blooket issues. If any of the below tests fail,\n                then contact your school’s tech department with this page so that they can\n                change browser or firewall settings. Doing this will allow all the below\n                tests to pass and Blooket to work!\n              "), this.state.allPassed ? i.a.createElement("div", {
                                className: f.a.testContainer,
                                style: {
                                    backgroundColor: "#b9ecac"
                                }
                            }, i.a.createElement("i", {
                                className: h()("fas fa-check", f.a.testIcon),
                                style: {
                                    color: "#4bc22e"
                                }
                            }), i.a.createElement("div", {
                                className: f.a.testInfo
                            }, i.a.createElement("div", {
                                className: f.a.testTitle
                            }, "All Tests Passed!"), "You are correctly set up to use Blooket!")) : null, Object.entries(this.state.tests).map((function(e) {
                                var t = k(e, 2),
                                    a = t[0],
                                    s = t[1];
                                return i.a.createElement("div", {
                                    className: f.a.testContainer,
                                    key: a
                                }, "loading" === s.status ? i.a.createElement("i", {
                                    className: h()("fas fa-spinner", f.a.testIcon, f.a.spin)
                                }) : "passed" === s.status ? i.a.createElement("i", {
                                    className: h()("fas fa-check", f.a.testIcon),
                                    style: {
                                        color: "#4bc22e"
                                    }
                                }) : i.a.createElement("i", {
                                    className: h()("fas fa-times", f.a.testIcon),
                                    style: {
                                        color: "#c43a35"
                                    }
                                }), i.a.createElement("div", {
                                    className: f.a.testInfo
                                }, i.a.createElement("div", {
                                    className: f.a.testTitle
                                }, s.title), s.desc))
                            })), i.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))))
                        }
                    }]) && S(t.prototype, a), s && S(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), n
                }(i.a.Component);
            I.propTypes = {};
            t.a = Object(r.g)(Object(n.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(Object(y.d)(I)))
        },
        jASO: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".tourSteps__centered___ROWNy-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__health___13O1S-camelCase{top:125px;right:10px}.tourSteps__topRight___1yQaD-camelCase{top:65px;right:10px}.tourSteps__shop___8RTK7-camelCase{right:300px}.tourSteps__shop___8RTK7-camelCase,.tourSteps__stats___2T4MY-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__stats___2T4MY-camelCase{left:250px}.tourSteps__nextRound___1h4Vb-camelCase{right:300px;bottom:25px}@media only screen and (max-width:800px){.tourSteps__health___13O1S-camelCase{top:auto;bottom:70px}.tourSteps__shop___8RTK7-camelCase{right:50%;top:auto;bottom:80px;transform:translateX(50%)}.tourSteps__stats___2T4MY-camelCase{left:50%;top:50%;transform:translate(-50%,-50%)}.tourSteps__nextRound___1h4Vb-camelCase{bottom:auto;top:130px;right:20px}}", ""]), t.locals = {
                centered: "tourSteps__centered___ROWNy-camelCase",
                health: "tourSteps__health___13O1S-camelCase",
                topRight: "tourSteps__topRight___1yQaD-camelCase",
                shop: "tourSteps__shop___8RTK7-camelCase",
                stats: "tourSteps__stats___2T4MY-camelCase",
                nextRound: "tourSteps__nextRound___1h4Vb-camelCase"
            }
        },
        p64V: function(e, t, a) {
            "use strict";
            (function(e) {
                var s = a("q1tI"),
                    i = a.n(s),
                    o = a("ANjH"),
                    n = a("/MKj"),
                    r = a("17x9"),
                    l = a.n(r),
                    c = a("Ty5D"),
                    h = a("TSYQ"),
                    u = a.n(h),
                    d = a("yzbm"),
                    p = a("WjD0"),
                    f = a.n(p),
                    m = a("H1WH"),
                    g = a("Xst1"),
                    y = a.n(g),
                    _ = a("Uba3"),
                    v = a.n(_),
                    w = a("Ip1f"),
                    b = a("AwcY"),
                    x = a("XTAU"),
                    k = a("XOuL"),
                    C = a("pkss"),
                    S = a("ca/f"),
                    E = a("74sb"),
                    O = a("E8Bj"),
                    T = a("swc+"),
                    R = a("qnYv"),
                    N = a("i4/Q"),
                    j = a("lmLo");

                function I(e) {
                    return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function M(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        t && (s = s.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), a.push.apply(a, s)
                    }
                    return a
                }

                function B(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? M(Object(a), !0).forEach((function(t) {
                            P(e, t, a[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                        }))
                    }
                    return e
                }

                function P(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }

                function z() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    z = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        a = t.hasOwnProperty,
                        s = "function" == typeof Symbol ? Symbol : {},
                        i = s.iterator || "@@iterator",
                        o = s.asyncIterator || "@@asyncIterator",
                        n = s.toStringTag || "@@toStringTag";

                    function r(e, t, a) {
                        return Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        r({}, "")
                    } catch (e) {
                        r = function(e, t, a) {
                            return e[t] = a
                        }
                    }

                    function l(e, t, a, s) {
                        var i = t && t.prototype instanceof u ? t : u,
                            o = Object.create(i.prototype),
                            n = new k(s || []);
                        return o._invoke = function(e, t, a) {
                            var s = "suspendedStart";
                            return function(i, o) {
                                if ("executing" === s) throw new Error("Generator is already running");
                                if ("completed" === s) {
                                    if ("throw" === i) throw o;
                                    return S()
                                }
                                for (a.method = i, a.arg = o;;) {
                                    var n = a.delegate;
                                    if (n) {
                                        var r = w(n, a);
                                        if (r) {
                                            if (r === h) continue;
                                            return r
                                        }
                                    }
                                    if ("next" === a.method) a.sent = a._sent = a.arg;
                                    else if ("throw" === a.method) {
                                        if ("suspendedStart" === s) throw s = "completed", a.arg;
                                        a.dispatchException(a.arg)
                                    } else "return" === a.method && a.abrupt("return", a.arg);
                                    s = "executing";
                                    var l = c(e, t, a);
                                    if ("normal" === l.type) {
                                        if (s = a.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                        return {
                                            value: l.arg,
                                            done: a.done
                                        }
                                    }
                                    "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                                }
                            }
                        }(e, a, n), o
                    }

                    function c(e, t, a) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, a)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = l;
                    var h = {};

                    function u() {}

                    function d() {}

                    function p() {}
                    var f = {};
                    r(f, i, (function() {
                        return this
                    }));
                    var m = Object.getPrototypeOf,
                        g = m && m(m(C([])));
                    g && g !== t && a.call(g, i) && (f = g);
                    var y = p.prototype = u.prototype = Object.create(f);

                    function _(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            r(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function v(e, t) {
                        var s;
                        this._invoke = function(i, o) {
                            function n() {
                                return new t((function(s, n) {
                                    ! function s(i, o, n, r) {
                                        var l = c(e[i], e, o);
                                        if ("throw" !== l.type) {
                                            var h = l.arg,
                                                u = h.value;
                                            return u && "object" == I(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                                s("next", e, n, r)
                                            }), (function(e) {
                                                s("throw", e, n, r)
                                            })) : t.resolve(u).then((function(e) {
                                                h.value = e, n(h)
                                            }), (function(e) {
                                                return s("throw", e, n, r)
                                            }))
                                        }
                                        r(l.arg)
                                    }(i, o, s, n)
                                }))
                            }
                            return s = s ? s.then(n, n) : n()
                        }
                    }

                    function w(e, t) {
                        var a = e.iterator[t.method];
                        if (void 0 === a) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return h;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return h
                        }
                        var s = c(a, e.iterator, t.arg);
                        if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                        var i = s.arg;
                        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                    }

                    function b(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function x(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function k(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(b, this), this.reset(!0)
                    }

                    function C(e) {
                        if (e) {
                            var t = e[i];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var s = -1,
                                    o = function t() {
                                        for (; ++s < e.length;)
                                            if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: S
                        }
                    }

                    function S() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, _(v.prototype), r(v.prototype, o, (function() {
                        return this
                    })), e.AsyncIterator = v, e.async = function(t, a, s, i, o) {
                        void 0 === o && (o = Promise);
                        var n = new v(l(t, a, s, i), o);
                        return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                            return e.done ? e.value : n.next()
                        }))
                    }, _(y), r(y, n, "Generator"), r(y, i, (function() {
                        return this
                    })), r(y, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var a in e) t.push(a);
                        return t.reverse(),
                            function a() {
                                for (; t.length;) {
                                    var s = t.pop();
                                    if (s in e) return a.value = s, a.done = !1, a
                                }
                                return a.done = !0, a
                            }
                    }, e.values = C, k.prototype = {
                        constructor: k,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                                for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function s(a, s) {
                                return n.type = "throw", n.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    n = o.completion;
                                if ("root" === o.tryLoc) return s("end");
                                if (o.tryLoc <= this.prev) {
                                    var r = a.call(o, "catchLoc"),
                                        l = a.call(o, "finallyLoc");
                                    if (r && l) {
                                        if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                    } else if (r) {
                                        if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                var i = this.tryEntries[s];
                                if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var n = o ? o.completion : {};
                            return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), h
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var a = this.tryEntries[t];
                                if (a.tryLoc === e) {
                                    var s = a.completion;
                                    if ("throw" === s.type) {
                                        var i = s.arg;
                                        x(a)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, a) {
                            return this.delegate = {
                                iterator: C(e),
                                resultName: t,
                                nextLoc: a
                            }, "next" === this.method && (this.arg = void 0), h
                        }
                    }, e
                }

                function D(e, t, a, s, i, o, n) {
                    try {
                        var r = e[o](n),
                            l = r.value
                    } catch (e) {
                        return void a(e)
                    }
                    r.done ? t(l) : Promise.resolve(l).then(s, i)
                }

                function L(e) {
                    return function() {
                        var t = this,
                            a = arguments;
                        return new Promise((function(s, i) {
                            var o = e.apply(t, a);

                            function n(e) {
                                D(o, s, i, n, r, "next", e)
                            }

                            function r(e) {
                                D(o, s, i, n, r, "throw", e)
                            }
                            n(void 0)
                        }))
                    }
                }

                function q(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }

                function F(e, t) {
                    return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function A(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var a, s = G(e);
                        if (t) {
                            var i = G(this).constructor;
                            a = Reflect.construct(s, arguments, i)
                        } else a = s.apply(this, arguments);
                        return U(this, a)
                    }
                }

                function U(e, t) {
                    if (t && ("object" === I(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return H(e)
                }

                function H(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function G(e) {
                    return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var W = function(t) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && F(e, t)
                    }(c, t);
                    var a, s, o, n, r, l = A(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = l.call(this, e)).state = {
                            game: {
                                title: "",
                                author: "",
                                desc: "",
                                id: "",
                                coverImage: {},
                                private: !1
                            },
                            user: null,
                            importing: !1,
                            coverImageFile: {},
                            coverImageURL: "",
                            titleError: "",
                            descError: "",
                            imageError: "",
                            uploadingURL: !1,
                            tempURL: "",
                            urlError: "",
                            method: 3,
                            loading: !1,
                            showUnsplash: !1,
                            unsplashURL: ""
                        }, t.onCreate = t.onCreate.bind(H(t)), t.onTitleUpdate = t.onTitleUpdate.bind(H(t)), t.onDescUpdate = t.onDescUpdate.bind(H(t)), t.onURLUpdate = t.onURLUpdate.bind(H(t)), t.onImageDrop = t.onImageDrop.bind(H(t)), t.onURLSubmit = t.onURLSubmit.bind(H(t)), t
                    }
                    return a = c, (s = [{
                        key: "componentDidMount",
                        value: (r = L(z().mark((function e() {
                            var t;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/login"));
                                    case 5:
                                        this.setState({
                                            user: t
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "onCreate",
                        value: function(t, a, s, i) {
                            var o = this;
                            if (t && t.preventDefault(), !this.state.loading) {
                                this.setState({
                                    loading: !0
                                });
                                var n = Object(E.z)(this.state.game.title),
                                    r = Object(E.y)(this.state.game.desc);
                                if (this.setState({
                                        titleError: n,
                                        descError: r
                                    }), n || r) this.setState({
                                    loading: !1
                                });
                                else {
                                    if (1 === this.state.method && !a) return void this.setState({
                                        importing: !0,
                                        loading: !1
                                    });
                                    if (2 === this.state.method && !i) return void this.setState({
                                        importing: !0,
                                        loading: !1
                                    });
                                    this.setState({
                                        game: B(B({}, this.state.game), {}, {
                                            author: this.state.user.name
                                        })
                                    }, (function() {
                                        if (o.state.coverImageFile && o.state.coverImageFile.size) {
                                            var t = new f.a;
                                            t.append("file", o.state.coverImageFile), t.append("tags", ""), t.append("upload_preset", "normal"), t.append("api_key", e.env.CLOUDINARY_API_KEY), t.append("timestamp", parseInt(Date.now() / 1e3, 10)), T.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", t, {
                                                headers: {
                                                    "X-Requested-With": "XMLHttpRequest"
                                                },
                                                withCredentials: !1
                                            }).then((function(e) {
                                                var t = {};
                                                t.url = e.data.secure_url, t.id = e.data.public_id, R.a.post("/api/games", {
                                                    title: o.state.game.title.trim(),
                                                    author: o.state.game.author,
                                                    desc: o.state.game.desc.trim(),
                                                    coverImage: t,
                                                    private: o.state.game.private
                                                }).then((function(e) {
                                                    o.setState({
                                                        game: B(B({}, o.state.game), {}, {
                                                            id: e.data._id,
                                                            coverImage: t
                                                        })
                                                    }, (function() {
                                                        a ? R.a.put("/api/games/quizlet-import", {
                                                            text: a,
                                                            isFlipped: s,
                                                            gameId: o.state.game.id,
                                                            startNum: 0
                                                        }).then((function() {
                                                            o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                        })).catch((function() {
                                                            o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                        })) : i ? R.a.put("/api/games/spreadsheet-import", {
                                                            gameId: o.state.game.id,
                                                            spreadsheetData: i
                                                        }).then((function() {
                                                            o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                        })).catch((function() {
                                                            o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                        })) : o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                    }))
                                                })).catch((function(e) {
                                                    if (console.error(e), e.response) {
                                                        var t = {};
                                                        e.response.data.includes("description") ? t.descError = e.response.data : t.titleError = e.response.data, o.setState(B(B({}, t), {}, {
                                                            loading: !1
                                                        }))
                                                    }
                                                }))
                                            })).catch((function(e) {
                                                console.error(e)
                                            }))
                                        } else {
                                            var n = {};
                                            o.state.coverImageURL ? n.url = o.state.coverImageURL : o.state.unsplashURL && (n.url = o.state.unsplashURL, n.id = "u"), R.a.post("/api/games", {
                                                title: o.state.game.title.trim(),
                                                author: o.state.game.author,
                                                desc: o.state.game.desc.trim(),
                                                coverImage: n,
                                                private: o.state.game.private
                                            }).then((function(e) {
                                                o.setState({
                                                    game: B(B({}, o.state.game), {}, {
                                                        id: e.data._id,
                                                        coverImage: n
                                                    })
                                                }, (function() {
                                                    a ? R.a.put("/api/games/quizlet-import", {
                                                        text: a,
                                                        isFlipped: s,
                                                        gameId: o.state.game.id,
                                                        startNum: 0
                                                    }).then((function() {
                                                        o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                    })).catch((function() {
                                                        o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                    })) : i ? R.a.put("/api/games/spreadsheet-import", {
                                                        gameId: o.state.game.id,
                                                        spreadsheetData: i
                                                    }).then((function() {
                                                        o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                    })).catch((function() {
                                                        o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                    })) : o.props.history.push("/edit?id=".concat(o.state.game.id))
                                                }))
                                            })).catch((function(e) {
                                                if (console.error(e), e.response) {
                                                    var t = {};
                                                    e.response.data.includes("description") ? t.descError = e.response.data : t.titleError = e.response.data, o.setState(B(B({}, t), {}, {
                                                        loading: !1
                                                    }))
                                                }
                                            }))
                                        }
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "onTitleUpdate",
                        value: function(e) {
                            this.setState({
                                game: B(B({}, this.state.game), {}, {
                                    title: e.target.value.slice(0, E.b)
                                }),
                                titleError: ""
                            })
                        }
                    }, {
                        key: "onDescUpdate",
                        value: function(e) {
                            this.setState({
                                game: B(B({}, this.state.game), {}, {
                                    desc: e.target.value.slice(0, E.a)
                                }),
                                descError: ""
                            })
                        }
                    }, {
                        key: "onURLUpdate",
                        value: function(e) {
                            this.setState({
                                tempURL: e.target.value,
                                urlError: ""
                            })
                        }
                    }, {
                        key: "onURLSubmit",
                        value: (n = L(z().mark((function e(t) {
                            var a, s = this;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.preventDefault(), !this.loading) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return this.loading = !0, this.setState({
                                            loading: !0
                                        }), a = "", this.state.tempURL || (a = "Where's the URL?"), e.next = 9, new Promise((function(e) {
                                            R.a.get("/api/games/is-image", {
                                                params: {
                                                    url: s.state.tempURL
                                                }
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function() {
                                                return e(!1)
                                            }))
                                        }));
                                    case 9:
                                        e.sent || (a = "We can't find a supported image for that URL."), a ? this.setState({
                                            imageError: "",
                                            urlError: a,
                                            loading: !1
                                        }) : this.setState({
                                            imageError: "",
                                            coverImageURL: this.state.tempURL,
                                            coverImageFile: {},
                                            urlError: "",
                                            tempURL: "",
                                            uploadingURL: !1,
                                            loading: !1
                                        }), this.loading = !1;
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "onImageDrop",
                        value: function(e) {
                            var t = e[0];
                            t ? this.setState({
                                imageError: "",
                                coverImageFile: t,
                                coverImageURL: URL.createObjectURL(t)
                            }) : this.setState({
                                imageError: "Error Uploading the File.",
                                coverImageFile: {},
                                coverImageURL: ""
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this,
                                s = i.a.createRef();
                            return i.a.createElement("div", {
                                className: m.isMobile ? y.a.mBody : y.a.body
                            }, i.a.createElement(x.a, {
                                title: "Set Creator | Blooket",
                                desc: "Sets are groups of questions that are used in games. Use this page to create a set with a title, description, cover image, and privacy setting."
                            }), i.a.createElement(N.a, {
                                user: this.state.user,
                                page: "Set Creator"
                            }), i.a.createElement("div", {
                                className: y.a.profileBody
                            }, i.a.createElement("div", {
                                className: v.a.header
                            }, "Question Set Creator"), i.a.createElement("form", {
                                onSubmit: this.onCreate,
                                className: v.a.inputContainer
                            }, i.a.createElement("div", {
                                className: v.a.wideContainer
                            }, i.a.createElement("div", {
                                className: v.a.dropHolder
                            }, this.state.coverImageURL || this.state.unsplashURL ? i.a.createElement("div", {
                                className: v.a.imgContainer
                            }, i.a.createElement("img", {
                                src: this.state.coverImageURL || this.state.unsplashURL,
                                alt: "Upload",
                                className: v.a.coverImage
                            }), i.a.createElement("div", {
                                className: v.a.removeImageContainer
                            }), i.a.createElement("div", {
                                className: v.a.removeImageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        coverImageURL: "",
                                        coverImageFile: {},
                                        unsplashURL: ""
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: u()(v.a.removeImageIcon, "fas fa-times")
                            }), i.a.createElement("div", {
                                className: v.a.removeImageText
                            }, "Remove"))) : i.a.createElement(d.a, {
                                multiple: !1,
                                accept: "image/jpeg, image/png, image/gif",
                                onDropAccepted: this.onImageDrop,
                                onDropRejected: function() {
                                    return a.setState({
                                        imageError: "Image Denied (Check Size < 2.5 MB)"
                                    })
                                },
                                className: v.a.dropContainer,
                                activeClassName: v.a.activeDropContainer,
                                ref: s,
                                maxSize: 25e5,
                                disableClick: !0
                            }, i.a.createElement("div", {
                                className: v.a.dropHeader
                            }, "Cover Image"), i.a.createElement("div", {
                                className: v.a.dropText
                            }, "Drag and Drop or"), i.a.createElement("div", {
                                className: v.a.uploadButtonContainer
                            }, i.a.createElement(j.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return a.setState({
                                        showUnsplash: !0
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, i.a.createElement("i", {
                                className: u()(v.a.uploadIcon, "fas fa-image")
                            }), i.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Image", i.a.createElement("br", null), "Gallery"))), i.a.createElement(j.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return s.current.open()
                                }
                            }, i.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, i.a.createElement("i", {
                                className: u()(v.a.uploadIcon, "fas fa-file-upload")
                            }), i.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Upload", i.a.createElement("br", null), "a File"))), i.a.createElement(j.a, {
                                outsideClass: v.a.uploadButton,
                                color: "#fff",
                                onClick: function() {
                                    return a.setState({
                                        uploadingURL: !0,
                                        urlError: ""
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: v.a.uploadButtonInside
                            }, i.a.createElement("i", {
                                className: u()(v.a.uploadIcon, "fas fa-link")
                            }), i.a.createElement("div", {
                                className: v.a.uploadText
                            }, "Upload", i.a.createElement("br", null), "by URL")))))), i.a.createElement("div", {
                                className: v.a.upperRightContainer
                            }, i.a.createElement("div", {
                                className: v.a.titleHeader
                            }, "Title ", i.a.createElement("span", {
                                style: {
                                    fontSize: 24,
                                    opacity: .8
                                }
                            }, "(required)")), i.a.createElement("input", {
                                className: u()(v.a.input, (e = {}, P(e, v.a.inputFilled, this.state.game.title), P(e, v.a.inputError, this.state.titleError), e)),
                                onChange: this.onTitleUpdate,
                                value: this.state.game.title,
                                type: "text",
                                placeholder: "Add a descriptive title",
                                autoFocus: m.isMobile ? "" : "autofocus"
                            }), i.a.createElement("div", {
                                className: v.a.descHeader
                            }, "Description"), i.a.createElement("textarea", {
                                className: u()(v.a.descInput, (t = {}, P(t, v.a.inputFilled, this.state.game.desc), P(t, v.a.inputError, this.state.descError), t)),
                                onChange: this.onDescUpdate,
                                value: this.state.game.desc,
                                placeholder: "Tell users about your question set",
                                "data-gramm_editor": "false"
                            }))), i.a.createElement("div", {
                                className: v.a.wideContainer,
                                style: {
                                    alignItems: "flex-start"
                                }
                            }, i.a.createElement("div", {
                                className: v.a.categoryContainer
                            }, i.a.createElement("div", {
                                className: v.a.categoryHeader
                            }, "Privacy Setting"), i.a.createElement("div", {
                                className: v.a.categoryDesc
                            }, "This decides who can find and play your question set"), i.a.createElement("div", {
                                className: v.a.privacyRow
                            }, i.a.createElement("div", {
                                className: u()(v.a.privacyCheckbox, P({}, v.a.privacyCheckboxChecked, !this.state.game.private)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    a.setState({
                                        game: B(B({}, a.state.game), {}, {
                                            private: !a.state.game.private
                                        })
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: v.a.privacyCheckboxSquare
                            })), i.a.createElement("div", {
                                className: v.a.privacyText
                            }, this.state.game.private ? "Private" : "Public"), i.a.createElement("div", {
                                className: v.a.privacyTextDesc
                            }, this.state.game.private ? "Only Playable by You" : "Playable by Everyone"))), i.a.createElement("div", {
                                className: v.a.categoryContainer
                            }, i.a.createElement("div", {
                                className: v.a.categoryHeader
                            }, "Creation Method"), i.a.createElement("div", {
                                className: v.a.categoryDesc
                            }, "This decides how you will start adding questions to your set"), i.a.createElement("div", {
                                className: v.a.methodContainer
                            }, i.a.createElement(j.a, {
                                outsideClass: v.a.methodButton,
                                color: 3 === this.state.method ? "#0bc2cf" : "#fff",
                                onClick: function() {
                                    return a.setState({
                                        method: 3
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: u()(v.a.methodButtonInside, P({}, v.a.methodSelected, 3 === this.state.method))
                            }, i.a.createElement("i", {
                                className: u()(v.a.methodIcon, "fas fa-edit")
                            }), i.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "Manual"))), i.a.createElement(j.a, {
                                outsideClass: v.a.methodButton,
                                color: 1 === this.state.method ? "#4053b3" : "#fff",
                                onClick: function() {
                                    return a.setState({
                                        method: 1
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: u()(v.a.methodButtonInside, P({}, v.a.methodSelected, 1 === this.state.method))
                            }, i.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1560736878/Media/QuizletLogo.png",
                                alt: "Quizlet",
                                className: u()(v.a.quizletImage, P({}, v.a.quizletImageSelected, 1 === this.state.method)),
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "Quizlet Import"))), i.a.createElement(j.a, {
                                outsideClass: v.a.methodButton,
                                color: 2 === this.state.method ? "#007337" : "#fff",
                                onClick: function() {
                                    return a.setState({
                                        method: 2
                                    })
                                }
                            }, i.a.createElement("div", {
                                className: u()(v.a.methodButtonInside, P({}, v.a.methodSelected, 2 === this.state.method))
                            }, i.a.createElement("i", {
                                className: u()(v.a.methodIcon, "fas fa-table")
                            }), i.a.createElement("div", {
                                className: v.a.methodHeader
                            }, "CSV Import")))))), i.a.createElement("div", {
                                className: v.a.bottomRow
                            }, this.state.titleError || this.state.descError || this.state.imageError ? i.a.createElement("div", {
                                className: v.a.errorContainer
                            }, i.a.createElement("i", {
                                className: u()(v.a.errorIcon, "fas fa-times-circle")
                            }), this.state.titleError || this.state.descError || this.state.imageError) : null, i.a.createElement("div", {
                                className: v.a.buttonWrapper
                            }, this.state.loading ? i.a.createElement(k.a, null) : i.a.createElement(j.a, {
                                color: "#0bc2cf",
                                onClick: this.onCreate
                            }, i.a.createElement("div", {
                                className: v.a.createButton
                            }, "Create")))), i.a.createElement("div", {
                                style: {
                                    height: 30
                                }
                            }), i.a.createElement("input", {
                                type: "submit",
                                style: {
                                    opacity: 0,
                                    display: "none"
                                }
                            })), this.state.uploadingURL ? i.a.createElement(S.a, {
                                text: "Enter Image URL Address:",
                                loading: this.state.loading,
                                stringValue: this.state.tempURL,
                                stringChange: this.onURLUpdate,
                                stringPlaceholder: "Image URL",
                                onSubmit: this.onURLSubmit,
                                error: this.state.urlError,
                                buttonOne: {
                                    text: "Upload",
                                    click: this.onURLSubmit,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return a.setState({
                                            uploadingURL: !1,
                                            tempURL: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null), this.state.importing ? 1 === this.state.method ? i.a.createElement("div", {
                                className: y.a.modal
                            }, i.a.createElement(w.a, {
                                done: this.onCreate,
                                close: function() {
                                    return a.setState({
                                        importing: !1
                                    })
                                }
                            })) : i.a.createElement("div", {
                                className: y.a.modal
                            }, i.a.createElement(b.a, {
                                done: this.onCreate,
                                close: function() {
                                    return a.setState({
                                        importing: !1
                                    })
                                }
                            })) : null, this.state.showUnsplash ? i.a.createElement(C.a, {
                                select: function(e) {
                                    return a.setState({
                                        showUnsplash: !1,
                                        unsplashURL: e
                                    })
                                },
                                close: function() {
                                    return a.setState({
                                        showUnsplash: !1
                                    })
                                }
                            }) : null)
                        }
                    }]) && q(a.prototype, s), o && q(a, o), Object.defineProperty(a, "prototype", {
                        writable: !1
                    }), c
                }(i.a.Component);
                W.propTypes = {
                    history: l.a.object.isRequired,
                    user: l.a.object
                };
                t.a = Object(O.c)(Object(c.g)(Object(n.b)((function() {
                    return {}
                }), (function(e) {
                    return Object(o.b)({}, e)
                }))(W)))
            }).call(this, a("8oxB"))
        },
        vkpZ: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                i = a.n(s),
                o = a("/MKj"),
                n = a("ANjH"),
                r = a("17x9"),
                l = a.n(r),
                c = a("Ty5D"),
                h = a("H1WH"),
                u = a("ixhd"),
                d = a.n(u),
                p = a("TSYQ"),
                f = a.n(p),
                m = a("XTAU"),
                g = a("z826"),
                y = a.n(g),
                _ = a("Xst1"),
                v = a.n(_),
                w = a("Rnav"),
                b = a("+fLB"),
                x = a("FVRk"),
                k = a("4Zpe"),
                C = a("ca/f"),
                S = a("9TPi"),
                E = a("74sb"),
                O = a("E8Bj"),
                T = a("8W+4"),
                R = a("4/w4"),
                N = a("EqiX"),
                j = a("1jhB"),
                I = a.n(j),
                M = a("GC+6"),
                B = a("ZrUs"),
                P = function(e, t, a, s) {
                    return a.createVector(Math.floor(e / s), Math.floor(t / s))
                },
                z = function(e, t, a, s, i, o) {
                    return e < a || t < s || e > a + i || t > s + o
                },
                D = function(e, t) {
                    var a = e.split(",");
                    return t.createVector(parseInt(a[0], 10), parseInt(a[1], 10))
                },
                L = function(e, t) {
                    return "".concat(e, ",").concat(t)
                },
                q = function(e, t, a, s) {
                    var i = [];
                    return 0 !== a && e[a - 1][t] === s && i.push(L(t, a - 1)), 0 !== t && e[a][t - 1] === s && i.push(L(t - 1, a)), a !== e.length - 1 && e[a + 1][t] === s && i.push(L(t, a + 1)), t !== e[a].length - 1 && e[a][t + 1] === s && i.push(L(t + 1, a)), i
                },
                F = function(e, t, a) {
                    if (!e || 0 === e.length) return null;
                    for (var s = 1e4, i = e[0], o = 0; o < e.length; o++) {
                        var n = e[o];
                        if (!a || !a.includes(n)) {
                            var r = t.dist(n.pos);
                            r < s && (s = r, i = n)
                        }
                    }
                    return i
                },
                A = function(e, t, a) {
                    for (var s = [], i = 0; i < e; i++) {
                        s[i] = [];
                        for (var o = 0; o < t; o++) s[i][o] = a
                    }
                    return s
                },
                U = function(e, t, a) {
                    return e > Math.min(t, a) && e < Math.max(t, a)
                },
                H = function(e, t, a, s) {
                    return s.createVector(e * a + a / 2, t * a + a / 2)
                },
                G = function(e, t, a, s, i, o) {
                    var n = H(a, s, i, o),
                        r = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return U(e, n.x - r, n.x + r) && U(t, n.y - r, n.y + r)
                },
                W = function(e, t, a, s, i, o, n) {
                    var r = H(a, s, i, o),
                        l = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return "x" === n ? U(e, r.x - 2 * l, r.x + 2 * l) && U(t, r.y - l, r.y + l) : U(e, r.x - l, r.x + l) && U(t, r.y - 2 * l, r.y + 2 * l)
                },
                Q = function(e, t, a, s, i) {
                    return Math.pow(e - a, 2) + Math.pow(t - s, 2) < Math.pow(i, 2)
                },
                V = function(e, t, a, s, i) {
                    for (var o = [], n = 0; n < s.length; n++) {
                        var r = s[n];
                        Q(r.pos.x, r.pos.y, e, t, (a + .5) * i) && o.push(r)
                    }
                    return o
                },
                Y = function(e, t, a, s, i) {
                    var o = 1e4,
                        n = 1e4,
                        r = e[0];
                    return e.forEach((function(e) {
                        var l = P(e.pos.x, e.pos.y, s, i),
                            c = t[l.y][l.x],
                            h = 1e4,
                            u = a[l.y][l.x];
                        1 === u && (h = e.pos.x - l.x * i), 2 === u && (h = e.pos.y - l.y * i), 3 === u && (h = (l.x + 1) * i - e.pos.x), 4 === u && (h = (l.y + 1) * i - e.pos.y), (c < o || c === o && h < n) && (o = c, n = h, r = e)
                    })), r
                },
                K = function(e, t, a, s, i) {
                    return U(e, 0, a * i) && U(t, 0, s * i)
                },
                J = function(e, t, a) {
                    return Math.abs((e.x * (t.y - a.y) + t.x * (a.y - e.y) + a.x * (e.y - t.y)) / 2)
                },
                X = function(e, t, a, s) {
                    var i = 0;
                    i += J(t, e, a), i += J(a, e, s), i += J(s, e, t);
                    var o = J(t, a, s);
                    return Math.round(i) === Math.round(o)
                };

            function Z(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            var $ = function() {
                function e(t, a, s, i, o, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.p5 = s, this.images = o, this.updateDmg = r, this.width = .5, this.img = "", this.alive = !0, this.effects = [], this.name = "enemy", this.sound = "pop", this.pos = this.p5.createVector(t * i + i / 2, a * i + i / 2), this.vel = this.p5.createVector(0, 0), this.dir = this.p5.createVector(0, 0), this.danceAngle = 0, this.freezeTime = 0, this.slowLevel = 0, this.blowTime = 0, this.lastTile = [], this.health = n, this.maxHealth = n, this.speed = 1, this.onCreate()
                }
                var t, a, s;
                return t = e, (a = [{
                    key: "getDrawData",
                    value: function() {
                        return this.health > 5e3 ? {
                            img: this.images["Light Slime Monster"],
                            width: 2.3,
                            speed: .5
                        } : this.health > 1e3 ? {
                            img: this.images["Dark Slime Monster"],
                            width: 1.7,
                            speed: .5
                        } : this.health > 300 ? {
                            img: this.images["Red Slime Monster"],
                            width: 1.2,
                            speed: .75
                        } : this.health > 120 ? {
                            img: this.images["Slime Monster"],
                            width: 1,
                            speed: .75
                        } : this.health > 85 ? {
                            img: this.images.Black,
                            width: .3,
                            speed: 1.5
                        } : this.health > 40 ? {
                            img: this.images.Red,
                            width: .7,
                            speed: .75
                        } : this.health > 20 ? {
                            img: this.images.Green,
                            width: .6,
                            speed: 1.5
                        } : this.health > 10 ? {
                            img: this.images.Orange,
                            width: .55,
                            speed: 2.25
                        } : this.health > 5 ? {
                            img: this.images.Lime,
                            width: .5,
                            speed: 2
                        } : this.health > 2 ? {
                            img: this.images.Purple,
                            width: .45,
                            speed: 1.75
                        } : this.health > 1 ? {
                            img: this.images.Pink,
                            width: .4,
                            speed: 1.5
                        } : {
                            img: this.images.Blue,
                            width: .35,
                            speed: 1.25
                        }
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.danceAngle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.freezeTime > 0 ? this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .7, this.width * e * .7) : this.slowLevel > 0 && this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .45, this.width * e * .45), this.p5.pop()
                    }
                }, {
                    key: "dealDamage",
                    value: function(e) {
                        var t = Math.round(e);
                        this.updateDmg(Math.max(0, Math.min(this.health, t))), this.health > 0 && (this.health -= t), this.health <= 0 && this.onKilled()
                    }
                }, {
                    key: "isDead",
                    value: function() {
                        return !this.alive
                    }
                }, {
                    key: "kill",
                    value: function() {
                        this.alive = !1
                    }
                }, {
                    key: "onCreate",
                    value: function() {
                        this.health = this.maxHealth
                    }
                }, {
                    key: "onKilled",
                    value: function() {
                        this.alive && this.kill()
                    }
                }, {
                    key: "dance",
                    value: function() {
                        this.danceAngle = 2 * Math.PI
                    }
                }, {
                    key: "freeze",
                    value: function(e) {
                        this.freezeTime = e
                    }
                }, {
                    key: "blowBack",
                    value: function() {
                        this.blowTime = 15
                    }
                }, {
                    key: "slow",
                    value: function() {
                        this.slowLevel = 3
                    }
                }, {
                    key: "pxSpeed",
                    value: function(e, t) {
                        return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                    }
                }, {
                    key: "steer",
                    value: function(e, t, a, s, i) {
                        var o = P(this.pos.x, this.pos.y, this.p5, e);
                        if (!z(o.x, o.y, 0, 0, t, a)) {
                            var n = s[o.y][o.x];
                            if (0 === n && (o.x !== i.x || o.y !== i.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (W(this.pos.x, this.pos.y, o.x, o.y, e, this.p5, 0 === this.dir.x ? "x" : "y")) {
                                if (0 !== n && (this.lastTile = [o.x, o.y]), null === n) return;
                                1 === n ? this.dir = this.p5.createVector(-1, 0) : 2 === n ? this.dir = this.p5.createVector(0, -1) : 3 === n ? this.dir = this.p5.createVector(1, 0) : 4 === n && (this.dir = this.p5.createVector(0, 1))
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var a = this.getDrawData();
                        this.width = a.width, this.img = a.img, this.speed = a.speed;
                        var s = t ? 2 : 1;
                        if (this.danceAngle > 0 && (this.danceAngle = Math.max(0, this.danceAngle - 2 * Math.PI / (20 / s))), this.freezeTime > 0 && (this.freezeTime = Math.max(0, this.freezeTime - s)), this.blowTime > 0 && (this.blowTime = Math.max(0, this.blowTime - s)), this.slowLevel > 0 && (this.slowLevel = Math.max(0, this.slowLevel - s)), 0 === this.danceAngle && 0 === this.freezeTime) {
                            var i = this.pxSpeed(e, t);
                            this.vel = this.p5.createVector(this.dir.x * i, this.dir.y * i), this.vel.limit(i * (this.slowLevel > 0 ? .5 : this.speed)), this.blowTime > 0 ? this.pos.sub(this.p5.createVector(.35 * this.vel.x, .35 * this.vel.y)) : this.pos.add(this.vel)
                        }
                    }
                }]) && Z(t.prototype, a), s && Z(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function ee(e) {
                return (ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function te(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && ae(e, t)
            }

            function ae(e, t) {
                return (ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function se(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = oe(e);
                    if (t) {
                        var i = oe(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return ie(this, a)
                }
            }

            function ie(e, t) {
                if (t && ("object" === ee(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function oe(e) {
                return (oe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ne(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function re(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function le(e, t, a) {
                return t && re(e.prototype, t), a && re(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var ce = function() {
                    function e(t, a, s, i) {
                        ne(this, e), this.p5 = i, this.tileSize = s, this.pos = t.copy(), this.speed = a, this.vel = this.p5.createVector(Object(E.q)(-1, 1) * this.speed * s / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30), Object(E.q)(-1, 1) * this.speed * s / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)), this.lifespan = 255, this.decay = 2, this.color = [0, 0, 0], this.radius = 4
                    }
                    return le(e, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, e, e)
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return this.lifespan < 0
                        }
                    }, {
                        key: "run",
                        value: function(e, t) {
                            this.update(e), t || this.draw()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1)
                        }
                    }]), e
                }(),
                he = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(230, 255), Object(E.q)(100, 160), Object(E.q)(200, 240)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                ue = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(20, 23), n.color = [Object(E.q)(190, 255), Object(E.q)(0, 40), Object(E.q)(0, 70)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                de = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(0, 80), Object(E.q)(150, 200), Object(E.q)(90, 130)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                pe = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(240, 255), Object(E.q)(215, 245), Object(E.q)(0, 70)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                fe = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(110, 140), Object(E.q)(0, 40), Object(E.q)(110, 160)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                me = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(140, 150), Object(E.q)(55, 90), Object(E.q)(170, 205)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                ge = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Math.round(Object(E.q)(0, 255)), 100, 50], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke();
                            var e = this.p5.color("hsla(".concat(this.color[0], ", ").concat(this.color[1], "%, ").concat(this.color[2], "%, ").concat(Math.max(0, this.lifespan / 255), ")"));
                            this.p5.fill(e);
                            var t = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, t, t)
                        }
                    }]), a
                }(ce),
                ye = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(14, 18), n.color = [Object(E.q)(200, 255), Object(E.q)(0, 127), Object(E.q)(0, 31)], n.radius = Object(E.r)(2, 6), n.angle = Object(E.q)(0, 2 * Math.PI), n.angleVel = Object(E.q)(-.5, .5), n
                    }
                    return le(a, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.rectMode(this.p5.CENTER), this.p5.rect(0, 0, e, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), a
                }(ce),
                _e = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 12), r.speed = Object(E.q)(r.speed / 2.5, r.speed), r.vel = o.createVector(Math.cos(n + Math.PI / 2 + Object(E.q)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30), Math.sin(n + Math.PI / 2 + Object(E.q)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30)), r
                    }
                    return le(a)
                }(ye),
                ve = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o, n)).decay = Object(E.q)(8, 11), r.color = [Object(E.q)(180, 220), Object(E.q)(0, 85), Object(E.q)(0, 30)], r
                    }
                    return le(a)
                }(_e),
                we = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o, n)).color = [Object(E.q)(0, 170), Object(E.q)(175, 215), Object(E.q)(220, 250)], r
                    }
                    return le(a)
                }(_e),
                be = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), r.color = [Object(E.q)(0, 30), Object(E.q)(100, 200), Object(E.q)(210, 255)], r.radius = Object(E.r)(2, 6), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(E.q)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(E.q)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return le(a)
                }(ce),
                xe = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o, n)).color = [Object(E.q)(200, 255), Object(E.q)(0, 40), Object(E.q)(0, 65)], r
                    }
                    return le(a)
                }(be),
                ke = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), n.color = [Object(E.q)(0, 30), Object(E.q)(100, 200), Object(E.q)(210, 255)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                Ce = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o) {
                        var n;
                        return ne(this, a), (n = t.call(this, e, s, i, o)).decay = Object(E.q)(14, 18), n.color = [Object(E.q)(110, 140), Object(E.q)(0, 40), Object(E.q)(110, 160)], n.radius = Object(E.r)(2, 6), n
                    }
                    return le(a)
                }(ce),
                Se = function(e) {
                    te(a, e);
                    var t = se(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ne(this, a), (r = t.call(this, e, s, i, o)).decay = Object(E.q)(8, 10), r.color = [Object(E.q)(230, 255), Object(E.q)(230, 255), Object(E.q)(230, 255)], r.radius = Object(E.r)(1, 3), r.angle = Object(E.q)(0, 2 * Math.PI), r.angleVel = Object(E.q)(-.3, .3), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(E.q)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(E.q)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return le(a, [{
                        key: "draw",
                        value: function() {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.triangle(e, -e, -e, -e, 0, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), a
                }(ce);

            function Ee(e) {
                return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Oe(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && Te(e, t)
            }

            function Te(e, t) {
                return (Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Re(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = je(e);
                    if (t) {
                        var i = je(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return Ne(this, a)
                }
            }

            function Ne(e, t) {
                if (t && ("object" === Ee(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function je(e) {
                return (je = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Ie(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Me(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function Be(e, t, a) {
                return t && Me(e.prototype, t), a && Me(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var Pe = function() {
                    function e(t, a, s, i) {
                        Ie(this, e), this.p5 = i, this.tileSize = s, this.origin = this.p5.createVector(t, a), this.particles = []
                    }
                    return Be(e, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ce(this.origin, 1, this.tileSize, this.p5))
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return 0 === this.particles.length
                        }
                    }, {
                        key: "run",
                        value: function(e, t, a) {
                            if (a)
                                for (var s = 0; s < this.particles.length - 3; s++) this.particles.pop();
                            for (var i = this.particles.length - 1; i >= 0; i--) {
                                var o = this.particles[i];
                                o.run(e, t && i > this.particles.length / 2), o.isDead() && this.particles.splice(i, 1)
                            }
                        }
                    }]), e
                }(),
                ze = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new he(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                De = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ue(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                Le = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new de(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                qe = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new pe(this.origin, 1.5, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                Fe = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new pe(this.origin, 3, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                Ae = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new me(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                Ue = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ge(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                He = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ye(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), a
                }(Pe),
                Ge = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new _e(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                We = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new ve(this.origin, 4.5, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Qe = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new we(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Ve = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new be(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Ye = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new xe(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Ke = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new ke(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Je = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Ce(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Xe = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new fe(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe),
                Ze = function(e) {
                    Oe(a, e);
                    var t = Re(a);

                    function a() {
                        return Ie(this, a), t.apply(this, arguments)
                    }
                    return Be(a, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Se(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), a
                }(Pe);

            function $e(e) {
                return ($e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function et(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && tt(e, t)
            }

            function tt(e, t) {
                return (tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function at(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = it(e);
                    if (t) {
                        var i = it(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return st(this, a)
                }
            }

            function st(e, t) {
                if (t && ("object" === $e(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function it(e) {
                return (it = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ot(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function nt(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function rt(e, t, a) {
                return t && nt(e.prototype, t), a && nt(e, a), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var lt = function() {
                    function e(t, a, s, i, o) {
                        ot(this, e), this.p5 = o, this.pos = o.createVector(t, a), this.vel = o.createVector(0, 0), this.width = .2, this.imgName = "", this.alive = !0, this.target = {
                            pos: o.createVector(s.pos.x, s.pos.y),
                            width: s.width
                        }, this.blastRadius = .55, this.damage = i, this.speed = 15, this.onCreate()
                    }
                    return rt(e, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.vel.heading() + Math.PI / 2), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t) {
                            var a = this;
                            V(this.pos.x, this.pos.y, this.blastRadius, e, t).forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e) {
                            var t = this.pos,
                                a = this.target.pos;
                            return Q(t.x, t.y, a.x, a.y, Math.max(this.target.width * e * .7, .7 * e) * (30 / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)))
                        }
                    }, {
                        key: "pxSpeed",
                        value: function(e, t) {
                            return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var a = this.pxSpeed(e, t),
                                s = this.vel.normalize();
                            this.vel = this.p5.createVector(s.x * a, s.y * a), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), e
                }(),
                ct = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .2, r.imgName = "Egg", r.blastRadius = .55, r.speed = 15, r.onCreate(), r
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 10; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                ht = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .2, r.imgName = "Nut", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return rt(a)
                }(lt),
                ut = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).width = .4, l.imgName = r ? "MasterArrow" : "Arrow", l.speed = 20, l.blastRadius = .2, l.onCreate(), l
                    }
                    return rt(a)
                }(lt),
                dt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .4, r.imgName = "Sword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return rt(a)
                }(lt),
                pt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .4, r.imgName = "PhantomSword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return rt(a)
                }(lt),
                ft = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .4, r.imgName = "Heart", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new De(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 7; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                mt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .4, r.imgName = "EnchantedArrow", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Je(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                gt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n) {
                        var r;
                        return ot(this, a), (r = t.call(this, e, s, i, o, n)).width = .3, r.imgName = "WitchOrb", r.blastRadius = .6, r.speed = 15, r.onCreate(), r
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Le(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                yt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).width = .4, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 13, l.onCreate(), l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new ze(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                _t = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).width = .325, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 5, l.onCreate(), l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius - .3, e, t), o = new ze(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 6; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(Math.floor(s.damage / 2))
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                vt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).width = .45, l.imgName = "DiscoBall", l.blastRadius = r, l.speed = 13, l.angle = Object(E.q)(0, 2 * Math.PI), l.angleVel = Object(E.q)(-.5, .5), l
                    }
                    return rt(a, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.angle += this.angleVel * (t ? 2 : 1);
                            var a = this.pxSpeed(e, t),
                                s = this.vel.normalize();
                            this.vel = this.p5.createVector(s.x * a, s.y * a), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ue(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                e.dance(), e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }]), a
                }(lt),
                wt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).width = .5, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 11, l.onCreate(), l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a, s) {
                            for (var i = this, o = V(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new ze(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 12; r++) n.addParticle();
                            a.push(n), o.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 6; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((5 - c) * (Math.PI / 3) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((5 - c) * (Math.PI / 3) + Math.PI / 2 + l)
                                    },
                                    width: .5
                                };
                                s.push(new _t(this.pos.x, this.pos.y, h, this.damage, this.p5, this.blastRadius))
                            }
                            this.kill()
                        }
                    }]), a
                }(lt),
                bt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, {
                            pos: {
                                x: 1,
                                y: 1
                            },
                            width: .2
                        }, o, n)).p5 = n, l.width = .5, l.imgName = "Fish", l.blastRadius = .6, l.speed = 1.5, l.angle = 0, l.flipped = !1, l.paths = r, l.lastTile = [], l
                    }
                    return rt(a, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.flipped && this.p5.scale(-1, 1), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ke(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 13; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e, t) {
                            return V(this.pos.x, this.pos.y, this.target.width / 2, t, e).filter((function(e) {
                                return e.alive
                            })).length > 0
                        }
                    }, {
                        key: "update",
                        value: function(e, t, a, s, i, o) {
                            var n = P(this.pos.x, this.pos.y, this.p5, e),
                                r = this.paths[n.y][n.x];
                            if (0 === r && (n.x !== o.x || n.y !== o.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (W(this.pos.x, this.pos.y, n.x, n.y, e, this.p5, 0 === r.x ? "x" : "y")) {
                                if (!r) return void this.kill();
                                this.lastTile = [n.x, n.y];
                                var l = this.pxSpeed(e, t);
                                1 === r ? (this.vel = this.p5.createVector(-l, 0), this.flipped = !0, this.angle = 0) : 2 === r ? (this.vel = this.p5.createVector(0, -l), this.flipped = !1, this.angle = -Math.PI / 2) : 3 === r ? (this.vel = this.p5.createVector(l, 0), this.flipped = !1, this.angle = 0) : 4 === r && (this.vel = this.p5.createVector(0, l), this.flipped = !0, this.angle = -Math.PI / 2)
                            }
                            this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {}
                    }]), a
                }(lt),
                xt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n)).pos = n.createVector(e, s), l.vel = n.createVector(0, 0), l.width = .45, l.imgName = "Missile", l.blastRadius = r, l.range = 5, l.speed = 5, l.target = i, l.lifetime = 300, l.onCreate(), l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "findTarget",
                        value: function(e, t, a, s) {
                            var i = V(this.pos.x, this.pos.y, this.range, e, t);
                            if (0 !== i.length) {
                                var o = Y(i, a, s, this.p5, t);
                                o && (this.target = o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t, a, s, i) {
                            this.lifetime <= 0 ? this.kill() : (this.lifetime -= 1, this.target.alive || this.findTarget(a, e, s, i), this.vel = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize().mult(this.speed * (t ? 2 : 1)), this.vel.limit(this.pxSpeed(e, t)), this.pos.add(this.vel))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), a
                }(lt),
                kt = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n, r)).imgName = "BigMissile", l.width = .55, l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a) {
                            for (var s = this, i = V(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ae(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 20; n++) o.addParticle();
                            a.push(o), i.forEach((function(e) {
                                return e.dealDamage(Math.min(Math.round(s.damage + .15 * e.health), 50))
                            })), this.kill()
                        }
                    }]), a
                }(xt),
                Ct = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n, r)).imgName = "CornKernel", l.width = .2, l.hasReached = !1, l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a, s, i, o) {
                            var n = this;
                            if (!this.hasReached) return this.hasReached = !0, void this.findTarget(e, t, i, o);
                            for (var r = V(this.pos.x, this.pos.y, this.blastRadius, e, t), l = new qe(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 4; c++) l.addParticle();
                            a.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.damage)
                            })), this.kill()
                        }
                    }]), a
                }(xt),
                St = function(e) {
                    et(a, e);
                    var t = at(a);

                    function a(e, s, i, o, n, r) {
                        var l;
                        return ot(this, a), (l = t.call(this, e, s, i, o, n, r)).imgName = "Corn", l
                    }
                    return rt(a, [{
                        key: "onHit",
                        value: function(e, t, a, s) {
                            for (var i = this, o = V(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new qe(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 13; r++) n.addParticle();
                            a.push(n), o.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 4; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((3 - c) * (Math.PI / 2) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((3 - c) * (Math.PI / 2) + Math.PI / 2 + l)
                                    },
                                    width: .5,
                                    alive: !0
                                };
                                s.push(new Ct(this.pos.x, this.pos.y, h, Math.max(.13 * this.damage, 1), this.p5, this.blastRadius / 2))
                            }
                            this.kill()
                        }
                    }]), a
                }(xt),
                Et = {};
            Et.chick = {
                lineColor: "#ffcd05",
                width: .5,
                blook: "Chick",
                weight: 5,
                name: "chick",
                title: "Laser Chick",
                desc: "A Chick that shoots lasers, enough said.",
                fullCd: 40,
                cost: 2,
                range: 2,
                damage: 1,
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise Chick",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Chick",
                            cost: 2,
                            dmgMult: 3,
                            width: .6
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .6
                        }
                    }],
                    [{
                        desc: "Transform into 3 Chicks, each with a laser (x3 damage)",
                        iconBlook: "Chick",
                        data: {
                            finalUpgrade: 0,
                            title: "Chick Army",
                            cost: 4,
                            width: .35,
                            dmgMult: 3,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var t = this.width * e;
                                this.p5.image(this.img, 0, -t / 1.8, t, 1.15 * t), this.p5.image(this.img, t / 1.8, t / 1.8, t, 1.15 * t), this.p5.image(this.img, -t / 1.8, t / 1.8, t, 1.15 * t), this.p5.pop()
                            },
                            onAim: function(e, t, a, s) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, a, s), this.drawLine)) {
                                    this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight);
                                    var i = this.width * t,
                                        o = Math.atan2(e.pos.y - this.pos.y, e.pos.x - this.pos.x);
                                    this.p5.line(this.pos.x - i / 1.8 * Math.cos(o), this.pos.y - i / 1.8 * Math.sin(o), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o - Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o - Math.PI / 4), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o + Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o + Math.PI / 4), e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            }
                        }
                    }, {
                        desc: "No more lasers, just x1.5 damage explosive eggs",
                        iconBlook: "Chicken",
                        data: {
                            finalUpgrade: 1,
                            title: "Chicken Bomber",
                            blook: "Chicken",
                            cost: 4,
                            dmgMult: 1.5,
                            width: .65,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ct(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Et.owl = {
                lineColor: "#594a42",
                width: .55,
                blook: "Owl",
                weight: 3,
                name: "owl",
                title: "Owl Sniper",
                desc: "Shoots high damage bullets from a long range.",
                fullCd: 120,
                cost: 3,
                range: 9,
                damage: 5,
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Each attack also deals 25% of an enemy's current health as damage (max 150)",
                        iconBlook: "Agent Owl",
                        data: {
                            finalUpgrade: 0,
                            title: "Agent Owl",
                            blook: "Agent Owl",
                            cost: 5,
                            lineColor: "#32da4e",
                            weight: 6,
                            attack: function(e, t, a, s) {
                                var i = Math.min(this.getDamage() + .25 * e.health, 150);
                                e.dealDamage(i), this.onHit(e, t, a, s)
                            }
                        }
                    }, {
                        desc: "Transforms into 3 birds that deal damage to all enemies in a line",
                        iconBlook: "Cockatoo",
                        data: {
                            finalUpgrade: 1,
                            title: "BIRDS",
                            cost: 4,
                            width: .32,
                            weight: 1,
                            blook: "Cockatoo",
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var a = this.width * e;
                                this.p5.image(t.Parrot, -a, 0, a, 1.15 * a), this.p5.image(t.Cockatoo, 0, 0, a, 1.15 * a), this.p5.image(t.Macaw, a, 0, a, 1.15 * a), this.p5.pop()
                            },
                            onAim: function(e, t, a, s) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, a, s), this.drawLine)) {
                                    this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle);
                                    var i = this.width * t,
                                        o = (this.range + .5) * t;
                                    this.p5.noStroke(), this.p5.rectMode(this.p5.CORNER), this.p5.fill("#ed1c24"), this.p5.rect(1.5 * -i, 0, i, o), this.p5.fill("#ffffff"), this.p5.rect(-i / 2, 0, i, o), this.p5.fill("#00aeef"), this.p5.rect(i / 2, 0, i, o), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            },
                            attack: function(e, t, a, s) {
                                var i = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = this.width * t,
                                    l = (this.range + .5) * t,
                                    c = this.pos.x - l * Math.sin(this.angle),
                                    h = this.pos.y + l * Math.cos(this.angle);
                                s.forEach((function(e) {
                                    (function(e, t, a, s, i) {
                                        var o = 0;
                                        o += J(t, e, i), o += J(i, e, s), o += J(s, e, a), o += J(e, a, t);
                                        var n = Math.abs((t.x * a.y - t.y * a.x + (a.x * s.y - a.y * s.x) + (s.x * i.y - s.y * i.x) + (i.x * t.y - i.y * t.x)) / 2);
                                        return Math.round(o) === Math.round(n)
                                    })({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: i.pos.x - r * Math.cos(i.angle),
                                        y: i.pos.y + r * Math.sin(i.angle)
                                    }, {
                                        x: i.pos.x - r * Math.cos(i.angle),
                                        y: i.pos.y - r * Math.sin(i.angle)
                                    }, {
                                        x: c - r * Math.cos(i.angle),
                                        y: h - r * Math.sin(i.angle)
                                    }, {
                                        x: c + r * Math.cos(i.angle),
                                        y: h + r * Math.sin(i.angle)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    return e.dealDamage(o)
                                })), this.onHit(e, t, a, s)
                            }
                        }
                    }]
                ]
            }, Et.squirrel = {
                drawLine: !1,
                width: .5,
                blook: "Squirrel",
                name: "squirrel",
                title: "Nutty Squirrel",
                desc: "Throws harmful nuts at enemies.",
                fullCd: 45,
                cost: 3,
                range: 1.5,
                damage: 3,
                onAim: function(e, t, a, s, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ht(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                },
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharp Squirrel",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Squirrel",
                            cost: 2,
                            cdMult: .5,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Squirrel",
                            cost: 3,
                            dmgMult: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedster Squirrel",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Transform into 9 mini squirrels, each with a 1/4 damage acorn",
                        iconBlook: "Squirrel",
                        data: {
                            finalUpgrade: 0,
                            title: "Lots O' Squirrels",
                            cost: 4,
                            width: .3,
                            dmgMult: 9 / 4,
                            draw: function(e) {
                                var t = this,
                                    a = [-1, 0, 1];
                                a.forEach((function(s) {
                                    a.forEach((function(a) {
                                        t.p5.push(), t.p5.translate(t.pos.x + .325 * e * a, t.pos.y + .325 * e * s), t.p5.angleMode(t.p5.RADIANS), t.p5.rotate(t.angle), t.p5.imageMode(t.p5.CENTER);
                                        var i = t.width * e;
                                        t.p5.image(t.img, 0, 0, i, 1.15 * i), t.p5.pop()
                                    }))
                                }))
                            },
                            onAim: function(e, t, a, s, i) {
                                var o = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown();
                                    var n = [-1, 0, 1];
                                    n.forEach((function(a) {
                                        n.forEach((function(s) {
                                            i.push(new ht(o.pos.x + .325 * t * s, o.pos.y + .325 * t * a, e, o.getDamage() / 9, o.p5))
                                        }))
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, the squirrel goes nuts and throws acorns rapidly",
                        iconBlook: "Nuts Squirrel",
                        data: {
                            finalUpgrade: 1,
                            title: "GO NUTS SQUIRREL",
                            blook: "Nuts Squirrel",
                            img: "Squirrel",
                            cost: 4,
                            width: .6,
                            nutsAttacks: 0,
                            nutsCd: 4,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.nutsCd > 0 ? (this.resetCooldown(), this.nutsCd -= 1) : 0 === this.nutsCd ? (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks = 13, this.img = this.images["Nuts Squirrel"], this.nutsCd = -1) : this.nutsAttacks <= 0 ? (this.resetCooldown(), this.nutsCd = 4, this.img = this.images.Squirrel) : (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks -= 1), i.push(new ht(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Et.goldfish = {
                drawLine: !1,
                follow: !1,
                width: .6,
                blook: "Goldfish",
                name: "goldfish",
                title: "Splashy Goldfish",
                desc: "Deals damage by splashing enemies around himself.",
                fullCd: 60,
                cost: 4,
                range: 1,
                damage: 2,
                target: function(e, t, a, s, i, o) {
                    var n = this;
                    if (this.canFire()) {
                        var r = this.visible(e, t);
                        if (0 !== r.length) {
                            this.resetCooldown();
                            for (var l = new Ve(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 8; c++)
                                for (var h = 0; h < 8; h++) l.addParticle(Math.PI / 4 * c);
                            a.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Goldy Goldfish",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Goldfish",
                            cost: 2,
                            cdMult: 2 / 3,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Super Goldfish",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Soaker Goldfish",
                            cost: 2,
                            range: 1.5
                        }
                    }],
                    [{
                        desc: "Every 2 attacks, spawn a fish that follows the path and explodes on contact",
                        iconBlook: "Goldfish",
                        data: {
                            finalUpgrade: 0,
                            title: "School of Fish",
                            fishCd: 0,
                            cost: 4,
                            width: .65,
                            target: function(e, t, a, s, i, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length) {
                                        this.resetCooldown();
                                        for (var h = new Ve(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        a.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.getDamage())
                                        })), this.fishCd <= 0 ? (o.push(new bt(r.x * t + t / 2, r.y * t + t / 2, null, 2 * this.getDamage(), this.p5, Object(E.p)(n))), this.fishCd = 1) : this.fishCd -= 1
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every attack, send out an extra wave of half-strength damage",
                        iconBlook: "Red Goldfish",
                        data: {
                            finalUpgrade: 1,
                            title: "Hungry Fish",
                            cost: 4,
                            blook: "Red Goldfish",
                            width: .65,
                            secondAttack: !1,
                            target: function(e, t, a, s, i, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length || this.secondAttack) {
                                        for (var h = this.secondAttack ? new Ye(this.pos.x, this.pos.y, t, this.p5) : new Ve(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        a.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.secondAttack ? l.getDamage() / 2 : l.getDamage())
                                        })), this.secondAttack ? (this.resetCooldown(), this.secondAttack = !1) : (this.cd = 10, this.secondAttack = !0)
                                    }
                                }
                            }
                        }
                    }]
                ]
            }, Et.pig = {
                drawLine: !1,
                width: .6,
                blook: "Pig",
                name: "pig",
                title: "Pig Bomber",
                desc: "Shoots a ball that explodes and deals damage.",
                fullCd: 90,
                cost: 4,
                range: 1.5,
                damage: 5,
                blastRadius: .6,
                onAim: function(e, t, a, s, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new yt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Big Pig",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Boomer Pig",
                            cost: 2,
                            blastMult: 1.5,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Pig",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Perceptive Pig",
                            cost: 1,
                            range: 2.5
                        }
                    }],
                    [{
                        desc: "Throw a Disco Ball that forces enemies to dance for 1s",
                        iconBlook: "Party Pig",
                        data: {
                            finalUpgrade: 0,
                            title: "Party Pig",
                            cost: 4,
                            blook: "Party Pig",
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new vt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }, {
                        desc: "After exploding, split into 5 mini exploding balls",
                        iconBlook: "Pig",
                        data: {
                            finalUpgrade: 1,
                            title: "Giant Pig",
                            cost: 4,
                            width: 1,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new wt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Et.elf = {
                drawLine: !1,
                width: .6,
                blook: "Elf",
                name: "elf",
                title: "Archer Elf",
                desc: "Fires arrows to damage enemies.",
                fullCd: 60,
                cost: 4,
                range: 2,
                damage: 2,
                onAim: function(e, t, a, s, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Elf",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Stealth Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharpshot Elf",
                            cost: 2,
                            range: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Prodigy Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Deal 75% Damage, but shoot 4 times as fast",
                        iconBlook: "Master Elf",
                        data: {
                            finalUpgrade: 0,
                            title: "Master Elf",
                            cost: 4,
                            blook: "Master Elf",
                            cdMult: 1 / 4,
                            dmgMult: .75,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !0)))
                            }
                        }
                    }, {
                        desc: "Shoot enchanted arrows that explode and deal x2.5 damage",
                        iconBlook: "Enchanted Elf",
                        data: {
                            finalUpgrade: 1,
                            title: "Enchanted Elf",
                            cost: 4,
                            blook: "Enchanted Elf",
                            dmgMult: 2.5,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new mt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Et.dragon = {
                drawLine: !1,
                width: .6,
                blook: "Dragon",
                name: "dragon",
                title: "Flame Dragon",
                desc: "Breaths damaging fire in a short-range, cone-like shape.",
                fullCd: 70,
                cost: 4,
                range: 1.4,
                damage: 3,
                onAim: function(e, t, a, s) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown(), this.attack(e, t, a, s);
                        for (var i = new Ge(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) i.addParticle(this.angle);
                        a.push(i)
                    }
                },
                attack: function(e, t, a, s) {
                    var i = this,
                        o = this.getDamage(),
                        n = [],
                        r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                    s.forEach((function(e) {
                        X({
                            x: e.pos.x,
                            y: e.pos.y
                        }, {
                            x: i.pos.x,
                            y: i.pos.y
                        }, {
                            x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                            y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                        }, {
                            x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                            y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                        }) && n.push(e)
                    })), n.forEach((function(e) {
                        return e.dealDamage(o)
                    }))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Dragon",
                            cost: 2,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Lethal Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speed Dragon",
                            cost: 1,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "+1 Range and x1.75 Damage; this will hurt",
                        iconBlook: "Fire Dragon",
                        data: {
                            finalUpgrade: 0,
                            title: "Fire Dragon",
                            cost: 4,
                            width: .7,
                            blook: "Fire Dragon",
                            range: 2.4,
                            dmgMult: 1.75,
                            onAim: function(e, t, a, s) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, a, s);
                                    for (var i = new We(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 40; o++) i.addParticle(this.angle);
                                    a.push(i)
                                }
                            }
                        }
                    }, {
                        desc: "Halve the firing rate, but blow back enemies that are hit by your breath",
                        iconBlook: "Wind Dragon",
                        data: {
                            finalUpgrade: 1,
                            title: "Wind Dragon",
                            cost: 4,
                            width: .7,
                            cdMult: 2,
                            blook: "Wind Dragon",
                            onAim: function(e, t, a, s) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, a, s);
                                    for (var i = new Qe(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) i.addParticle(this.angle);
                                    a.push(i)
                                }
                            },
                            attack: function(e, t, a, s) {
                                var i = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                                s.forEach((function(e) {
                                    X({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: i.pos.x,
                                        y: i.pos.y
                                    }, {
                                        x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                                        y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                                    }, {
                                        x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                                        y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    e.dealDamage(o), e.blowBack()
                                }))
                            }
                        }
                    }]
                ]
            }, Et.wizard = {
                drawLine: !0,
                lineColor: "#ffcd05",
                weight: 10,
                width: .6,
                blook: "Wizard",
                name: "wizard",
                title: "Spark Wizard",
                desc: "Shoots a spark that jumps from enemy to enemy while dealing damage.",
                fullCd: 90,
                cost: 5,
                range: 1.7,
                damage: 2,
                maxTargets: 7,
                weightDec: 1,
                onAim: function(e, t, a, s) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown();
                        var i = e,
                            o = [i],
                            n = this.weight;
                        for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(n), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), i.dealDamage(this.getDamage()); o.length < this.maxTargets && 0 !== s.filter((function(e) {
                                return !o.includes(e)
                            })).length;) {
                            var r = F(s, i.pos, o);
                            if (!r) break;
                            n -= this.weightDec, this.p5.strokeWeight(n);
                            var l = Object(E.q)(i.pos.x, r.pos.x),
                                c = Object(E.q)(i.pos.y, r.pos.y);
                            this.p5.line(i.pos.x, i.pos.y, l, c), this.p5.line(l, c, r.pos.x, r.pos.y), r.dealDamage(this.getDamage()), o.push(r), i = r
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2.5 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Advanced Wizard",
                            cost: 2,
                            dmgMult: 2.5
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quickcast Wizard",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Elder Wizard",
                            cost: 2,
                            dmgMult: 2,
                            lineColor: "#5a459c",
                            width: .65
                        }
                    }, {
                        desc: "x2 Max Zap Targets",
                        icon: "fas fa-bolt",
                        iconColor: "#5a459c",
                        data: {
                            title: "Crazy Wizard",
                            cost: 2,
                            maxTargetsMult: 2,
                            lineColor: "#5a459c",
                            width: .65,
                            weightDec: .6
                        }
                    }],
                    [{
                        desc: "Every attack, also cast a cursed, exploding orb",
                        iconBlook: "Witch",
                        data: {
                            finalUpgrade: 0,
                            title: "Evil Witch",
                            cost: 4,
                            blook: "Witch",
                            lineColor: "#3a3a3a",
                            onAim: function(e, t, a, s, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), i.push(new gt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5));
                                    var o = e,
                                        n = [o],
                                        r = this.weight;
                                    for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(r), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), o.dealDamage(this.getDamage()); n.length < this.maxTargets && 0 !== s.filter((function(e) {
                                            return !n.includes(e)
                                        })).length;) {
                                        var l = F(s, o.pos, n);
                                        if (!l) break;
                                        r -= this.weightDec, this.p5.strokeWeight(r);
                                        var c = Object(E.q)(o.pos.x, l.pos.x),
                                            h = Object(E.q)(o.pos.y, l.pos.y);
                                        this.p5.line(o.pos.x, o.pos.y, c, h), this.p5.line(c, h, l.pos.x, l.pos.y), l.dealDamage(this.getDamage()), n.push(l), o = l
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Harness the power of lightning to double your max zap targets",
                        iconBlook: "Lightning Wizard",
                        data: {
                            finalUpgrade: 1,
                            title: "God of Lightning",
                            cost: 4,
                            blook: "Lightning Wizard",
                            maxTargetsMult: 2,
                            weight: 12,
                            weightDec: .4,
                            lineColor: "#1affff"
                        }
                    }]
                ]
            }, Et.unicorn = {
                drawLine: !1,
                width: .6,
                blook: "Unicorn",
                name: "unicorn",
                title: "Rocket Unicorn",
                desc: "Fires an auto-tracking missile that explodes on contact.",
                fullCd: 90,
                cost: 6,
                range: 5,
                damage: 5,
                blastRadius: .7,
                onAim: function(e, t, a, s, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new xt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "+2 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Swift Unicorn",
                            cost: 1,
                            rangeAdd: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Majestic Unicorn",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Daring Unicorn",
                            cost: 3,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Kaboom Unicorn",
                            cost: 2,
                            blastMult: 1.5
                        }
                    }],
                    [{
                        desc: "Fires missiles that deal 15% of an enemy's current health as bonus damage (max 50)",
                        iconBlook: "Crazy Unicorn",
                        data: {
                            finalUpgrade: 0,
                            title: "Crazy Unicorn",
                            blook: "Crazy Unicorn",
                            width: .7,
                            cost: 7,
                            angle: 0,
                            onAim: function(e, t, a, s, i) {
                                this.canFire() && (this.resetCooldown(), i.push(new kt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            },
                            update: function(e) {
                                var t = e ? 2 : 1;
                                this.cd > 0 && (this.cd -= t), this.angle <= 2 * -Math.PI ? this.angle = -Math.PI / 34 : this.angle -= Math.PI / (34 / t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                            }
                        }
                    }, {
                        desc: "Fire tracking corn cobs that explode into tracking kernals",
                        iconBlook: "uni-CORN",
                        data: {
                            finalUpgrade: 1,
                            title: "uni-CORN",
                            blook: "uni-CORN",
                            width: .7,
                            cost: 4,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new St(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Et.penguin = {
                drawLine: !1,
                follow: !1,
                width: .5,
                blook: "Baby Penguin",
                name: "penguin",
                title: "Freeze Penguin",
                desc: "Occasionally freezes all enemies around himself.",
                fullCd: 110,
                freezeTime: 15,
                cost: 3,
                range: 1,
                damage: 0,
                target: function(e, t, a, s, i, o, n, r) {
                    var l = this;
                    if (this.canFire()) {
                        var c = this.visible(e, t);
                        if (0 !== c.length) {
                            this.resetCooldown();
                            for (var h = new Ze(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                            a.push(h), c.forEach((function(e) {
                                e.freeze(l.freezeTime), e.dealDamage(l.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "+1 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Icicle Penguin",
                            cost: 1,
                            damage: 1,
                            width: .55
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Blizzard Penguin",
                            cost: 2,
                            cdMult: .8,
                            width: .55
                        }
                    }],
                    [{
                        desc: "+2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Frosty Penguin",
                            dmgAdd: 2,
                            cost: 1
                        }
                    }, {
                        desc: "x1.5 Freeze Time",
                        icon: "far fa-snowflake",
                        iconColor: "#5c5c8a",
                        data: {
                            title: "Sub-Zero Penguin",
                            cost: 2,
                            freezeMult: 1.5
                        }
                    }],
                    [{
                        desc: "No more freezing, but greatly slow all enemies within range",
                        iconBlook: "Penguin",
                        data: {
                            finalUpgrade: 0,
                            title: "Emperor Penguin",
                            cost: 4,
                            blook: "Penguin",
                            width: .65,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.stroke(245, 245, 245, 100), this.p5.strokeWeight(3), this.p5.fill(250, 250, 250, 50);
                                var t = (this.range + .5) * e * 2;
                                this.p5.ellipse(0, 0, t, t), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                            },
                            target: function(e, t, a, s, i, o, n, r) {
                                var l = this,
                                    c = this.visible(e, t);
                                if (0 !== c.length) {
                                    var h = this.canFire();
                                    if (c.forEach((function(e) {
                                            e.slow(), h && e.dealDamage(l.getDamage())
                                        })), h) {
                                        this.resetCooldown();
                                        for (var u = new Ze(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 8; d++)
                                            for (var p = 0; p < 8; p++) u.addParticle(Math.PI / 4 * d);
                                        a.push(u)
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, execute an enemy (deal 150 damage)",
                        iconBlook: "Arctic Fox",
                        data: {
                            finalUpgrade: 1,
                            title: "Arctic Buddies",
                            cost: 4,
                            executeCd: 4,
                            width: .4,
                            follow: !0,
                            drawLine: !0,
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var a = this.width * e;
                                this.p5.image(t["Arctic Fox"], -.25 * e, -.25 * e, a, 1.15 * a), this.p5.image(t["Polar Bear"], .25 * e, -.25 * e, a, 1.15 * a), this.p5.image(t["Arctic Hare"], -.25 * e, .25 * e, a, 1.15 * a), this.p5.image(t.Seal, .25 * e, .25 * e, a, 1.15 * a), this.p5.pop()
                            },
                            target: function(e, t, a, s, i, o) {
                                var n = this.visible(e, t);
                                if (0 !== n.length) {
                                    var r = Y(n, s, i, this.p5, t);
                                    r && this.onAim(r, t, a, n, o)
                                }
                            },
                            onAim: function(e, t, a, s) {
                                var i = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.executeCd <= 0 ? (this.p5.push(), this.p5.stroke("#7ca1d5"), this.p5.strokeWeight(10), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop(), e.dealDamage(150), this.executeCd = 4) : this.executeCd -= 1;
                                    for (var o = new Ze(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 8; n++)
                                        for (var r = 0; r < 8; r++) o.addParticle(Math.PI / 4 * n);
                                    a.push(o), s.forEach((function(e) {
                                        e.freeze(i.freezeTime), e.dealDamage(i.getDamage())
                                    }))
                                }
                            }
                        }
                    }]
                ]
            }, Et.king = {
                drawLine: !1,
                width: .6,
                blook: "King",
                name: "king",
                title: "The King",
                desc: "Throws damaging swords at an alarmingly fast pace.",
                fullCd: 6,
                cost: 12,
                range: 2,
                damage: 1,
                onAim: function(e, t, a, s, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Noble King",
                            cost: 7,
                            cdMult: 2 / 3
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise King",
                            cost: 2,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty King",
                            cost: 7,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Great King",
                            cost: 2,
                            rangeAdd: 1,
                            width: .65
                        }
                    }],
                    [{
                        desc: "Shoot hearts that explode and deal damage in an area",
                        iconBlook: "King of Hearts",
                        data: {
                            finalUpgrade: 0,
                            title: "King of Hearts",
                            blook: "King of Hearts",
                            cost: 7,
                            width: .75,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ft(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }, {
                        desc: "Throws haunted swords that deal double the damage",
                        iconBlook: "Phantom King",
                        data: {
                            finalUpgrade: 1,
                            title: "Phantom King",
                            blook: "Phantom King",
                            cost: 7,
                            width: .75,
                            dmgMult: 2,
                            onAim: function(e, t, a, s, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new pt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }]
                ]
            }, Et.jester = {
                drawLine: !1,
                width: .6,
                blook: "Jester",
                name: "jester",
                title: "Helpful Jester",
                desc: "Every 10 seconds gives nearby towers bonus buffs (+50% damage to start).",
                fullCd: 300,
                cost: 4,
                range: 2,
                damage: 0,
                damageBuff: 1.5,
                speedBuff: 1,
                target: function(e, t, a, s, i, o, n, r, l) {
                    var c = this;
                    if (this.canFire()) {
                        var h = this.visible(l, t).filter((function(e) {
                            return e !== c
                        }));
                        this.resetCooldown();
                        for (var u = new Fe(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                        a.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                            return e.buff({
                                damageBuff: c.damageBuff,
                                speedBuff: c.speedBuff
                            })
                        }))
                    }
                },
                update: function(e) {
                    var t = e ? 2 : 1;
                    this.cd > 0 && (this.cd -= t), this.angle < 0 && (this.angle += Math.PI / (20 / t))
                },
                upgrades: [
                    [{
                        desc: "x2 Firing Rate to Buffed Towers",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Charming Jester",
                            cost: 2,
                            speedBuff: .5
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Friendly Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "From x1.5 to x2 Damage to Buffed Towers",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "General Jester",
                            cost: 2,
                            damageBuff: 1.75
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Good Guy Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "Multiply your attack speed and damage buffs by 1.5",
                        iconBlook: "Mad Hatter",
                        data: {
                            finalUpgrade: 0,
                            title: "Mad Hatter",
                            blook: "Mad Hatter",
                            width: .7,
                            cost: 4,
                            dmgBuffMult: 1.5,
                            speedBuffMult: 2 / 3,
                            target: function(e, t, a, s, i, o, n, r, l) {
                                var c = this;
                                if (this.canFire()) {
                                    var h = this.visible(l, t).filter((function(e) {
                                        return e !== c
                                    }));
                                    this.resetCooldown();
                                    for (var u = new Xe(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                                    a.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                                        return e.buff({
                                            damageBuff: c.damageBuff,
                                            speedBuff: c.speedBuff
                                        })
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Decrease your size and halve your cooldown",
                        iconBlook: "Jester",
                        data: {
                            finalUpgrade: 1,
                            title: "Mini Jester",
                            width: .3,
                            cost: 4,
                            cdMult: .5
                        }
                    }]
                ]
            };
            var Ot = Et;

            function Tt(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            var Rt = function() {
                    function e(t, a, s, i, o, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.p5 = s, this.images = n, this.lineColor = "#ffcd05", this.drawLine = !0, this.follow = !0, this.width = .65, this.img = n.Chick, this.weight = 5, this.blook = "", this.alive = !0, this.name = o, this.sound = null, this.title = "", this.desc = "", this.level = -1, this.finalUpgrade = -1, this.angle = 0, this.gridPos = this.p5.createVector(t, a), this.pos = this.p5.createVector(t * i + i / 2, a * i + i / 2), this.fullCd = 60, this.cd = 0, this.cost = 0, this.damage = 5, this.range = 3, this.blastRadius = .55, this.totalCost = 0, this.upgrades = [], this.upIndexes = [], this.buffTime = 0, this.buffs = {}, this.onCreate(), this.upgrade(Ot[o], -1)
                    }
                    var t, a, s;
                    return t = e, (a = [{
                        key: "aim",
                        value: function(e, t) {
                            this.angle = Math.atan2(t - this.pos.y, e - this.pos.x) - Math.PI / 2
                        }
                    }, {
                        key: "attack",
                        value: function(e, t, a, s) {
                            e.dealDamage(this.getDamage()), this.onHit(e, t, a, s)
                        }
                    }, {
                        key: "canFire",
                        value: function() {
                            return this.cd <= 0
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                        }
                    }, {
                        key: "getDamage",
                        value: function() {
                            return Math.round(this.damage * (this.buffs.damageBuff || 1))
                        }
                    }, {
                        key: "getCooldown",
                        value: function() {
                            return Math.round(this.fullCd * (this.buffs.speedBuff || 1))
                        }
                    }, {
                        key: "getSellPrice",
                        value: function() {
                            return Math.round(.8 * this.totalCost)
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "onAim",
                        value: function(e, t, a, s) {
                            (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, a, s), this.drawLine && (this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            this.cd = 0
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, a, s) {}
                    }, {
                        key: "resetCooldown",
                        value: function() {
                            this.cd = this.getCooldown()
                        }
                    }, {
                        key: "target",
                        value: function(e, t, a, s, i, o) {
                            var n = this.visible(e, t);
                            if (0 !== n.length) {
                                var r = Y(n, s, i, this.p5, t);
                                r && this.onAim(r, t, a, e, o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            var t = e ? 2 : 1;
                            this.cd > 0 && (this.cd -= t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                        }
                    }, {
                        key: "upgrade",
                        value: function(e, t) {
                            var a = this; - 1 !== t && this.upIndexes.push(t);
                            var s = void 0 === e ? {} : e;
                            Object.keys(s).forEach((function(t) {
                                "blook" === t && (a.img = a.images[e.blook], a.blook = e.blook), "img" === t ? a.img = a.images[e.img] : "cdMult" === t ? a.fullCd = Math.floor(a.fullCd * e.cdMult) : "dmgMult" === t ? a.damage = Math.round(a.damage * e.dmgMult) : "dmgAdd" === t ? a.damage += e.dmgAdd : "rangeAdd" === t ? a.range += e.rangeAdd : "blastMult" === t ? a.blastRadius = a.blastRadius * e.blastMult : "freezeMult" === t ? a.freezeTime = Math.round(a.freezeTime * e.freezeMult) : "maxTargetsMult" === t ? a.maxTargets = Math.round(a.maxTargets * e.maxTargetsMult) : "dmgBuffMult" === t ? a.damageBuff = a.damageBuff * e.dmgBuffMult : "speedBuffMult" === t ? a.speedBuff = a.speedBuff * e.speedBuffMult : ["onHit", "draw", "onAim", "attack", "target", "update"].includes(t) ? a[t] = e[t].bind(a) : a[t] = e[t]
                            })), e.cost && (this.totalCost += e.cost), this.level += 1
                        }
                    }, {
                        key: "visible",
                        value: function(e, t) {
                            return V(this.pos.x, this.pos.y, this.range, e, t)
                        }
                    }, {
                        key: "buff",
                        value: function(e) {
                            "jester" !== this.name && (this.buffTime = 50, this.buffs = e)
                        }
                    }, {
                        key: "move",
                        value: function(e, t, a) {
                            this.gridPos = this.p5.createVector(e, t), this.pos = this.p5.createVector(e * a + a / 2, t * a + a / 2)
                        }
                    }]) && Tt(t.prototype, a), s && Tt(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                Nt = a("2g0G"),
                jt = [
                    [{
                        wait: 0,
                        cd: 65,
                        enemies: {
                            types: [1],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 30,
                        enemies: {
                            types: [1, 2],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 15,
                        enemies: {
                            types: [1, 2, 3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [1, 2, 2, 4],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1],
                            count: 53
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [8],
                            count: 8
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [2, 2, 4, 8],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [1, 2, 4, 2, 5, 2, 9],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 16,
                        enemies: {
                            types: [1, 2, 2, 8, 3, 3, 4, 10],
                            count: 5
                        }
                    }],
                    [{
                        wait: 40,
                        cd: 18,
                        enemies: {
                            types: [2, 3, 6, 2, 7, 6, 4, 15],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [60],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 10, 12],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [15, 16, 12, 20],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [20, 10, 15, 30],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 20, 20, 30],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [20, 20, 10, 20, 20, 75],
                            count: 4
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [30, 45, 25, 50],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [45, 30, 35, 30, 65],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [25],
                            count: 35
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [60, 40, 55, 80],
                            count: 5
                        }
                    }],
                    [{
                        wait: 80,
                        cd: 7,
                        enemies: {
                            types: [20, 30, 40, 50, 60, 70],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 7,
                        enemies: {
                            types: [375],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 80, 70, 120],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [80, 90, 100, 140],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 90, 100, 110, 150],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [100, 60, 75, 90, 90, 65, 60, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [235],
                            count: 15
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 8,
                        enemies: {
                            types: [120, 130, 150],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [100, 120, 130, 120, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [120, 80, 80, 100, 120, 100, 80, 180, 200],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [120, 80, 100, 110, 140, 170, 220],
                            count: 5
                        }
                    }],
                    [{
                        wait: 60,
                        cd: 6,
                        enemies: {
                            types: [200, 100, 120, 130, 150, 100],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1700],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 150, 350],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 250, 350, 250, 200, 250],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 300, 400],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [350, 300, 450, 350, 350, 400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [800],
                            count: 12
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 500, 400, 500, 600, 400, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [700, 900, 800, 600, 600, 800, 1e3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 700, 800, 900, 1e3, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 800, 900, 900, 800, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 90,
                        cd: 4,
                        enemies: {
                            types: [1200, 1100, 1e3, 900, 800],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [4200],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1400, 1100, 900, 1100, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 1200, 1400, 1600, 1e3, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1200, 1500, 1200, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1800, 1e3, 1500, 1800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1850],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2e3],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2400],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2600],
                            count: 30
                        }
                    }],
                    [{
                        wait: 180,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }, {
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [13e3],
                            count: 1
                        }
                    }]
                ],
                It = a("qnYv");

            function Mt(e) {
                return (Mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Bt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (a = a.call(e); !(n = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Pt(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Pt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Pt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function zt() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                zt = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    i = s.iterator || "@@iterator",
                    o = s.asyncIterator || "@@asyncIterator",
                    n = s.toStringTag || "@@toStringTag";

                function r(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function l(e, t, a, s) {
                    var i = t && t.prototype instanceof u ? t : u,
                        o = Object.create(i.prototype),
                        n = new k(s || []);
                    return o._invoke = function(e, t, a) {
                        var s = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (a.method = i, a.arg = o;;) {
                                var n = a.delegate;
                                if (n) {
                                    var r = w(n, a);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === s) throw s = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                s = "executing";
                                var l = c(e, t, a);
                                if ("normal" === l.type) {
                                    if (s = a.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                            }
                        }
                    }(e, a, n), o
                }

                function c(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && a.call(g, i) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(i, o) {
                        function n() {
                            return new t((function(s, n) {
                                ! function s(i, o, n, r) {
                                    var l = c(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == Mt(u) && a.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, n, r)
                                        }), (function(e) {
                                            s("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return s("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(i, o, s, n)
                            }))
                        }
                        return s = s ? s.then(n, n) : n()
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var i = s.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function C(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                o = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(v.prototype), r(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, s, i, o) {
                    void 0 === o && (o = Promise);
                    var n = new v(l(t, a, s, i), o);
                    return e.isGeneratorFunction(a) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, _(y), r(y, n, "Generator"), r(y, i, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return a.value = s, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function s(a, s) {
                            return n.type = "throw", n.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                n = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var r = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var i = this.tryEntries[s];
                            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var i = s.arg;
                                    x(a)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function Dt(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function Lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dt(Object(a), !0).forEach((function(t) {
                        qt(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Dt(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function qt(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function Ft(e, t, a, s, i, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void a(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(s, i)
            }

            function At(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(s, i) {
                        var o = e.apply(t, a);

                        function n(e) {
                            Ft(o, s, i, n, r, "next", e)
                        }

                        function r(e) {
                            Ft(o, s, i, n, r, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function Ut(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function Ht(e, t) {
                return (Ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Gt(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, s = Vt(e);
                    if (t) {
                        var i = Vt(this).constructor;
                        a = Reflect.construct(s, arguments, i)
                    } else a = s.apply(this, arguments);
                    return Wt(this, a)
                }
            }

            function Wt(e, t) {
                if (t && ("object" === Mt(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Qt(e)
            }

            function Qt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Vt(e) {
                return (Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Yt = {
                    Blue: "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
                    Black: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
                    Green: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
                    Lime: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
                    Orange: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
                    Pink: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
                    Purple: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
                    Red: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
                    Snowflake: "https://media.blooket.com/image/upload/v1593095360/Media/defense/snowflake.svg",
                    "Slime Monster": "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
                    "Red Slime Monster": "https://media.blooket.com/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
                    "Dark Slime Monster": "https://media.blooket.com/image/upload/v1591840817/Blooks/darkSlimeMonster.svg",
                    "Light Slime Monster": "https://media.blooket.com/image/upload/v1591896075/Blooks/lightSlimeMonster.svg"
                },
                Kt = {
                    BronzeTile: "https://media.blooket.com/image/upload/v1593095363/Media/defense/bronzeTile.svg",
                    SilverTile: "https://media.blooket.com/image/upload/v1593095359/Media/defense/silverTile.svg",
                    GoldTile: "https://media.blooket.com/image/upload/v1593095356/Media/defense/goldTile.svg"
                },
                Jt = {
                    Chick: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                    Chicken: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
                    Owl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
                    Pig: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
                    "Agent Owl": "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
                    Parrot: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
                    Cockatoo: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
                    Macaw: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
                    "Party Pig": "https://media.blooket.com/image/upload/v1590862509/Blooks/partyPig.svg",
                    Goldfish: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
                    "Red Goldfish": "https://media.blooket.com/image/upload/v1591019780/Blooks/redGoldfish.svg",
                    Squirrel: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
                    "Nuts Squirrel": "https://media.blooket.com/image/upload/v1591027039/Blooks/nutsSquirrel.svg",
                    Elf: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
                    "Master Elf": "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                    "Enchanted Elf": "https://media.blooket.com/image/upload/v1591048522/Blooks/enchantedElf.svg",
                    "Baby Penguin": "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
                    Penguin: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
                    "Polar Bear": "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
                    "Arctic Fox": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
                    "Arctic Hare": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
                    Seal: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
                    Dragon: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
                    "Fire Dragon": "https://media.blooket.com/image/upload/v1591214955/Blooks/fireDragon.svg",
                    "Wind Dragon": "https://media.blooket.com/image/upload/v1591215793/Blooks/windDragon.svg",
                    Wizard: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
                    Witch: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
                    "Lightning Wizard": "https://media.blooket.com/image/upload/v1591282332/Blooks/lightningWizard.svg",
                    King: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
                    "Phantom King": "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                    "King of Hearts": "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
                    Unicorn: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
                    "Crazy Unicorn": "https://media.blooket.com/image/upload/v1591381159/Blooks/crazyUnicorn.svg",
                    "uni-CORN": "https://media.blooket.com/image/upload/v1591365760/Blooks/uni-CORN.svg",
                    Jester: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
                    "Mad Hatter": "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
                    Duck: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg"
                },
                Xt = {
                    Egg: "https://media.blooket.com/image/upload/v1593095354/Media/defense/egg.svg",
                    PigBomb: "https://media.blooket.com/image/upload/v1593095358/Media/defense/pigBomb.svg",
                    DiscoBall: "https://media.blooket.com/image/upload/v1593095364/Media/defense/discoBall.svg",
                    Fish: "https://media.blooket.com/image/upload/v1593095356/Media/defense/fish.svg",
                    Nut: "https://media.blooket.com/image/upload/v1593095356/Media/defense/nut.svg",
                    Arrow: "https://media.blooket.com/image/upload/v1593095361/Media/defense/arrow.svg",
                    MasterArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/masterArrow.svg",
                    EnchantedArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/enchantedArrow.svg",
                    WitchOrb: "https://media.blooket.com/image/upload/v1593095361/Media/defense/witchOrb.svg",
                    Sword: "https://media.blooket.com/image/upload/v1593095361/Media/defense/sword.svg",
                    PhantomSword: "https://media.blooket.com/image/upload/v1593095358/Media/defense/phantomSword.svg",
                    Heart: "https://media.blooket.com/image/upload/v1593095354/Media/defense/heart.svg",
                    Missile: "https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg",
                    BigMissile: "https://media.blooket.com/image/upload/v1593095361/Media/defense/bigMissile.svg",
                    Corn: "https://media.blooket.com/image/upload/v1593095363/Media/defense/corn.svg",
                    CornKernel: "https://media.blooket.com/image/upload/v1593095364/Media/defense/cornKernel.svg"
                },
                Zt = function(e) {
                    for (var t = [], a = 0; a < e.length; a++)
                        for (var s = 0; s < e[a].length; s++) 0 === e[a][s] && t.push({
                            x: s,
                            y: a
                        });
                    return t
                },
                $t = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && Ht(e, t)
                    }(l, e);
                    var t, a, s, o, n, r = Gt(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            towerSelected: {},
                            health: 100,
                            round: 1,
                            tokens: 0,
                            buyTowerName: "",
                            buyTower: {},
                            roundGoing: !0,
                            paused: !1,
                            phase: "tower",
                            question: {},
                            correct: !1,
                            roundCompleted: !1,
                            showShop: !1,
                            isSmall: !1,
                            askTour: !1,
                            showTour: !1,
                            hwGoal: 0,
                            goalCompleted: !1,
                            doubleSpeed: !1,
                            totalDmg: 0,
                            isLive: !1,
                            chanceDesc: "",
                            chanceColor: "",
                            readId: ""
                        }, t.p5 = {}, t.canvasParentRef = {}, t.bgImage = null, t.tiles = [], t.tileSize = 24, t.enemies = [], t.futureEnemies = [], t.waves = [], t.spawnCd = 0, t.waveCd = 0, t.waitingOnWave = !1, t.ticksUntilSpawn = 0, t.ticksUntilWave = 0, t.lastSpawnIndex = 0, t.walkMap = [], t.paths = [], t.backPaths = [], t.dists = [], t.towers = [], t.numRows = 0, t.numColumns = 0, t.spawnpoints = [], t.exit = {}, t.map = {}, t.enemyImages = {}, t.tileImages = {}, t.towerImages = {}, t.projectileImages = {}, t.particleSystems = [], t.projectiles = [], t.questions = [], t.freeQuestions = [], t.corrects = e.defense ? JSON.parse(JSON.stringify(e.defense.corrects)) : {}, t.incorrects = e.defense ? JSON.parse(JSON.stringify(e.defense.incorrects)) : {}, t.questionResults = [], t.here = !0, t.waiting = !1, t.roundGoing = !1, t.gameOver = !1, t.paused = !1, t.dmg = e.defense && e.defense.dmg ? e.defense.dmg : 0, t.notified = !1, t.dbRefStage = {}, t.dbRefEvent = {}, t.msg = {}, t.isReading = !1, t.oldPhase = "", t.questionFrenzy = !1, t.noQuestionFrenzy = !1, t.bonusQuestion = !1, t.freezeCounter = 0, t.isFreeze = !1, t.ducks = [], t.kingReq = !1, t.kingResponses = [], t.doubleDamage = !1, t.spawnFish = !1, t.finalBoss = !1, t.tourRef = i.a.createRef(), t.onAnswer = t.onAnswer.bind(Qt(t)), t.getWalkMap = t.getWalkMap.bind(Qt(t)), t.getTower = t.getTower.bind(Qt(t)), t.getQuestion = t.getQuestion.bind(Qt(t)), t.setup = t.setup.bind(Qt(t)), t.preload = t.preload.bind(Qt(t)), t.draw = t.draw.bind(Qt(t)), t.mouseClicked = t.mouseClicked.bind(Qt(t)), t.answerTour = t.answerTour.bind(Qt(t)), t.answerNext = t.answerNext.bind(Qt(t)), t.updateDmg = t.updateDmg.bind(Qt(t)), t.resizeFit = t.resizeFit.bind(Qt(t)), t.recalculate = t.recalculate.bind(Qt(t)), t.walkable = t.walkable.bind(Qt(t)), t.outsideMap = t.outsideMap.bind(Qt(t)), t.resetGame = t.resetGame.bind(Qt(t)), t.showRange = t.showRange.bind(Qt(t)), t.buyTower = t.buyTower.bind(Qt(t)), t.nextRound = t.nextRound.bind(Qt(t)), t.nextWave = t.nextWave.bind(Qt(t)), t.sellTower = t.sellTower.bind(Qt(t)), t.upgradeTower = t.upgradeTower.bind(Qt(t)), t.chooseChance = t.chooseChance.bind(Qt(t)), t.endNow = t.endNow.bind(Qt(t)), t.readQuestion = t.readQuestion.bind(Qt(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (n = At(zt().mark((function e() {
                            var t = this;
                            return zt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "defense" === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0]) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/play"));
                                    case 6:
                                        Object(E.c)(), this.startTimeout = setTimeout((function() {
                                            t.questions = t.props.defense.questions, t.setState({
                                                ready: !0,
                                                roundCompleted: 1 !== t.props.defense.round,
                                                roundGoing: 1 === t.props.defense.round,
                                                askTour: 1 === t.props.defense.round,
                                                hwGoal: 1 === t.props.defense.round && t.props.defense.hwGoal ? parseInt(t.props.defense.hwGoal, 10) : 0,
                                                isSmall: window.innerWidth <= 800,
                                                health: t.props.defense.health,
                                                round: t.props.defense.round,
                                                tokens: t.props.defense.tokens,
                                                isLive: t.props.defense.isLive,
                                                doubleSpeed: t.props.defense.isLive
                                            }, At(zt().mark((function e() {
                                                var a;
                                                return zt().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t.state.isLive) {
                                                                e.next = 11;
                                                                break
                                                            }
                                                            return a = 0, t.dmgInterval = setInterval((function() {
                                                                t.setState({
                                                                    totalDmg: t.dmg
                                                                }), t.notified ? t.notified = !1 : (a += 1) >= 5 && (a = 0, t.props.firebase.setVal({
                                                                    id: t.props.client.hostId,
                                                                    path: "c/".concat(t.props.client.name),
                                                                    val: {
                                                                        b: t.props.client.blook,
                                                                        d: t.dmg
                                                                    }
                                                                }))
                                                            }), 1e3), e.next = 5, t.props.firebase.getDatabaseRef(t.props.client.hostId, "stg");
                                                        case 5:
                                                            return t.dbRefStage = e.sent, t.dbRefStage.on("value", (function(e) {
                                                                switch (e.val()) {
                                                                    case "fin":
                                                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                                            var a = e ? e.map((function(e) {
                                                                                return {
                                                                                    name: e.n,
                                                                                    blook: e.b,
                                                                                    dmg: e.d,
                                                                                    place: e.p
                                                                                }
                                                                            })).filter((function(e) {
                                                                                return e.dmg || 0 === e.dmg
                                                                            })) : [];
                                                                            t.props.setDefense(Lt(Lt({}, t.props.defense), {}, {
                                                                                corrects: t.corrects,
                                                                                incorrects: t.incorrects,
                                                                                dmg: t.dmg,
                                                                                round: t.state.round,
                                                                                stage: "final"
                                                                            })), t.props.setStanding(a), t.props.history.push("/defense/final")
                                                                        }));
                                                                        break;
                                                                    case null:
                                                                        t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                                            e || (t.props.deleteClient(), t.props.setDefense(null), t.props.history.push("/play"))
                                                                        }))
                                                                }
                                                            })), e.next = 9, t.props.firebase.getDatabaseRef(t.props.client.hostId, "ev");
                                                        case 9:
                                                            t.dbRefEvent = e.sent, t.dbRefEvent.on("value", (function(e) {
                                                                if (e.val() && !t.state.showTour && !t.state.askTour) {
                                                                    t.oldPhase = t.state.phase;
                                                                    var a = R.b[e.val()],
                                                                        s = R.a[a];
                                                                    if (t.setState({
                                                                            eventName: a,
                                                                            event: s,
                                                                            buyTowerName: "",
                                                                            buyTower: {}
                                                                        }, (function() {
                                                                            "Chance" !== a && (t.eventTimeout = setTimeout((function() {
                                                                                t.setState({
                                                                                    event: {},
                                                                                    eventName: ""
                                                                                })
                                                                            }), 6e3))
                                                                        })), "Question Frenzy" === a) t.questionFrenzy = !0, t.getQuestion(), t.questionFrenzyTimeout = setTimeout((function() {
                                                                        t.noQuestionFrenzy = !0
                                                                    }), 22e3);
                                                                    else if ("Earthquake" === a) {
                                                                        for (var i = Zt(t.map.tiles), o = 0; o < t.tiles.length; o++)
                                                                            for (var n = 0; n < t.tiles[o].length; n++) 3 === t.tiles[o][n] && (t.tiles[o][n] = 0);
                                                                        t.towers.forEach((function(e) {
                                                                            var a = Object(E.p)(i);
                                                                            i.splice(i.indexOf(a), 1), e.move(a.x, a.y, t.tileSize), t.tiles[a.y][a.x] = 3
                                                                        }))
                                                                    } else if ("Tax Time" === a) t.setState({
                                                                        tokens: Math.ceil(t.state.tokens / 2)
                                                                    });
                                                                    else if ("Alien Invasion" === a) {
                                                                        var r = Object(E.p)(t.towers),
                                                                            l = t.towers.indexOf(r);
                                                                        t.tiles[r.gridPos.y][r.gridPos.x] = 0, t.towers.splice(l, 1)
                                                                    } else if ("A Little Help" === a) {
                                                                        var c = Zt(t.tiles);
                                                                        if (0 === c.length) return;
                                                                        var h = Object(E.p)(c),
                                                                            u = Object(E.p)(Object.keys(Ot)),
                                                                            d = new Rt(h.x, h.y, t.p5, t.tileSize, u, t.towerImages);
                                                                        t.towers.push(d), d.fullCd > 100 && (t.towers[t.towers.length - 1].fullCd += t.towers.filter((function(e) {
                                                                            return e.fullCd > 100
                                                                        })).length - 1), t.tiles[h.y][h.x] = 3
                                                                    } else if ("Bonus Question" === a) t.bonusQuestion = !0, t.getQuestion();
                                                                    else if ("Chance" === a) t.setState({
                                                                        chanceDesc: s.desc,
                                                                        chanceColor: ""
                                                                    });
                                                                    else if ("Freeze" === a) t.freezeCounter = 3, t.isFreeze = !0, t.getQuestion();
                                                                    else if ("Annoying Ducks" === a)
                                                                        for (var p = Zt(t.tiles), f = 0; f < Math.min(3, p.length); f++) {
                                                                            var m = Object(E.p)(p);
                                                                            p.splice(p.indexOf(m), 1), t.ducks.push(m), t.tiles[m.y][m.x] = 2
                                                                        } else if ("King's Request" === a) t.kingReq = !0, t.kingResponses = [], t.getQuestion();
                                                                        else if ("Boom" === a) {
                                                                        var g = 0;
                                                                        t.enemies.forEach((function(e) {
                                                                            g += e.health
                                                                        })), t.enemies = [], t.futureEnemies.forEach((function(e) {
                                                                            g += e
                                                                        })), t.futureEnemies = [], t.dmg += g, t.setState({
                                                                            totalDmg: t.dmg
                                                                        }), t.waves = []
                                                                    } else "Double Damage" === a ? (t.doubleDamage = !0, t.doubleDamageTimeout = setTimeout((function() {
                                                                        t.doubleDamage = !1
                                                                    }), 25e3)) : "Difficulty Increase" === a ? t.setState({
                                                                        round: t.state.round + 3
                                                                    }) : "Reinforcements" === a ? t.spawnFish = !0 : "Final Boss" === a && (t.finalBoss = !0)
                                                                }
                                                            }));
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))))
                                        }), 1e3), window.onfocus = function() {
                                            t.paused = !1
                                        }, window.onblur = function() {
                                            t.paused = !0
                                        };
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(E.u)(), clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.endTimeout), clearTimeout(this.gameOverTimeout), clearTimeout(this.eventTimeout), clearTimeout(this.questionFrenzyTimeout), clearTimeout(this.doubleDamageTimeout), clearInterval(this.dmgInterval), clearInterval(this.fishInterval), this.here = !1, window.onfocus = function() {}, window.onblur = function() {}, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefEvent).length && this.dbRefEvent.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    a = this.state.question.number;
                                t ? this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1 : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.setState({
                                    correct: t,
                                    phase: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "getWalkMap",
                        value: function() {
                            for (var e = [], t = 0; t < this.numRows; t++) {
                                e[t] = [];
                                for (var a = 0; a < this.numColumns; a++) e[t][a] = this.walkable(a, t)
                            }
                            return e
                        }
                    }, {
                        key: "getTower",
                        value: function(e, t) {
                            for (var a = 0; a < this.towers.length; a++) {
                                var s = this.towers[a];
                                if (s.gridPos.x === e && s.gridPos.y === t) return s
                            }
                            return null
                        }
                    }, {
                        key: "getQuestion",
                        value: function() {
                            var e = this;
                            if (this.here && "question" !== this.state.phase) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(E.p)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(E.w)(t.answers)), this.setState({
                                    question: t,
                                    roundCompleted: this.state.roundCompleted && (this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq),
                                    phase: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "setup",
                        value: function(e, t) {
                            this.p5 = e, this.canvasParentRef = t, this.canvasParentRef.className = y.a.sketchHolder;
                            var a = e.createCanvas(t.offsetWidth, t.offsetHeight);
                            a.canvas.className = y.a.sketchCanvas, a.parent(t), this.p5.frameRate(30), this.resetGame()
                        }
                    }, {
                        key: "preload",
                        value: function(e) {
                            var t = this;
                            Object.entries(Yt).forEach((function(a) {
                                var s = Bt(a, 2),
                                    i = s[0],
                                    o = s[1];
                                t.enemyImages[i] = e.loadImage(Object(E.g)(o))
                            })), Object.entries(Kt).forEach((function(a) {
                                var s = Bt(a, 2),
                                    i = s[0],
                                    o = s[1];
                                t.tileImages[i] = e.loadImage(Object(E.g)(o))
                            })), Object.entries(Xt).forEach((function(a) {
                                var s = Bt(a, 2),
                                    i = s[0],
                                    o = s[1];
                                t.projectileImages[i] = e.loadImage(Object(E.g)(o))
                            })), Object.entries(Jt).forEach((function(a) {
                                var s = Bt(a, 2),
                                    i = s[0],
                                    o = s[1];
                                t.towerImages[i] = e.loadImage(Object(E.g)(o))
                            })), this.bgImage = e.loadImage(Nt.a[this.props.defense.map].img)
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            var t = this;
                            if (!this.paused) {
                                if (e.imageMode(this.p5.CORNER), e.background(this.bgImage), this.tiles.forEach((function(a, s) {
                                        a.forEach((function(a, i) {
                                            if (3 === a) {
                                                var o = t.getTower(i, s);
                                                o && o.level > 0 && (1 === o.level ? t.p5.image(t.tileImages.BronzeTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize) : 2 === o.level ? t.p5.image(t.tileImages.SilverTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize) : 3 === o.level && t.p5.image(t.tileImages.GoldTile, i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize))
                                            }
                                            e.stroke("#3a3a3a33"), e.noFill(), e.strokeWeight(2), e.rect(i * t.tileSize, s * t.tileSize, t.tileSize, t.tileSize)
                                        }))
                                    })), this.ducks.forEach((function(e) {
                                        t.p5.push(), t.p5.imageMode(t.p5.CENTER), t.p5.image(t.towerImages.Duck, e.x * t.tileSize + t.tileSize / 2, e.y * t.tileSize + t.tileSize / 2, .65 * t.tileSize, .65 * t.tileSize * 1.15), t.p5.pop()
                                    })), !this.state.paused && this.roundGoing && (this.ticksUntilSpawn > 0 && (this.ticksUntilSpawn -= this.state.doubleSpeed ? 2 : 1), this.ticksUntilWave > 0 && (this.ticksUntilWave -= this.state.doubleSpeed ? 2 : 1)), this.futureEnemies.length > 0 && this.ticksUntilSpawn <= 0) {
                                    var a = this.futureEnemies.shift(),
                                        s = this.lastSpawnIndex + 1 >= this.spawnpoints.length ? 0 : this.lastSpawnIndex + 1,
                                        i = this.spawnpoints[s];
                                    this.enemies.push(new $(i.x, i.y, e, this.tileSize, this.enemyImages, a, this.updateDmg)), this.ticksUntilSpawn = this.spawnCd
                                }
                                for (var o = this.enemies.length - 1; o >= 0; o--) {
                                    var n = this.enemies[o];
                                    !this.state.paused && this.roundGoing && (n.steer(this.tileSize, this.numColumns, this.numRows, this.paths, this.exit), n.update(this.tileSize, this.state.doubleSpeed)), this.outsideMap(n) && n.kill(), !this.state.paused && G(n.pos.x, n.pos.y, this.exit.x, this.exit.y, this.tileSize, this.p5) && (this.state.isLive && (this.dmg = Math.max(this.dmg - n.health, 0)), this.setState({
                                        health: Math.max(this.state.health - n.health, 0)
                                    }, (function() {
                                        0 !== t.state.health || t.state.isLive || (t.gameOver = !0, t.setState({
                                            gameOver: !0
                                        }, (function() {
                                            t.gameOverTimeout = setTimeout((function() {
                                                t.props.setDefense(Lt(Lt({}, t.props.defense), {}, {
                                                    corrects: t.corrects,
                                                    incorrects: t.incorrects,
                                                    towers: t.towers.map((function(e) {
                                                        return {
                                                            name: e.name,
                                                            upIndexes: e.upIndexes,
                                                            col: e.gridPos.x,
                                                            row: e.gridPos.y
                                                        }
                                                    })),
                                                    health: 0,
                                                    dmg: t.dmg,
                                                    round: t.state.round,
                                                    tokens: t.state.tokens,
                                                    stage: "final"
                                                })), t.props.history.push("/defense/final")
                                            }), 5e3)
                                        })))
                                    })), n.kill()), n.isDead() ? this.enemies.splice(o, 1) : n.draw(this.tileSize)
                                }
                                this.state.towerSelected.range && this.showRange(this.state.towerSelected);
                                for (var r = this.towers.length - 1; r >= 0; r--) {
                                    var l = this.towers[r];
                                    this.doubleDamage && l.buff({
                                        damageBuff: 2
                                    }), this.state.paused || (this.roundGoing && l.target(this.enemies, this.tileSize, this.particleSystems, this.dists, this.paths, this.projectiles, this.backPaths, this.exit, this.towers), l.update(this.state.doubleSpeed)), this.outsideMap(l) && l.kill(), l.isDead() ? this.towers.splice(r, 1) : l.draw(this.tileSize, this.towerImages)
                                }
                                for (var c = this.particleSystems.length - 1; c >= 0; c--) {
                                    var h = this.particleSystems[c];
                                    this.state.paused || h.run(this.state.doubleSpeed, this.state.round >= 50, this.state.round >= 200), h.isDead() && this.particleSystems.splice(c, 1)
                                }
                                for (var u = this.projectiles.length - 1; u >= 0; u--) {
                                    var d = this.projectiles[u];
                                    this.state.paused || d.update(this.tileSize, this.state.doubleSpeed, this.enemies, this.dists, this.paths, this.spawnpoints[0]), d.reachedTarget(this.tileSize, this.enemies) && d.onHit(this.enemies, this.tileSize, this.particleSystems, this.projectiles, this.dists, this.paths), this.outsideMap(d) && d.kill(), d.draw(this.tileSize, this.projectileImages), d.isDead() && this.projectiles.splice(u, 1)
                                }
                                var p = K(this.p5.mouseX, this.p5.mouseY, this.numColumns, this.numRows, this.tileSize);
                                if (p) {
                                    var f = P(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize);
                                    3 === this.tiles[f.y][f.x] ? this.p5.cursor("pointer") : this.p5.cursor("auto")
                                }
                                if (p && this.state.buyTowerName) {
                                    this.p5.cursor("pointer");
                                    var m = P(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize),
                                        g = H(m.x, m.y, this.tileSize, this.p5),
                                        y = this.state.buyTower.gridPos && this.state.buyTower.gridPos.x === m.x && this.state.buyTower.gridPos.y === m.y ? this.state.buyTower : new Rt(m.x, m.y, this.p5, this.tileSize, this.state.buyTowerName, this.towerImages);
                                    if (this.setState({
                                            buyTower: y
                                        }), this.showRange(y), 0 !== this.tiles[m.y][m.x]) {
                                        this.p5.push(), this.p5.translate(g.x, g.y), this.p5.rotate(Math.PI / 4), this.p5.noStroke(), this.p5.fill(207, 0, 15);
                                        var _ = .1 * this.tileSize,
                                            v = .9 * this.tileSize / 2;
                                        this.p5.rect(-_, v, 2 * _, 2 * -v), this.p5.rotate(Math.PI / 2), this.p5.rect(-_, v, 2 * _, 2 * -v), this.p5.pop()
                                    } else y.draw(this.tileSize)
                                }
                                this.waitingOnWave && this.ticksUntilWave <= 0 && (this.ticksUntilWave = 0, this.nextWave()), 0 === this.futureEnemies.length && !this.waitingOnWave && this.roundGoing && (this.ticksUntilWave = this.waveCd, this.waitingOnWave = !0)
                            }
                        }
                    }, {
                        key: "mouseClicked",
                        value: function(e) {
                            if (K(e.mouseX, e.mouseY, this.numColumns, this.numRows, this.tileSize) && !(this.state.isSmall && this.state.towerSelected && this.state.towerSelected.title || this.state.chanceDesc || this.state.roundCompleted)) {
                                var t = P(e.mouseX, e.mouseY, this.p5, this.tileSize),
                                    a = this.getTower(t.x, t.y);
                                a && "tower" === this.state.phase ? this.state.towerSelected === a ? this.setState({
                                    towerSelected: {}
                                }) : this.setState({
                                    towerSelected: a
                                }) : this.setState({
                                    towerSelected: {}
                                }), this.state.buyTowerName && this.buyTower()
                            }
                        }
                    }, {
                        key: "answerTour",
                        value: function(e) {
                            this.here && (e ? this.setState({
                                askTour: !1,
                                showTour: !0,
                                roundGoing: !0
                            }) : this.setState({
                                askTour: !1,
                                showTour: !1,
                                roundCompleted: !0,
                                roundGoing: !1
                            }))
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq ? this.kingReq && this.kingResponses.push(this.state.correct) : this.questionResults.push(this.state.correct);
                            var e = 0;
                            return this.state.correct && (e += 1, this.bonusQuestion && (e += 2), this.freezeCounter > 0 && this.isFreeze ? (this.freezeCounter -= 1, e -= 1) : this.kingReq && (e -= 1)), this.kingReq && this.kingResponses.length >= 2 ? (this.kingResponses.filter((function(e) {
                                return e
                            })).length >= 2 && (this.dmg *= 2, this.setState({
                                totalDmg: this.dmg
                            })), this.kingReq = !1, this.kingResponses = [], "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                phase: this.oldPhase
                            })) : this.bonusQuestion || this.noQuestionFrenzy || this.freezeCounter <= 0 && this.isFreeze ? (this.bonusQuestion = !1, this.questionFrenzy = !1, this.noQuestionFrenzy = !1, this.isFreeze = !1, "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e,
                                phase: this.oldPhase
                            })) : (this.questionResults.length >= 3 && !this.questionFrenzy && !this.isFreeze && !this.kingReq ? (this.questionResults.filter((function(e) {
                                return e
                            })).length >= 3 && (e += Math.floor(this.state.round / 10) + 1), 1 === this.state.round && this.state.tokens + e < 2 && (e = 2 - this.state.tokens), this.setState({
                                phase: "tower"
                            })) : this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e
                            }))
                        }
                    }, {
                        key: "updateDmg",
                        value: function(e) {
                            this.dmg += e
                        }
                    }, {
                        key: "resizeFit",
                        value: function() {
                            var e = Math.floor(this.canvasParentRef.offsetWidth / this.numColumns),
                                t = Math.floor(this.canvasParentRef.offsetHeight / this.numRows);
                            this.tileSize = Math.min(e, t), this.p5.resizeCanvas(this.numColumns * this.tileSize, this.numRows * this.tileSize, !0)
                        }
                    }, {
                        key: "recalculate",
                        value: function() {
                            var e = this;
                            this.walkMap = this.getWalkMap();
                            var t = [],
                                a = "".concat(this.exit.x, ",").concat(this.exit.y);
                            t.push(a);
                            var s = {},
                                i = {};
                            for (s[a] = null, i[a] = 0; 0 !== t.length;)
                                for (var o = t.shift(), n = D(o, this.p5), r = q(this.walkMap, n.x, n.y, !0), l = 0; l < r.length; l++) {
                                    var c = r[l];
                                    c in s && c in i || (t.push(c), s[c] = o, i[c] = i[o] + 1)
                                }
                            this.dists = A(this.numRows, this.numColumns, null);
                            for (var h = A(this.numRows, this.numColumns, 0), u = Object.keys(s), d = 0; d < u.length; d++) {
                                var p = u[d],
                                    f = D(p, this.p5);
                                this.dists[f.y][f.x] = i[p];
                                var m = s[p];
                                if (null !== m) {
                                    var g = D(m, this.p5).sub(f);
                                    g.x < 0 && (h[f.y][f.x] = 1), g.y < 0 && (h[f.y][f.x] = 2), g.x > 0 && (h[f.y][f.x] = 3), g.y > 0 && (h[f.y][f.x] = 4)
                                }
                            }
                            var y = [];
                            this.spawnpoints.forEach((function(t) {
                                for (var a = A(e.numRows, e.numColumns, 0), s = {
                                        x: t.x,
                                        y: t.y
                                    }, i = h[s.y][s.x]; i;) 1 === i ? (s.x -= 1, i = 3) : 2 === i ? (s.y -= 1, i = 4) : 3 === i ? (s.x += 1, i = 1) : 4 === i && (s.y += 1, i = 2), a[s.y][s.x] = i, i = h[s.y][s.x];
                                y.push(a)
                            })), this.backPaths = y, this.paths = h
                        }
                    }, {
                        key: "walkable",
                        value: function(e, t) {
                            return [1, 4, 5].includes(this.tiles[t][e])
                        }
                    }, {
                        key: "outsideMap",
                        value: function(e) {
                            return z(e.pos.x, e.pos.y, 0, 0, this.numColumns * this.tileSize, this.numRows * this.tileSize)
                        }
                    }, {
                        key: "resetGame",
                        value: function() {
                            var e = this;
                            this.map = Nt.a[this.props.defense.map], this.numRows = this.map.tiles.length, this.numColumns = this.map.tiles[0].length, this.tiles = A(this.numRows, this.numColumns), this.map.tiles.forEach((function(t, a) {
                                t.forEach((function(t, s) {
                                    e.tiles[a][s] = t, 4 === t ? e.spawnpoints.push({
                                        x: s,
                                        y: a
                                    }) : 5 === t && (e.exit = {
                                        x: s,
                                        y: a
                                    })
                                }))
                            })), this.resizeFit(), this.recalculate(), this.props.defense.towers.forEach((function(t) {
                                var a = new Rt(t.col, t.row, e.p5, e.tileSize, t.name, e.towerImages);
                                e.tiles[t.row][t.col] = 3, t.upIndexes.forEach((function(e, t) {
                                    a.upgrade(a.upgrades[t][e].data, e)
                                })), e.towers.push(a)
                            }))
                        }
                    }, {
                        key: "showRange",
                        value: function(e) {
                            if (!this.outsideMap(e)) {
                                this.p5.push(), this.p5.stroke("#3a3a3a77"), this.p5.strokeWeight(3), this.p5.fill(128, 128, 128, 63);
                                var t = (e.range + .5) * this.tileSize * 2;
                                this.p5.ellipse(e.pos.x, e.pos.y, t, t), this.p5.pop()
                            }
                        }
                    }, {
                        key: "buyTower",
                        value: function(e) {
                            if (this.state.buyTower && this.state.buyTower.gridPos && !this.outsideMap(this.state.buyTower) && (!this.state.isSmall || e)) {
                                var t = this.state.buyTower.cost && this.state.tokens >= this.state.buyTower.cost,
                                    a = this.state.buyTower.gridPos && 0 === this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x];
                                t && a && (this.towers.push(this.state.buyTower), this.state.buyTower.fullCd > 100 && (this.towers[this.towers.length - 1].fullCd += this.towers.filter((function(e) {
                                    return e.fullCd > 100
                                })).length - 1), this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x] = 3, this.setState({
                                    towerSelected: this.state.showTour && this.state.isSmall ? {} : this.state.buyTower,
                                    tokens: this.state.tokens - this.state.buyTower.cost
                                }), this.state.showTour && this.tourRef.current.setStep(7)), this.setState({
                                    buyTowerName: "",
                                    buyTower: {},
                                    showShop: !1
                                })
                            }
                        }
                    }, {
                        key: "nextRound",
                        value: function() {
                            this.roundGoing || (this.state.round <= jt.length ? this.waves = JSON.parse(JSON.stringify(jt[this.state.round - 1])) : this.waves = [{
                                wait: 180,
                                cd: 5,
                                enemies: {
                                    types: [2300 + 220 * (this.state.round - 50)],
                                    count: this.state.round - 50 + 40
                                }
                            }, {
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [11e3 + 350 * (this.state.round - 50)],
                                    count: 1
                                }
                            }], this.finalBoss && (this.finalBoss = !1, this.waves.push({
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [500 * this.state.round],
                                    count: 1
                                }
                            })), this.setState({
                                roundGoing: !0,
                                doubleSpeed: this.state.doubleSpeed || this.state.isLive
                            }), this.roundGoing = !0, this.waitingOnWave = !1, this.nextWave())
                        }
                    }, {
                        key: "nextWave",
                        value: function() {
                            var e = this;
                            if (!this.gameOver)
                                if (0 !== this.waves.length) {
                                    if (this.spawnFish) {
                                        this.spawnFish = !1;
                                        var t = 5;
                                        this.fishInterval = setInterval((function() {
                                            e.projectiles.push(new bt(e.exit.x * e.tileSize + e.tileSize / 2, e.exit.y * e.tileSize + e.tileSize / 2, null, 100, e.p5, Object(E.p)(e.backPaths))), (t -= 1) <= 0 && clearInterval(e.fishInterval)
                                        }), 750)
                                    }
                                    this.futureEnemies = [];
                                    var a = this.waves.shift();
                                    this.waveCd = a.wait, this.spawnCd = a.cd;
                                    for (var s = 0; s < a.enemies.count; s++) a.enemies.types.forEach((function(t) {
                                        e.futureEnemies.push(t)
                                    }))
                                } else 0 === this.enemies.length && (this.waitingOnWave = !1, this.roundGoing = !1, this.endTimeout = setTimeout((function() {
                                    e.questionResults = [];
                                    var t = e.state.round + 1;
                                    e.setState({
                                        roundGoing: !1,
                                        roundCompleted: !0,
                                        goalCompleted: !!e.props.defense.hwGoal && parseInt(e.props.defense.hwGoal, 10) === e.state.round,
                                        buyTowerName: "",
                                        buyTower: {},
                                        showShop: !1,
                                        round: t
                                    }), e.props.defense.defenseId && It.a.put("/api/defenses/save", {
                                        id: e.props.defense.defenseId,
                                        corrects: e.corrects,
                                        incorrects: e.incorrects,
                                        dmg: e.dmg,
                                        round: t,
                                        health: e.state.health,
                                        tokens: e.state.tokens,
                                        towers: e.towers.map((function(e) {
                                            return {
                                                name: e.name,
                                                upIndexes: e.upIndexes,
                                                col: e.gridPos.x,
                                                row: e.gridPos.y
                                            }
                                        }))
                                    }).catch((function(t) {
                                        console.error(t), e.props.history.push("/login")
                                    })), e.props.defense.resultId && It.a.put("/api/results", {
                                        id: e.props.defense.resultId,
                                        data: {
                                            corrects: e.corrects,
                                            incorrects: e.incorrects,
                                            round: t,
                                            alive: !0
                                        }
                                    }).catch((function(e) {
                                        console.error(e)
                                    }))
                                }), 1e3))
                        }
                    }, {
                        key: "sellTower",
                        value: function() {
                            var e = this.towers.indexOf(this.state.towerSelected); - 1 !== e ? (this.tiles[this.state.towerSelected.gridPos.y][this.state.towerSelected.gridPos.x] = 0, this.towers.splice(e, 1), this.setState({
                                tokens: this.state.tokens + this.state.towerSelected.getSellPrice(),
                                towerSelected: {}
                            })) : this.setState({
                                towerSelected: {}
                            })
                        }
                    }, {
                        key: "upgradeTower",
                        value: function(e, t) {
                            var a = this.state.tokens - e.data.cost;
                            a < 0 || (this.state.towerSelected.upgrade(e.data, t), this.setState({
                                tokens: a
                            }))
                        }
                    }, {
                        key: "chooseChance",
                        value: function(e) {
                            !1 === e ? this.setState({
                                event: {},
                                eventName: "",
                                chanceDesc: "",
                                chanceColor: ""
                            }) : Math.random() > .5 ? (this.dmg *= 2, this.setState({
                                chanceDesc: "Lucky! You just doubled your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#4bc22e"
                            })) : (this.dmg = Math.round(this.dmg / 2), this.setState({
                                chanceDesc: "Unlucky! You just lost half your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#c43a35"
                            }))
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.here && (this.props.setDefense(Lt(Lt({}, this.props.defense), {}, {
                                corrects: this.corrects,
                                incorrects: this.incorrects,
                                towers: this.towers.map((function(e) {
                                    return {
                                        name: e.name,
                                        upIndexes: e.upIndexes,
                                        col: e.gridPos.x,
                                        row: e.gridPos.y
                                    }
                                })),
                                health: 0,
                                dmg: this.dmg,
                                round: this.state.round,
                                tokens: this.state.tokens,
                                stage: "final"
                            })), this.props.history.push("/defense/final"))
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = At(zt().mark((function e() {
                            var t, a = this;
                            return zt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, s) {
                                            var i = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return s();
                                            e.includes("`*`") && (i = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(i), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), s()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, a = this;
                            return this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.defense && this.props.defense.questions && this.props.defense.questions[0] ? i.a.createElement("div", {
                                className: h.isMobile ? v.a.mBody : v.a.body,
                                id: "body"
                            }, i.a.createElement(m.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), i.a.createElement(w.a, {
                                name: this.props.client && this.props.client.name ? this.props.client.name : "",
                                coins: this.state.tokens,
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), this.state.ready ? i.a.createElement("div", {
                                className: f()(v.a.regularBody, y.a.bodyContainer),
                                id: "regularBody"
                            }, this.state.showTour ? i.a.createElement(S.a, {
                                steps: (e = this.state.isSmall, t = this.state.isLive, [{
                                    elementId: e ? "mBottom" : "health",
                                    text: t ? "In Tower Defense, your goal is to defend against waves of Evil Blooks. You win by dealing the most damage to Evil Blooks, shown here!" : "In Tower Defense, your goal is to defend against waves of Evil Blooks. That means you have to keep this health above 0!",
                                    nextButtonText: "Next",
                                    backgroundColor: "#fff",
                                    className: I.a.health
                                }, {
                                    text: "To defend against these waves, you'll need to buy and upgrade Towers! It will take Upgrade Tokens to do this.",
                                    nextButtonText: "Next",
                                    className: I.a.centered
                                }, {
                                    text: "Before each round of enemies, you'll answer three questions. You get 1 Upgrade Token for each correct answer, and a bonus token for getting all 3 correct!",
                                    nextButtonText: "Next",
                                    className: I.a.centered,
                                    functionIndex: 0
                                }, {
                                    elementId: e ? "header" : "coinsText",
                                    text: "We'll answer those for you right now, and because we got all 3 correct, you can see 4 Upgrade Tokens in the top right!",
                                    nextButtonText: "Next",
                                    backgroundColor: e ? null : "#9a49aa",
                                    className: I.a.topRight
                                }, {
                                    text: "Evil Blooks will spawn at the arrow on the map and follow the path towards the 'X'! Towers will attack them to prevent this.",
                                    nextButtonText: "Next",
                                    className: I.a.centered
                                }, {
                                    text: e ? "Now try buying a Tower! Just tap the 'Open Shop' button, choose a Blook, tap to place it on the map, and then tap 'Confirm Buy'! The price of each Tower is shown in the blue box." : "Now try buying a Tower! Just click a Blook to the right and then place it on the map. The price of each Tower is shown in the blue box.",
                                    nextButtonText: "Got It!",
                                    className: I.a.shop
                                }, {
                                    functionIndex: 1
                                }, {
                                    elementId: "stats",
                                    text: "Great work! You can now click on the tower to see its stats and buy upgrades. Each Blook has 3 stages, you can pick one upgrade per stage and the final upgrade is the most powerful!",
                                    nextButtonText: "Next",
                                    className: I.a.stats
                                }, {
                                    elementId: e ? "mNextRound" : "nextRound",
                                    text: "Make sure you upgrade your Towers and buy new ones. Now you're on your own! Click the 'Next Round' button to begin!",
                                    elementClick: !0,
                                    className: I.a.nextRound
                                }]),
                                onExit: function() {
                                    return a.setState({
                                        showTour: !1
                                    })
                                },
                                functions: [function() {
                                    return a.setState({
                                        tokens: 4
                                    })
                                }, function() {
                                    return a.setState({
                                        roundGoing: !1,
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                }],
                                ref: this.tourRef
                            }) : null, i.a.createElement("div", {
                                className: y.a.mTopContainer
                            }, i.a.createElement("div", {
                                className: y.a.mRoundText
                            }, "Round ".concat(this.state.round)), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                                className: y.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return a.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "mNextRound"
                            }, i.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? i.a.createElement("div", {
                                className: y.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        doubleSpeed: !a.state.doubleSpeed
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                                className: y.a.leftSide,
                                style: {
                                    transform: "translateX(".concat(this.state.towerSelected.title || this.state.buyTowerName ? 0 : -110, "%)")
                                },
                                id: "stats"
                            }, this.state.buyTowerName ? i.a.createElement("div", null, i.a.createElement("div", {
                                className: y.a.infoRow
                            }, i.a.createElement("img", {
                                src: Jt[this.state.buyTower.blook],
                                alt: this.state.buyTower.blook,
                                className: y.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: y.a.infoTitle
                            }, this.state.buyTower.title)), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.buyTower.damage)), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.buyTower.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.buyTower.range)), i.a.createElement("div", {
                                className: y.a.descText
                            }, i.a.createElement("div", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, "Description:"), this.state.buyTower.desc)) : null, this.state.towerSelected.title ? i.a.createElement("div", null, i.a.createElement("div", {
                                className: y.a.infoRow
                            }, i.a.createElement("img", {
                                src: Jt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: y.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: y.a.infoTitle
                            }, this.state.towerSelected.title)), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)), i.a.createElement("div", {
                                className: y.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, i.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                                className: y.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return i.a.createElement("div", {
                                    className: f()(y.a.upgradeContainer, qt({}, y.a.towerShopFaded, a.state.tokens < e.data.cost || 3 === a.state.towerSelected.level)),
                                    style: {
                                        opacity: a.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === a.state.towerSelected.level ? function() {} : function() {
                                        return a.upgradeTower(e, t)
                                    }
                                }, i.a.createElement("div", {
                                    className: y.a.upgradeRow
                                }, e.icon ? i.a.createElement("i", {
                                    className: f()(y.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : i.a.createElement("img", {
                                    src: Jt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: y.a.upgradeBlook,
                                    draggable: !1
                                }), i.a.createElement("div", {
                                    className: y.a.upgradeTitle
                                }, e.data.title)), i.a.createElement("div", {
                                    className: y.a.upgradeDesc
                                }, e.desc), 3 !== a.state.towerSelected.level ? i.a.createElement("div", {
                                    className: y.a.shopPrice
                                }, e.data.cost) : null)
                            }))) : null), i.a.createElement(d.a, {
                                preload: this.preload,
                                setup: this.setup,
                                draw: this.draw,
                                mouseClicked: this.mouseClicked
                            }), this.state.buyTowerName && (h.isMobile || this.state.isSmall) && !this.outsideMap(this.state.buyTower) ? i.a.createElement("div", {
                                className: y.a.buyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.buyTower(!0)
                                }
                            }, "Confirm Buy") : null, i.a.createElement("div", {
                                className: y.a.rightSide
                            }, i.a.createElement("div", {
                                className: y.a.healthRow,
                                id: "health"
                            }, this.state.isLive ? null : i.a.createElement("div", {
                                className: y.a.healthBarHolder
                            }, i.a.createElement("div", {
                                className: y.a.healthBar,
                                style: {
                                    transform: "scaleX(".concat(this.state.health / 100, ")")
                                }
                            })), this.state.isLive ? i.a.createElement("div", {
                                className: y.a.dmgText
                            }, Object(E.o)(this.state.totalDmg)) : i.a.createElement("div", {
                                className: y.a.healthText
                            }, this.state.health), i.a.createElement("i", {
                                className: f()(y.a.healthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            })), i.a.createElement("div", {
                                className: y.a.roundText
                            }, "Round ".concat(this.state.round)), i.a.createElement("div", {
                                className: y.a.shopContainer
                            }, Object.entries(Ot).map((function(e) {
                                var t = Bt(e, 2),
                                    s = t[0],
                                    o = t[1];
                                return i.a.createElement("div", {
                                    className: f()(y.a.towerShopContainer, qt({}, y.a.towerShopSelected, a.state.buyTowerName === s), qt({}, y.a.towerShopFaded, a.state.tokens < o.cost || a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s)),
                                    key: s,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: a.state.tokens < o.cost || a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s ? function() {} : a.state.buyTowerName === s ? function() {
                                        return a.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return a.setState({
                                            buyTowerName: s,
                                            buyTower: new Rt(-1, -1, a.p5, a.tileSize, s, a.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, i.a.createElement("img", {
                                    src: Jt[o.blook],
                                    alt: o.blook,
                                    className: y.a.shopBlook,
                                    draggable: !1
                                }), a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s ? i.a.createElement("div", {
                                    className: y.a.shopLockedContainer
                                }, i.a.createElement("i", {
                                    className: f()(y.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === s ? 5 : "king" === s ? 15 : 20)) : i.a.createElement("div", {
                                    className: y.a.shopPrice
                                }, o.cost))
                            }))), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                                className: y.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return a.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "nextRound"
                            }, i.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? i.a.createElement("div", {
                                className: y.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        doubleSpeed: !a.state.doubleSpeed
                                    })
                                },
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, i.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                                className: y.a.mBottomSpacer
                            }), i.a.createElement("div", {
                                className: y.a.mBottomContainer,
                                id: "mBottom"
                            }, this.state.buyTowerName && this.state.isSmall ? this.outsideMap(this.state.buyTower) ? i.a.createElement("div", {
                                className: y.a.mNoBuy
                            }, "Select Grid to Place Tower") : i.a.createElement("div", {
                                className: y.a.mBuyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.buyTower(!0)
                                }
                            }, "Confirm Buy") : i.a.createElement("div", {
                                className: y.a.mOpenButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        showShop: !a.state.showShop
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: this.state.showShop ? "fas fa-angle-down" : "fas fa-angle-up",
                                style: {
                                    marginLeft: 10,
                                    marginRight: 7,
                                    fontSize: 32
                                }
                            }), this.state.showShop ? "Close Shop" : "Open Shop", i.a.createElement("div", {
                                className: y.a.mHealthRow
                            }, i.a.createElement("div", {
                                className: y.a.mHealthText
                            }, this.state.isLive ? Object(E.v)(this.state.totalDmg) : this.state.health), i.a.createElement("i", {
                                className: f()(y.a.mHealthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            }))), this.state.showShop && !this.state.buyTowerName ? i.a.createElement("div", {
                                className: y.a.shopContainer
                            }, Object.entries(Ot).map((function(e) {
                                var t = Bt(e, 2),
                                    s = t[0],
                                    o = t[1];
                                return i.a.createElement("div", {
                                    className: f()(y.a.towerShopContainer, qt({}, y.a.towerShopSelected, a.state.buyTowerName === s), qt({}, y.a.towerShopFaded, a.state.tokens < o.cost || a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s)),
                                    key: s,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: a.state.tokens < o.cost || a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s ? function() {} : a.state.buyTowerName === s ? function() {
                                        return a.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return a.setState({
                                            buyTowerName: s,
                                            buyTower: new Rt(-1, -1, a.p5, a.tileSize, s, a.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, i.a.createElement("img", {
                                    src: Jt[o.blook],
                                    alt: o.blook,
                                    className: y.a.shopBlook,
                                    draggable: !1
                                }), a.state.round < 5 && "penguin" === s || a.state.round < 15 && "king" === s || a.state.round < 20 && "jester" === s ? i.a.createElement("div", {
                                    className: y.a.shopLockedContainer
                                }, i.a.createElement("i", {
                                    className: f()(y.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === s ? 5 : "king" === s ? 15 : 20)) : i.a.createElement("div", {
                                    className: y.a.shopPrice
                                }, o.cost))
                            }))) : null)) : null, "question" === this.state.phase ? i.a.createElement("div", {
                                className: y.a.questionContainer
                            }, i.a.createElement(x.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: this.isFreeze ? "freeze" : this.bonusQuestion ? "orange" : this.questionFrenzy ? "purple" : this.kingReq ? "red" : ""
                            })) : "feedback" === this.state.phase ? i.a.createElement("div", {
                                className: y.a.questionContainer
                            }, i.a.createElement(k.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, this.state.roundCompleted ? i.a.createElement("div", {
                                className: v.a.modal,
                                style: {
                                    zIndex: 7
                                }
                            }, i.a.createElement("div", {
                                className: y.a.modalContainer
                            }, i.a.createElement("div", {
                                className: y.a.modalText
                            }, 1 === this.state.round ? "Ready to Start?" : "Round ".concat(this.state.round - 1, " Complete!")), i.a.createElement("div", {
                                className: y.a.modalButtonRow
                            }, i.a.createElement("div", {
                                className: y.a.modalButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.getQuestion
                            }, "Get Questions")))) : null, this.state.towerSelected && this.state.towerSelected.title ? i.a.createElement("div", {
                                className: f()(v.a.modal, y.a.mModal),
                                style: {
                                    zIndex: 6
                                }
                            }, i.a.createElement("div", {
                                className: y.a.mTowerSelected
                            }, i.a.createElement("div", {
                                className: y.a.infoRow
                            }, i.a.createElement("img", {
                                src: Jt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: y.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: y.a.infoTitle
                            }, this.state.towerSelected.title)), i.a.createElement("div", {
                                className: y.a.sellContainer
                            }, i.a.createElement("div", {
                                className: y.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, i.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                                className: y.a.statInfoContainer
                            }, i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: y.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)))), i.a.createElement("div", {
                                className: y.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return i.a.createElement("div", {
                                    className: f()(y.a.upgradeContainer, qt({}, y.a.towerShopFaded, a.state.tokens < e.data.cost || 3 === a.state.towerSelected.level)),
                                    style: {
                                        opacity: a.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === a.state.towerSelected.level ? function() {} : function() {
                                        return a.upgradeTower(e, t)
                                    }
                                }, i.a.createElement("div", {
                                    className: y.a.upgradeRow
                                }, e.icon ? i.a.createElement("i", {
                                    className: f()(y.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : i.a.createElement("img", {
                                    src: Jt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: y.a.upgradeBlook,
                                    draggable: !1
                                }), i.a.createElement("div", {
                                    className: y.a.upgradeTitle
                                }, e.data.title, i.a.createElement("div", {
                                    className: y.a.upgradeDesc
                                }, e.desc))), 3 !== a.state.towerSelected.level ? i.a.createElement("div", {
                                    className: y.a.shopPrice
                                }, e.data.cost) : null)
                            })), i.a.createElement("div", {
                                className: y.a.mCloseTower,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return a.setState({
                                        towerSelected: {}
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: "fas fa-times"
                            })))) : null, this.state.askTour ? i.a.createElement(C.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return a.answerTour(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return a.answerTour(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.hwGoal && !this.state.showTour ? i.a.createElement(C.a, {
                                text: "Your goal for this homework is to survive for ".concat(this.state.hwGoal, " ").concat(1 === this.state.hwGoal ? "Round" : "Rounds", "!"),
                                buttonOne: {
                                    text: "Cool",
                                    click: function() {
                                        return a.setState({
                                            hwGoal: 0
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.goalCompleted ? i.a.createElement(C.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Keep Playing",
                                    click: function() {
                                        return a.setState({
                                            goalCompleted: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "End Now",
                                    click: this.endNow,
                                    color: "blue"
                                }
                            }) : null, this.state.gameOver ? i.a.createElement("div", {
                                className: f()(v.a.modal, y.a.modalFadeIn)
                            }, i.a.createElement("div", {
                                className: y.a.gameOverContainer
                            }, i.a.createElement("div", {
                                className: y.a.gameOverText
                            }, "Game Over"), i.a.createElement("div", {
                                className: y.a.gameOverTextSmall
                            }, "You ran out of health"))) : null, this.state.eventName ? i.a.createElement(N.a, {
                                icon: this.state.event.icon,
                                blook: this.state.event.blook,
                                color: this.state.chanceColor || this.state.event.color,
                                name: this.state.eventName,
                                desc: this.state.chanceDesc || this.state.event.desc,
                                onYes: this.state.chanceDesc ? function() {
                                    return a.chooseChance(!a.state.chanceColor)
                                } : null,
                                yesText: this.state.chanceColor ? "Ok" : "Yes",
                                onNo: this.state.chanceDesc && !this.state.chanceColor ? function() {
                                    return a.chooseChance(!1)
                                } : null,
                                noLeave: !!this.state.chanceDesc
                            }) : null) : i.a.createElement(c.a, {
                                to: "/login"
                            })
                        }
                    }]) && Ut(t.prototype, a), s && Ut(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(i.a.Component);
            $t.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                history: l.a.object.isRequired,
                setDefense: l.a.func.isRequired,
                setStanding: l.a.func.isRequired,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object,
                user: l.a.object
            };
            t.a = Object(O.c)(Object(c.g)(Object(o.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(n.b)({
                    setDefense: T.a,
                    setStanding: M.b,
                    deleteClient: B.a
                }, e)
            }))(Object(b.d)($t))))
        },
        z826: function(e, t, a) {
            var s = a("MaNU");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, i);
            s.locals && (e.exports = s.locals)
        }
    }
]);