// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 25;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "ERROR",
  "Queen of the Murder Scene",
  "XXI Century Blood",
  "Keep Me Fed",
  "Singles(not on albums)"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "XXI Century Blood",                      [1,0,0], "TWA/XXI.jpg"],
  [1, "Shattered Heart",                        [1,0,0], "TWA/XXI.jpg"],
  [1, "Survive",                                [1,0,0], "TWA/XXI.jpg"],
  [1, "Wildfire",                               [1,0,0], "TWA/XXI.jpg"],
  [1, "Black Holes(Don't Hold On)",            [1,0,0], "TWA/XXI.jpg"],
  [1, "Our Mistakes",                           [1,0,0], "TWA/XXI.jpg"],
  [1, "When I'm Alone",                        [1,0,0], "TWA/XXI.jpg"],
  [1, "Runaway",                                [1,0,0], "TWA/XXI.jpg"],
  [1, "Unmendable",                             [1,0,0], "TWA/XXI.jpg"],
  [1, "Copper Bullets",                         [1,0,0], "TWA/XXI.jpg"],
  [1, "Show Me the Light",                      [1,0,0], "TWA/XXI.jpg"],	 
  [1, "Exterminated - Live Session",            [1,0,0], "TWA/XXI.jpg"],
  [1, "River's Soul - Live Session",            [1,0,0], "TWA/XXI.jpg"],
  
  [1, "Dust to Dust",                           [0,1,0], "TWA/QofMS.jpg"],
  [1, "Crimson Queen",                          [0,1,0], "TWA/QofMS.jpg"],
  [1, "Ugh",                                    [0,1,0], "TWA/QofMS.jpg"],
  [1, "The One",                                [0,1,0], "TWA/QofMS.jpg"],
  [1, "Stalker",                                [0,1,0], "TWA/QofMS.jpg"],
  [1, "Red Hands Never Fade",                   [0,1,0], "TWA/QofMS.jpg"],
  [1, "The Sacrifice",                          [0,1,0], "TWA/QofMS.jpg"],
  [1, "Sinister Smiles",                        [0,1,0], "TWA/QofMS.jpg"],
  [1, "Dull Knives(Cut Better)",                [0,1,0], "TWA/QofMS.jpg"],
  [1, "Queen of the Murder Scene",              [0,1,0], "TWA/QofMS.jpg"],
  [1, "P.S.Y.C.H.O.T.I.C.",                     [0,1,0], "TWA/QofMS.jpg"],
  [1, "Hunter",                                 [0,1,0], "TWA/QofMS.jpg"],
  [1, "The End(The Stars Always Seem to Fade)", [0,1,0], "TWA/QofMS.jpg"],
  
  [1, "Intro 404",                              [0,0,1], "TWA/ERROR.jpg"],
  [1, "DISCIPLE",                               [0,0,1], "TWA/ERROR.jpg"],
  [1, "CHOKE",                                  [0,0,1], "TWA/ERROR.jpg"],
  [1, "ANIMOSITY",                              [0,0,1], "TWA/ERROR.jpg"],
  [1, "MONEY",                                  [0,0,1], "TWA/ERROR.jpg"],
  [1, "AMOUR",                                  [0,0,1], "TWA/ERROR.jpg"],
  [1, "EVOLVE",                                 [0,0,1], "TWA/ERROR.jpg"],
  [1, "ERROR",                                  [0,0,1], "TWA/ERROR.jpg"],
  [1, "Z",                                      [0,0,1], "TWA/ERROR.jpg"],
  [1, "23",                                     [0,0,1], "TWA/ERROR.jpg"],
  [1, "KOOL AID KIDS",                          [0,0,1], "TWA/ERROR.jpg"],
  [1, "REVENANT",                               [0,0,1], "TWA/ERROR.jpg"],
  [1, "MARTIRIO",                               [0,0,1], "TWA/ERROR.jpg"],
  [1, "Breathe",                                [0,0,1], "TWA/ERROR.jpg"],
  
  [1, "Six Feet Deep",                          [0,0,0,1], "TWA/KMF.jpg"],
  [1, "S!CK",                                   [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Apologize",                              [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Qué Más Quieres",                        [0,0,0,1], "TWA/KMF.jpg"],
  [1, "MORE",                                   [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Escapism",                               [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Satisfied",                              [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Burnout",                                [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Sharks",                                 [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Hell You Call A Dream",                  [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Consume",                                [0,0,0,1], "TWA/KMF.jpg"],
  [1, "Automatic Sun",                          [0,0,0,1], "TWA/KMF.jpg"],
  
  [1, "Enter Sandman",                          [0,0,0,0,1], "TWA/Sandman.jpg"],
  [1, "Narcisista",                             [0,0,0,0,1], "TWA/Narcisista.jpg"],
  [1, "Take Me Down",                           [0,0,0,0,1], "TWA/EtM.jpg"],
  [1, "Fade Away",                              [0,0,0,0,1], "TWA/EtM.jpg"],
  [1, "Eternal Love",                           [0,0,0,0,1], "TWA/EtM.jpg"],
  [1, "Escape the Mind",                        [0,0,0,0,1], "TWA/EtM.jpg"],
  [1, "Free Falling",                           [0,0,0,0,1], "TWA/EtM.jpg"],
  [1, "Escape the Mind - Piano Only Bonus",     [0,0,0,0,1], "TWA/EtM.jpg"],  
];