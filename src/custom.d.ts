type RecordItem = {
  tag: string;
  notes: string;
  type: string;
  amount: number;
  createAt?: string;
};
// type RecordListModel = {
//     data: RecordItem[];
//     clone: (data: RecordItem) => RecordItem;
//     fetch: () => RecordItem[];
//     // create: (name: string) => string | void;
//     save: () => void;
//     // update: (id: string,name: string) => 'success'|'notfound'|'duplicated';
//     // destory: (id: string) => boolean;
// };

type Tag = {
  id: string;
  name: string;
};
// type TagsListModel = {
//     data: Tag[];
//     fetch: () => Tag[];
//     create: (name: string) => string | void;
//     save: () => void;
//     update: (id: string,name: string) => 'success'|'notfound'|'duplicated';
//     destory: (id: string) => boolean;
// };
type DataSource = {
  text: string;
  value: string;
};
type result = { title: string; items: RecordItem[] };
