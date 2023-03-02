class Table {
  constructor(arr) {
    this.reader = arr[0];
    arr.shift();
    this.rows = arr;
  }

  get RowCount() {
    return this.rows.length;
  }

  get ColumnCount() {
    return this.reader.length;
  }
}

module.exports = Table;
