import { NetworkConfiguration, PolicyForm } from "@/types/policy";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFormContext } from "react-hook-form";
import React from "react";

export const wifiSsidColumns: ColumnDef<NetworkConfiguration>[] = [
  {
    id: "ssid",
    accessorFn: (row) => row.WiFi.SSID,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SSID
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="truncate">{row.getValue("ssid")}</div>,
  },
  {
    id: "security",
    accessorFn: (row) => row.WiFi.Security,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          type="button"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          セキュリティ
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="truncate">{row.getValue("security")}</div>
    ),
  },
];

type SsidsTableProps = {
  data: NetworkConfiguration[];
};

export default function SsidsTable({ data }: SsidsTableProps) {
  const form = useFormContext<PolicyForm>();
  const currentActiveSSID = form.watch("activeSSID");

  const columns: ColumnDef<NetworkConfiguration>[] = [
    ...wifiSsidColumns,
    {
      id: "setSwitch",
      header: "設定",
      cell: ({ row }) => {
        const networkConfiguration = row.original;
        const GUID = networkConfiguration.GUID;
        const isEnabled = currentActiveSSID?.includes(GUID);
        return (
          <div className="flex items-center gap-4">
            <Switch
              checked={isEnabled}
              onCheckedChange={(checked) => {
                return currentActiveSSID
                  ? checked
                    ? form.setValue("activeSSID", [...currentActiveSSID, GUID])
                    : form.setValue(
                        "activeSSID",
                        currentActiveSSID.filter((g) => g !== GUID)
                      )
                  : form.setValue("activeSSID", [GUID]);
              }}
            />
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">WiFi SSID</CardTitle>
        <CardDescription>
          WiFiのSSIDを管理します。
          <br />
          ネットワーク設定を追加すると、デバイスに自動的に適用されます。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="[&:has([role=checkbox])]:pl-3"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="[&:has([role=checkbox])]:pl-3"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    SSIDはありません。
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
