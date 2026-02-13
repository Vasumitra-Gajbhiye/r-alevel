"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { CreateFormValues } from "@/types/form";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
type Props = {
  formType: string;
};

function SortableField({
  id,
  children,
  preview,
}: {
  id: string;
  children: React.ReactNode;
  preview: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: preview });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`rounded border p-3 space-y-2 bg-background ${
        isDragging ? "opacity-70" : ""
      }`}
    >
      {!preview && (
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground text-sm select-none"
        >
          ⠿ Drag field
        </div>
      )}

      {children}
    </div>
  );
}

function SortableSection({
  id,
  children,
  preview,
}: {
  id: string;
  children: React.ReactNode;
  preview: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: preview });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {!preview && (
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing text-muted-foreground text-sm select-none mb-2"
        >
          ⠿ Drag section
        </div>
      )}

      {children}
    </div>
  );
}

function SectionEditor({
  index,
  form,
  preview,
  // onReorderFields,
  onDeleteSection,
}: {
  index: number;
  form: any;
  preview: boolean;
  // onReorderFields: (
  //   sectionIndex: number,
  //   activeId: string,
  //   overId: string
  // ) => void;
  onDeleteSection: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: `sections.${index}.fields`,
    shouldUnregister: false, // 🔥 REQUIRED
  });

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium">Section</h3>

          {!preview && (
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? "Expand" : "Collapse"}
              </Button>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={onDeleteSection}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
          )}
        </div>

        {/* Title */}
        <Input
          disabled={preview}
          placeholder="Section title"
          {...form.register(`sections.${index}.title`)}
        />

        {/* Subtitle */}
        <Input
          disabled={preview}
          placeholder="Section subtitle"
          {...form.register(`sections.${index}.subtitle`, {
            shouldUnregister: false,
          })}
        />

        {/* Collapsible body */}
        {!collapsed && (
          <>
            {/* Empty state */}
            {fields.length === 0 && (
              <p className="text-sm text-muted-foreground">No fields yet.</p>
            )}

            {/* Fields */}
            {fields.length > 0 && (
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={(event) => {
                  const { active, over } = event;
                  if (!over || active.id === over.id) return;

                  const oldIndex = fields.findIndex((f) => f.id === active.id);

                  const newIndex = fields.findIndex((f) => f.id === over.id);

                  if (oldIndex === -1 || newIndex === -1) return;

                  move(oldIndex, newIndex);
                }}
              >
                <SortableContext
                  items={fields.map((f) => f.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {fields.map((field, j) => (
                    <SortableField
                      key={field.id}
                      id={field.id}
                      preview={preview}
                    >
                      <div className="space-y-4">
                        {/* Field Header */}
                        {!preview && (
                          <div className="flex items-center justify-end">
                            <div className="flex items-center gap-4 -mt-9">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  Required
                                </span>
                                <Switch
                                  checked={form.watch(
                                    `sections.${index}.fields.${j}.required`
                                  )}
                                  onCheckedChange={(val) =>
                                    form.setValue(
                                      `sections.${index}.fields.${j}.required`,
                                      val
                                    )
                                  }
                                />
                              </div>

                              <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                onClick={() => remove(j)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                        )}

                        {/* Label */}
                        <Input
                          disabled={preview}
                          placeholder="Field label"
                          {...form.register(
                            `sections.${index}.fields.${j}.label`
                          )}
                        />

                        {/* Type Selector */}
                        <div className="flex items-center gap-3">
                          <select
                            className="border rounded-md px-3 py-2 text-sm bg-background"
                            {...form.register(
                              `sections.${index}.fields.${j}.type`
                            )}
                          >
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="textarea">Textarea</option>
                            <option value="select">Select</option>
                          </select>
                        </div>

                        {/* Select Options */}
                        {form.watch(`sections.${index}.fields.${j}.type`) ===
                          "select" && (
                          <div className="space-y-2 border rounded-md p-3 bg-muted/30">
                            <div className="text-xs text-muted-foreground font-medium">
                              Options
                            </div>

                            {(
                              form.watch(
                                `sections.${index}.fields.${j}.options`
                              ) || []
                            ).map((_: any, k: number) => (
                              <Input
                                disabled={preview}
                                key={k}
                                placeholder={`Option ${k + 1}`}
                                {...form.register(
                                  `sections.${index}.fields.${j}.options.${k}`
                                )}
                              />
                            ))}

                            {!preview && (
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  const path =
                                    `sections.${index}.fields.${j}.options` as const;
                                  const current = form.getValues(path) || [];
                                  form.setValue(path, [...current, ""]);
                                }}
                              >
                                + Add Option
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </SortableField>
                  ))}
                </SortableContext>
              </DndContext>
            )}

            {/* Add field */}
            {!preview && (
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({
                    id: crypto.randomUUID(),
                    label: "",
                    type: "text",
                    required: false,
                    placeholder: "",
                    options: [],
                  })
                }
              >
                + Field
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

const onSubmit = async function (data: CreateFormValues) {
  console.log("FORM DATA:", data);
  await fetch("/api/forms/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

function SortableIntroBlock({
  block,
  index,
  preview,
  form,
  removeIntroBlock,
}: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: block.id,
    disabled: preview,
  });

  const type = form.watch(`introductionBlocks.${index}.type`);

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={`rounded-md border bg-background p-4 space-y-4 transition
        ${
          isDragging
            ? "opacity-60 shadow-xl ring-2 ring-primary/30"
            : "hover:border-primary/30"
        }`}
    >
      {!preview && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
            <GripVertical
              {...attributes}
              {...listeners}
              className="h-4 w-4 cursor-grab active:cursor-grabbing"
            />
            {type === "paragraph" ? "Paragraph" : "Bullet List"}
          </div>

          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => removeIntroBlock(index)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      )}

      {/* Paragraph */}
      {type === "paragraph" && (
        <Textarea
          disabled={preview}
          placeholder="Write introduction paragraph..."
          {...form.register(`introductionBlocks.${index}.text`)}
        />
      )}

      {/* Bullet List */}
      {type === "bullet_list" && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Bullet Color</span>
            <Input
              disabled={preview}
              type="color"
              className="w-16 h-9 p-1"
              {...form.register(`introductionBlocks.${index}.bulletColor`)}
            />
          </div>

          {(form.watch(`introductionBlocks.${index}.items`) || []).map(
            (_: any, j: number) => (
              <div key={j} className="flex items-center gap-2">
                <span className="text-muted-foreground">•</span>

                <Input
                  disabled={preview}
                  placeholder={`Bullet ${j + 1}`}
                  {...form.register(`introductionBlocks.${index}.items.${j}`)}
                />

                {!preview && (
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      const items =
                        form.getValues(`introductionBlocks.${index}.items`) ||
                        [];

                      const updated = items.filter(
                        (_: any, index: number) => index !== j
                      );

                      form.setValue(
                        `introductionBlocks.${index}.items`,
                        updated,
                        { shouldDirty: true }
                      );
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            )
          )}

          {!preview && (
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                const items =
                  form.getValues(`introductionBlocks.${index}.items`) || [];
                form.setValue(`introductionBlocks.${index}.items`, [
                  ...items,
                  "",
                ]);
              }}
            >
              + Add Bullet
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default function CreateForm({ formType }: Props) {
  const router = useRouter();
  //   const [collapsed, setCollapsed] = useState(false);
  const [preview, setPreview] = useState(false);
  const form = useForm<CreateFormValues>({
    defaultValues: {
      title: "",
      slug: "",
      formType: formType,
      banner: {
        type: "gradient",
        value: "",
      },
      ctaText: "Submit Application",
      introductionBlocks: [],
      sections: [],
    },
  });

  const onError = (errors: any) => {
    console.log("FORM ERRORS:", errors);
  };

  const {
    fields: sections,
    append: addSection,
    remove: removeSection,
  } = useFieldArray({
    control: form.control,
    name: "sections",
  });

  const {
    fields: introBlocks,
    append: addIntroBlock,
    remove: removeIntroBlock,
    move: moveIntroBlock,
  } = useFieldArray({
    control: form.control,
    name: "introductionBlocks",
  });

  const startPreview = function () {
    console.log(preview);
    if (!preview) {
      console.log("preview started");
      const data = form.getValues();
      localStorage.setItem("form-preview", JSON.stringify(data));

      window.open(`/admin/forms/${formType}/preview`, "_blank");
    }
  };
  function reorderIntroBlocks(activeId: string, overId: string) {
    const oldIndex = introBlocks.findIndex((b) => b.id === activeId);
    const newIndex = introBlocks.findIndex((b) => b.id === overId);

    if (oldIndex === -1 || newIndex === -1) return;

    moveIntroBlock(oldIndex, newIndex);
  }

  return (
    <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit, onError)}>
      {/* BASIC INFO */}
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="font-medium">Basic Info</h2>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              startPreview();
              setPreview(!preview);
            }}
          >
            {preview ? "Back to Edit" : "Preview Form"}
          </Button>

          <Input
            disabled={preview}
            placeholder="Form title"
            {...form.register("title")}
          />
          <Input
            disabled={preview}
            placeholder="Slug (e.g. helper-intake-2)"
            {...form.register("slug")}
          />

          <Input
            disabled={preview}
            placeholder="Gradient (e.g. from-emerald-500 to-green-600)"
            {...form.register("banner.value")}
          />
        </CardContent>
      </Card>

      {/* INTRO BLOCKS */}
      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Introduction</h2>

            <div>
              {!preview && (
                <Button
                  type="button"
                  variant="outline"
                  className="mr-3"
                  onClick={() =>
                    addIntroBlock({
                      id: crypto.randomUUID(),
                      type: "paragraph",
                      text: "",
                    })
                  }
                >
                  + Paragraph
                </Button>
              )}

              {!preview && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    addIntroBlock({
                      id: crypto.randomUUID(),
                      type: "bullet_list",
                      bulletColor: "#22C55E",
                      items: [""],
                    })
                  }
                >
                  + Bullet List
                </Button>
              )}
            </div>
          </div>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={(event) => {
              const { active, over } = event;
              if (!over || active.id === over.id) return;

              reorderIntroBlocks(active.id as string, over.id as string);
            }}
          >
            <SortableContext
              items={introBlocks.map((b) => b.id)}
              strategy={verticalListSortingStrategy}
            >
              {introBlocks.map((block, i) => (
                <SortableIntroBlock
                  key={block.id}
                  block={block}
                  index={i}
                  preview={preview}
                  form={form}
                  removeIntroBlock={removeIntroBlock}
                />
              ))}
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>

      {/* SECTIONS */}
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Sections</h2>
            <div>
              {!preview && (
                <Button
                  type="button"
                  className="ml-4"
                  onClick={() =>
                    addSection({
                      id: crypto.randomUUID(),
                      title: "",
                      subtitle: "",
                      fields: [],
                    })
                  }
                >
                  + Section
                </Button>
              )}
            </div>
          </div>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={(event) => {
              const { active, over } = event;
              if (!over || active.id === over.id) return;

              const oldIndex = sections.findIndex((s) => s.id === active.id);
              const newIndex = sections.findIndex((s) => s.id === over.id);

              form.setValue(
                "sections",
                arrayMove(form.getValues("sections"), oldIndex, newIndex)
              );
            }}
          >
            <SortableContext
              items={sections.map((s) => s.id)}
              strategy={verticalListSortingStrategy}
            >
              {sections.map((section, i) => (
                <SortableSection
                  key={section.id}
                  id={section.id}
                  preview={preview}
                >
                  <SectionEditor
                    index={i}
                    form={form}
                    preview={preview}
                    // onReorderFields={reorderFields}
                    onDeleteSection={() => removeSection(i)}
                  />
                </SortableSection>
              ))}
            </SortableContext>
          </DndContext>
        </CardContent>
      </Card>

      {/* CONFIRMATION */}

      {/* FINAL WARNING */}
      <Card className="border-destructive">
        <CardContent className="space-y-4 p-6">
          <Badge variant="destructive">Warning</Badge>
          <p className="text-sm text-muted-foreground">
            Once this cycle is created, its content cannot be edited.
          </p>

          <Button type="submit" className="w-full">
            Create Cycle
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
